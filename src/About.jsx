import {Image} from 'react-bootstrap';

export default function About() {
    return (
    <div style={{backgroundColor:"#93E9BE"}}>
        <h1>SHAYTHALICIOUS</h1>   
        <p><i>We Have the Meats!</i> </p>
        <p><h4>About Us</h4></p>
        <p><h6>We take pride in our humane gathering of exotic protein. Each animal we 
          use for our product is hand picked to be of the best quality. The hardest part 
          about obtaining exotic meats such as Gorilla, Lion or even Tiger was obtaining
          the meat in a humane way without poaching any of the animals. We have created beautiful 
          farms for the animals to be raised on. Each animal lives its life to the fullest 
          being able to eat at any time. All the animals have a lot of space to run around as 
          if they are in their natural habitat. We are also going to keep on expanding our 
          farm so we can house elephants. After we have elephants we are also going to add 
        a big body of water so we can also house exoctic sea creatures such as whales and sharks. 
        We also have vegetarian and vegan options such as exotic fruit and vegetables.   </h6></p>
          <Image src="/Gorilla.jpg" width={(600)}/>      
      </div>);
}