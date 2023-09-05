
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
 
function MyCard({ title, price = "60", img, desc, inStock, quantity }) {
  return (
    <Card
    className={`col p-2 bg-${
    quantity == 1 ? "warning bg-opacity-60 text-light" : "light text-dark"
  }  gap-2 justify-content-center`}
    
    >
      <Card.Img
        variant="top"
        src={img}
        style={{ height: "14rem", objectFit: "cover" }}
        className={`rounded ${!inStock && "opacity-40"}`}
      />
      <Card.Body className={`text-center ${!inStock && 'opacity-40'}`}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Card.Text>Stock : {inStock ? quantity : "Empty "}</Card.Text>
        <Button variant={`${inStock ? "warning " : "primary disabled"}`}>
          {inStock ? `Buy ${price}$` : "Not Available"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;

