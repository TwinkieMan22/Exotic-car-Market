
import { useState } from 'react'
import { Container, Row, Col, Button, Image, Card, Carousel } from 'react-bootstrap';

export default
function CarCard({img,TitleChard,dsc,price}) {
return (
    <Card style={{ width: '80%' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{TitleChard}</Card.Title>
        <Card.Text>
          {dsc}
        </Card.Text>
        <Button onClick={() => alert("You bought the ".concat(TitleChard))} variant="primary">Buy for ${price}</Button>
      </Card.Body>
    </Card>
  );
}
