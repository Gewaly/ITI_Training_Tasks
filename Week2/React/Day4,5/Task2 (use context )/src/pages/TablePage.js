import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";


export default function MyTable({title,price='5',img,desc ,inStock}) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th> images</th>
          <th>title</th>
          <th>desc</th>
          <th>inStock</th>
          <th> Buy </th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td variant="top"
        src={img}
        style={{ height: "1px" }}
        className={`rounded ${!inStock && "opacity-50"}`}>
           </td>
          <td>{title}</td>
          <td>{desc}</td>
          <td>in Stock :{inStock}</td>
          <td><Button variant="outline-dark text-warning" id="btn1">Buy {price}$</Button></td>
        </tr>
        
       
      </tbody>
    </Table>
  );
}