import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const CreateType = ({show, onHide}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Добавити тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control placeholder={'Введіть назву типу'}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={show}>Закрити</Button>
                <Button variant='outline-success' onClick={show}>Добавити</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;