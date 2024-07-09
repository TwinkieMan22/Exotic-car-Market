import { useState } from 'react'
import { Container, Row, Col, Button, Image, Card, Carousel } from 'react-bootstrap';
export default function Buy () {
return (
    <div>
      <h1>Purchase </h1>
      <p><i>All pricing is in USD</i></p>
      <Image src ="./Koko.jpg" width={400} />
      <p><h7>This is Koko! You can purchase her meat  for only <h5>98.99$Lb</h5></h7></p>

      <Image src="./Simba.jpg" width={400} />
      <p><h7>This is Simba and his lost brother Timba. They are lion cubs so they are extra 
        tender, you can buy one of them for only <h5>200$</h5></h7></p>

        <Image src="./Toucan.jpg" width={400} />
        <p><h7>This is a magestic Toucan Tweety. Their meat is extremely sweet, costing only, <h5>90$Lb</h5></h7></p>

        <Image src="public/" width={400} />

        <Image src="public/" width={400} />

        <Image src="public/" width={400} />
    </div>
  );
}