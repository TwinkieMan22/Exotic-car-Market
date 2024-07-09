import { useState } from 'react'
import { Container, Row, Col, Button, Image, Card, Carousel } from 'react-bootstrap';
export default function Buy () {
return (
    <div style={{backgroundColor:"#93E9BE"}}>   
      <h1>Purchase </h1>
      <p><i>All pricing is in USD</i></p>
      <Image src ="/Banana.jpeg" style={{padding:'50px'}} width={"40%"}  />
      <p> <h5>7585$</h5><h7>This is the fun Banana car. It is a extremly unique fun car that will 
        have all the heads turning.  The car is extremly safe for anyone to drive.DISCLAIMER the people in the photo 
        are not included.  </h7></p>

      <Image src="./Ford Model A.jpg" width={"40%"} style={{padding:'50px'}} />
      <p> <h5>50000$</h5><h7>This is a one of a kind Ford Model A. They made this car through 1927-1931. This car might 
        not have any of the new safety measures new cars have but it does have style. Its top speed is 65mph with
        40hp. You can not find one of these cars in such good condition.  </h7></p>

        <Image src="./Toucan.jpg" width={400} />
        <p><h5>90$Lb</h5></p>

        <Image src ="./Koko.jpg" width={400} />
        <p> <h5>98.99$Lb</h5></p>

        <Image src ="./Koko.jpg" width={400} />
        <p> <h5>98.99$Lb</h5></p>

        <Image src ="./Koko.jpg" width={400} />
        <p> <h5>98.99$Lb</h5></p>
    </div>
  );
}