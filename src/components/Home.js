import React from 'react';
import './Home.css';
import { Carousel } from 'react-bootstrap';

export const Home = (props) => (
 
   <Carousel id="home">
  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/460695/pexels-photo-460695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Sunrest Estate</h3>
      <p>Gift yourself a new paradise and welcome life to your home of camaraderie and convenience. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={750}>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/209274/pexels-photo-209274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Moonland One</h3>
      <p>Ultadanga's residential project, Moonland One is offering property for sale.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>The One</h3>
      <p >Immerse in the City of Joy from your own tranquil space
Amidst the flurry and clamour of a busy metropolis, there lies The One- your address that addresses everything.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
   
  
)