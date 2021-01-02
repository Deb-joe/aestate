import React from 'react';
import './Gallery.css';
import { Container, Col, Row, Image } from 'react-bootstrap';

export const Gallery = (props) => (
 
 <Container>
  <Row>
    <Col xs={12} md={6}>
      <Image src="http://images.dailyhive.com/20160919115313/Real-estate-in-Vancouver-Shutterstock.jpg" fluid />
    </Col>
    <Col xs={12} md={6}>
      <Image src="https://images.trvl-media.com/media/content/shared/images/travelguides/destination/465/Biltmore-Estate-147595.jpg" fluid />
    </Col>
     <Col xs={12} md={6}>
      <Image src="https://www.indiabullsrealestate.com/wp-content/uploads/2017/04/1.jpg" fluid />
    </Col>
    <Col xs={12} md={6}>
      <Image src="https://www.historichouses.org/uploads/assets/uploaded/755dd582-1b86-4dcd-a5cbb1dfcfb676ae.jpg" fluid />
    </Col>
  </Row>
</Container>
   
  
)