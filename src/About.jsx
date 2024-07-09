import {Image} from 'react-bootstrap';

export default function About() {
    return (
    <div style={{backgroundColor:"#93E9BE"}}>
        <h1>The Exotic Car Market</h1>   
        <p><i>We Have the Cars!</i> </p>
        <p><h4>About Us</h4></p>
        <p><h6>We take pride in our ability in finding some of the most unique cars. Some you might not even believe exist. 
          We want to make a nice place where everyone can buy the car that they desire. We want to our consumers to be from
          all sorts of places from around the world. We established this company in 1910 when unique cars started to emerge 
          from the shadows. We used to only sell cars in person but now we have a online front. We made it extremly easy for
          our users to use the website and to purchase any car that is listed. 
          We add  new listings  once every two to three weeks.    </h6></p>
        <Image src= "/classic car.jpg" width={"40%%"} style={{margin:"7%"}}/>
      </div>);
}