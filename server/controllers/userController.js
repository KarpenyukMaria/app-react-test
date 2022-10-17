const ApiError=require("../error/ApiError")
const bcrypt= require('bcrypt')//хешування паролю
const jwt=require('jsonwebtoken')//для створення токену
const {User,Basket}= require('../models/models')

const generateJwt=(id,email,role)=>{
    return jwt.sign(
        {id,email,role},
        process.env.SECRET_KEY,
        {expiresIn:'24h'}
    )
}

class UserController{



    async registration(req,res,next){
        const {email,password,role}=req.body
        if(!email||!password){
            return next(ApiError.badRequest("Некоректний email чи password"))
        }
        const candidate= await User.findOne({where:{email}})
        if(candidate){
            return next(ApiError.badRequest("користувач з таким email вже існує"))
        }
        const hashPassword =await bcrypt.hash(password,5)// 5 раз хешуємо
        const user =await User.create({email,role,password:hashPassword})
        //створюємо корзину для користувача
        const basket =await Basket.create({userId:user.id})
        const token=generateJwt(user.id,user.email,user.role)
        return res.json(token)
    }
     async login(req,res,next){
        const {email,password}=req.body
         const user = await User.findOne({where:{email}})
         if(!user){
             return next(ApiError.internal('користувач не знайдений'))
         }
         let comparedPassword=bcrypt.compareSync(password,user.password)
         if(!comparedPassword){
             return  next(ApiError.internal("вказаний невірний парроль"))
         }
         const token =generateJwt(user.id,user.email,user.role)
         res.json(token)
     }
     async check(req,res,next){
      const token= generateJwt(req.user.id,req.user.email,req.user.role)
         return res.json({token})
     }
}

module.exports=new UserController();