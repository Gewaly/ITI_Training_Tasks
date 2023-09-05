
import { products } from "../models/productsData";

import MyCard from "./MyCard";
import MyTable from "./MyTable";

export default function Product() {
 
  let productArr = [...products];
  console.log(products);
  console.log(productArr);
  return (
    <>
    <div className="bg-dark pb-5 container-fluid">
      <p className="h1 text-opacity-50 mb-3 text-center p-3 text-light bg-dark bg-opacity-50 bg-gradient">
        Our Products
      </p>

      <div className="row row-cols-5  mx-0 gap-3 justify-content-center ">
        {productArr.map((item) => {
          return (
            <MyCard
              key={item.id}
              title={item.title}
              price={item.price}
              inStock={item.inStock}
              img={item.imgSrc}
              quantity={item.quantity}
              desc={item.desc}
            />
          
          );
        })}
      </div>
    </div>
    
     <div className="bg-dark pb-5 container-fluid">
     <p className="h1 text-opacity-50 mb-3 text-center p-3 text-light bg-dark bg-opacity-50 bg-gradient">
       Our Products
     </p>

     <div className="row row-cols-5  mx-0 gap-3 justify-content-center ">
     {productArr.map((item) => {
          return (
      <MyTable
      key={item.id}
      title={item.title}
      price={item.price}
      inStock={item.inStock}
      img={item.imgSrc}
      quantity={item.quantity}
      desc={item.desc}
    />
           
    );
})}
        
      </div>
    </div>
    </>
  );
}
