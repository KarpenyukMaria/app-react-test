require('dotenv').config()
const express=require('express')
const sequelize=require('./db')//import database
const models=require('./models/models')// import model of database
const cors=require('cors')//for request from browser
const fileUpload=require('express-fileupload')
const router=require('./routes/index')
const errorHandler=require('./middleware/ErrorHandlingMiddleware')
const path=require('path')

const PORT=process.env.PORT || 5000

const app=express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,"static")))//browser get images from folder
app.use(fileUpload({}))
app.use('/api', router)
//обробка помилок , останній мідлвеа

app.use(errorHandler)

const start=async ()=>{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT,()=>console.log(`server started on port ${PORT}`))
    }catch (e){
        console.log(e);
    }
}
start()

