
import { products } from "../models/productsData";

import React from "react";
import SearchBar from"../components/SearchBar";
import BasicExample from "../components/Products"
export default function Products(){
  return(
  <>
    <SearchBar></SearchBar>
    <BasicExample>  </BasicExample>
    </>
  );
}