

import React, { useContext } from 'react'
import { SearchContext } from '../contexts/searchCtx'
import { Button, Card } from 'react-bootstrap'

export const Products = () => {
    const {searchData,errormsg}=useContext(SearchContext)

    const Msg =errormsg.split("");
    
    return(
      
        <div className="row container text-danger">
            <div>
                <p className={`fs-2 text-secondary  ${Msg[0] ==="Found" ? "bg-danger" :"bg-light"} col-md-4 text-center m-auto`}>
                {errormsg}
                </p>
            </div>
   
    <div className='container'>
        <div className='row'>
        {searchData.map((product)=>{
        return <div className='col-lg-4'>
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.imgSrc} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
      
         {product.desc}
        </Card.Text>
        <Button variant="primary" className=' text-opacity-50 mb-3 text-center p-3 text-light bg-dark bg-opacity-50 bg-gradient'>Buy</Button>
      </Card.Body>
    </Card>
        </div>
    })}
    
    

        </div>
    </div>
    
  
 
        </div>
    )
}