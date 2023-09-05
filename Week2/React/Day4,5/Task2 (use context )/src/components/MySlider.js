import Carousel from "react-bootstrap/Carousel";
import Image1 from './images/img1.jpg'
import Image2 from './images/img2.jpg'
import Image3 from './images/img3.jpg'
import './MySlider.css';

function MySlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          
          src={Image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First car</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image2}
          
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>second car</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image3}
        
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third car</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MySlider;
