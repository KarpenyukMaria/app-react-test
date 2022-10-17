import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {NavLink, useHistory} from "react-router-dom";
import {observe} from "mobx";
import {observer} from "mobx-react-lite";



const NavBar = observer(() => {
    const {user} = useContext(Context)
    const  history= useHistory()

    const logOut=()=>{
        user.setUser({})
        user.setIsAuth(false)
    }
    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>DeviceStore</NavLink>
                {user.isAuth ?
                    <Nav className="m-lg-auto" style={{color: "white"}}>
                        <Button variant={"outline-light"} onClick={() => history.push(ADMIN_ROUTE)}>Адмін панель</Button>
                        <Button variant={"outline-light"} className="m-lg-2"  onClick={()=>logOut()}>Вийти</Button>
                    </Nav>
                    :
                    <Nav className="m-lg-auto" style={{color: "white"}}>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Autorization</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});

export default NavBar;