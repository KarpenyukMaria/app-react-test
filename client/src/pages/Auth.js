import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";


const Auth = observer(() => {
    const {user}=useContext(Context)
    const location=useLocation();
    const history=useHistory();
    //console.log(location)
    const isLogin=location.pathname===LOGIN_ROUTE
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')

    const click=async() =>{
       try{
           let data;
           if(isLogin){
               data= await login(email,password)

           }else{
               data= await registration(email,password)
           }
           user.setUser(user)
           user.setIsAuth(true)
           history.push(SHOP_ROUTE);
       }catch (e){
           alert(e.response.data.message)
       }
    }
    return (
        <Container className='d-flex justify-content-center align-content-center' style={{height: window.innerHeight-54}}>
            <Card style={{width:600}}  className={'p-5'}>
                <h2>{isLogin ? 'Autorization': "Registration"}</h2>
                <Form className='d-flex flex-column' >
                    <Form.Control  className='mt-0' placeholder="Введіть ваш Email" value={email}  onChange={e=>setEmail(e.target.value)}/>
                    <Form.Control className='mt-2' placeholder="Введіть ваш пароль" type='password' value={password}  onChange={e=>setPassword(e.target.value)}/>
                   <Row  className="d-flex justify-content-between pl-3 pr-3">
                       {isLogin ?
                           <div>Немає акаунта?  <NavLink to={REGISTRATION_ROUTE}>Зареєструйся</NavLink></div>
                           :
                          <div>Маєш Акаунт?  <NavLink to={LOGIN_ROUTE}>Увійти</NavLink></div>
                       }

                       <Button className='mt-3 align-self-end' variant={"outline-success"} onClick={()=>click()}>
                           {isLogin ?
                               "Увійти"
                               :
                               "Реєстрація"
                           }
                       </Button>
                  </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;