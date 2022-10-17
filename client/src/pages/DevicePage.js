import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {

    const device= {id:1, name:"iphone 12",price: 23000, rating:4, img:'C:\\Users\\Marya\\WebstormProjects\\online-store-App\\server\\static\\8af81682-7adf-4eba-8be5-dce1d4151daf.jpg'}
    const description =[
        {id:1, title:'оперативна пам ять ', description: ' 5 гб'},
        {id:2, title:'камера ', description: ' 25 000px'},
        {id:3, title:'мікрофон ' , description: ' 55 гберц'}
    ]
    return (
      <Container>
         <Row className='mt-5'>
             <Col md={4}>
                 <Image width={300} height={300} src={device.img}/>
             </Col>
             <Col md={4}>
                 <Row className='d-flex flex-column align-items-center'>
                     <h2>{device.name}</h2>
                     <div className='d-flex align-items-center justify-content-center'
                          style={{background: `url(${bigStar}) no-repeat center center`, width:240, height:240, backgroundSize:"contain", fontSize:64}}>
                         {device.rating}
                     </div>
                 </Row>
             </Col>
             <Col md={4}>
                <Card className='d-flex flex-column align-items-center justify-content-around'
                style={{width:300, height:300, fontSize:32, border:"5px solid lightgray"}}>
                    <h3>Від: {device.price} грн.</h3>
                    <Button  variant={'outline-dark'}>Добавити в корзину</Button>
                </Card>
             </Col>
         </Row>
          <Row className='d-flex flex-column m-3'>
              <h1>Характеристики</h1>
              {description.map((info,index) =>
              <Row key={info.id} style={{background: index % 2===0 ? 'lightgray': 'transparent',padding:10}}>
                  {info.title}:{info.description}
              </Row>
              )}
          </Row>
      </Container>
    );
};

export default DevicePage;