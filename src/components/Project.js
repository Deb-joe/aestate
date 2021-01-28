import React from 'react';
import './Project.css';
import { CardDeck, Card } from 'react-bootstrap';

export const Project = (props) => (
 
  <CardDeck id="project">
  <Card>
    <Card.Img variant="top" src="https://images.pexels.com/photos/5847754/pexels-photo-5847754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    <Card.Body>
      <Card.Title>Building Future</Card.Title>
      <Card.Text>
        The project focuses on the future that we need to behold for the generation that is about to come. We are trying to uphold the future and tryingto save more area for the new generation.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.pexels.com/photos/4916472/pexels-photo-4916472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    <Card.Body>
      <Card.Title>Silent Street</Card.Title>
      <Card.Text>
       The Street gives perfect silence and peace that everyone wants. The street incurs many people yet it is magnificently silent and helps peoplefind their inner peace.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.pexels.com/photos/4997546/pexels-photo-4997546.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    <Card.Body>
      <Card.Title>Complex Built</Card.Title>
      <Card.Text>
        Normal complex which also provide an innovative and comfortable style of living. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
   
  
)