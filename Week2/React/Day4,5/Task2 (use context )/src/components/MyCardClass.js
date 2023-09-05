import  React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
export default class MyCardClass extends React.Component{

        render(){
            console.log(this.props);
            return(

            
        
    
                <Card className="col p-2 bg-light text-dark gap-2">
                <Card.Img
                variant="top"
                src={this.props.img}
                style={{ height:"15rem" ,objectFit:"cover"}}
                className="rounded"
                />
                <Card.Body className="text-center">
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.desc}</Card.Text>
                    <Card.Text>in Stock :{this.props.inStock}</Card.Text>
                    <Button variant="outline-dark text-warning" id="btn1">Buy {this.props.price}$</Button>
                </Card.Body>
            </Card>
        
        );
        
        }}