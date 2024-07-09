import { useState } from 'react'
import { Container, Row, Col, Button, Image, Card, Carousel } from 'react-bootstrap';

import "./Buy.css"

import CarCard from './CardCar';

export default function Buy() {
  return (
    <div style={{ backgroundColor: "#93E9BE" }}>
      <Container className='card-container'>
        <Row>
        <h1>Purchase </h1>
        <p><i>All pricing is in USD</i></p>
        </Row>
        <Row>
          <Col className='card'><BananaCarCard /></Col>
          <Col className='card'><FordModelACard /></Col>
        </Row>
        <Row>
          <Col className='card'><RollsRoycePhantom3Card /></Col>
          <Col className='card'><AstonMartinDB2Card /></Col>
        </Row>
      </Container>
    </div>
  );
}

function BananaCarCard() {
  return (<CarCard img="/Banana.jpeg" TitleChard="Banana Car" dsc="This is the fun Banana car. It is a extremly unique fun car that will 
        have all the heads turning.  The car is extremly safe for anyone to drive.DISCLAIMER the people in the photo 
        are not included." price={7585} />);
}

function FordModelACard() {
  return (<CarCard img="/Ford Model A.jpg" TitleChard="Ford Model A" dsc="This is a one of a kind Ford Model A. They made this car through 1927-1931. This car might 
    not have any of the new safety measures new cars have but it does have style. Its top speed is 65mph with
    40hp. You can not find one of these cars in such good condition." price={50000} />);
}

function RollsRoycePhantom3Card() {
  return (<CarCard img="/Rolls- Royce Phantom 3.jpg" TitleChard="Rolls-Royce Phantom III" dsc="This is a once in a life time deal!! This car is in such good condition and is priced 
    for extremely cheap. The car can go up to 87mph and can go from 0-60mph in only 16.8 seconds. The car was ahead of its time being
    manufactured from 1936-1939. The car is a masterpiece!" price={45000} />);
}

function AstonMartinDB2Card() {
  return (<CarCard img="/Aston Martin DB2.jpg" TitleChard="Aston Martin DB2" dsc="This car is a beauty it is a piece of art that can ago super quick.
    The car has 105hp and can go up to 116mph and can go from 0-60mph in under 12 seconds. The car was manufactured after WW2 in 1950-1953." price={100000} />);
}