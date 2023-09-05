import React from "react";
import { Button ,Form, } from "react-bootstrap";
import { SearchContext } from "../context/SearchCtx";
import { useContext } from "react";
import { useState } from "react";

export default function SearchBar (){
  const [currentValue ,setCurrentValue] =useState("");
    const {searchHandler} =useContext(SearchContext);
  
  const filterHandler = () =>{
        searchHandler(currentValue);
    };
  return (
   
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="type"
              className="me-2 danger"
              aria-label="Search"
              onChange={(e)=>
                setCurrentValue(e.target.value)

              }
            />
            <Button onClick={ filterHandler}
            className="bg-warning"
            >
              Search
            </Button>
          </Form>
      
  );
}