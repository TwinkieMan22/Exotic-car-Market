import { useState } from 'react'
import { Container, Row, Col, Button, Image, Card, Carousel } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './About';
import Buy from './Buy';

function App() {

  const[navStatus, setNav]= useState("About")

  //goToAbout could of been any function name
  function goToAbout(){
    setNav("About")
  }

  function goToBuy(){
    setNav("Buy")
  }

  


  
  return (<>

    <Container>
      <Row>
        <Col> <Button variant='primary' onClick={() => goToAbout()}> About </Button> </Col>
        <Col> <Button variant='primary' onClick={() => goToBuy()}> Buy </Button> </Col>
      </Row>
    </Container>
    {navStatus==="About" ? 
      (<About />)

    : navStatus=== "Buy" ?
      (<Buy />)
    :
    (<h3>no if statement tied to it. this is the end of a else conditional</h3>)

    }
  </> 
  )
}


export default App
