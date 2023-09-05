
import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { SearchContext } from '../contexts/searchCtx';

export const SearchBar = () => {
   
    const [currentValue,setCurrentValue]=useState('')
    const {filterHandler}=useContext(SearchContext);
    function searchHandler(e){
      e.preventDefault();
        filterHandler(currentValue);
    }
  return (
   <>
   <Form>
      <Form.Group className="mb-3 h1 text-opacity-50 mb-3 text-center p-3 text-light bg-dark bg-opacity-50 bg-gradient" controlId="formBasicEmail">
    
        <Form.Control type="search" placeholder="Enter Product" onChange={(e)=>{
            setCurrentValue(e.target.value)
        }}/>
       
      </Form.Group>

 <button  className='btn btn-info  text-opacity-50 mb-3 text-center p-3 text-light bg-dark bg-opacity-50 bg-gradient' onClick={searchHandler}>Search</button>
      </Form>
   </>
  )
}


