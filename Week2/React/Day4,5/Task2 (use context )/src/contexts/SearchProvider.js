import React, { useEffect, useState } from 'react'
import { SearchContext } from './searchCtx'
import {products} from './../models/productsData'


export const SearchProvider = (props) => {


      const [searchData,setSearchData]=useState(products);
  
    const [errormsg,setErrorMsg]=useState('');
    function filterHandler(searchText) {
      let trimmed=searchText.trim().length>1;
      let matched=products.filter((product)=>{
          return product.title.toLowerCase() === searchText.toLowerCase()
      })
      if(trimmed && matched.length>=1){
          setSearchData(matched)
          setErrorMsg(`${matched.length} Products Found`);

      }else{
      setSearchData(products)
      setErrorMsg('No Products Found')
      }

    }
let myValues={
    searchData,
    errormsg,
    filterHandler,
  
}
 
  return (
    <>
   <SearchContext.Provider value={myValues}>
       {props.children}
    </SearchContext.Provider>
 </>
  )
}
