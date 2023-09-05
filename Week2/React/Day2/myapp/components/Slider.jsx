import Carousel from 'react-bootstrap/Carousel';
import './slider.css';
function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="white" className='fs-1'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../messi.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>First slide label</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../messi2.jfif"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2>Second slide label</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../messi3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2>Third slide label</h2>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;