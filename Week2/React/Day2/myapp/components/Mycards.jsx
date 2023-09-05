import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Mycards.css'
// eslint-disable-next-line react/prop-types
function Mycards({title, imgSrc, desc,inStock}) {
  return (
    <Card className='col p-2
   justify-content-center'
          style={{ width: '18rem' }}>
        
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title className='text-center'>{title}</Card.Title>
        <Card.Text className='text-center'>
          {desc}
        </Card.Text>
        <Card.Text className='text-center'>
          In Stock : {inStock}
        </Card.Text>
        <div className='text-center'>

       <Button variant="success" className='text-center'>{inStock ? 'Buy' :"not available" }</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Mycards;