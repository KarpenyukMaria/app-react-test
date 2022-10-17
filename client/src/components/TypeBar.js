import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {useLocation} from "react-router-dom";
import {Context} from "../index";

const TypeBar = observer(() => {
    const {device}=useContext(Context)
    return (
       <ListGroup>
           {
               device.types.map(type =>
               <ListGroup.Item
                   style={{cursor:"pointer"}}
                   active={type.id===device.selectedType.id}
                   onClick={()=>device.setSelectedType(type)}
                   key={type.id}>
                   {type.name}
               </ListGroup.Item>)
           }
       </ListGroup>
    );
});

export default TypeBar;