import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, FormControl, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";

const CreateDevice = ({show,onHide}) => {
    const {device}=useContext(Context)
    const [info, setInfo]= useState([])

    const addInfo=()=>{
        setInfo([...info,{title:'', description:'', number:Date.now()}])
    }
    const removeInfo=(number)=>{
        setInfo(info.filter(i=>i.number !==number))
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавити пристрій
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                   <Dropdown className='mt-3 mb-2'>
                       <Dropdown.Toggle>Виберіть тип</Dropdown.Toggle>
                       <Dropdown.Menu>
                           {device.types.map(type =>
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                           )}
                       </Dropdown.Menu>
                   </Dropdown>
                    <Dropdown className='mt-3 mb-2'>
                        <Dropdown.Toggle>Виберіть бренд</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <FormControl placeholder='Введіть назву пристрою' className='mt-3'/>
                    <FormControl placeholder='Введіть ціну пристрою' type='number' className='mt-3'/>
                    <FormControl  type='file' className='mt-3'/>
                    <hr/>
                    <Button variant='outline-dark' onClick={()=>addInfo()}>Добавити нову властивість </Button>
                    {info.map(i =>
                        <Row className='mt-4' key={i.number}>
                            <Col md={4} className='mt-2'>
                                <Form.Control placeholder='введіть назву властивості'/>
                            </Col>
                            <Col md={4} className='mt-2'>
                                <Form.Control placeholder='введіть опис властивості'/>
                            </Col>
                            <Col md={4} className='mt-2'>
                                <Button variant={'outline-danger'}  onClick={()=>removeInfo(i.number)}>видалити</Button>
                            </Col>
                        </Row>

                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={show}>Закрити</Button>
                <Button variant='outline-success' onClick={show}>Добавити</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;