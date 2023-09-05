// eslint-disable-next-line no-unused-vars
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CollapsibleExample from '../components/navbar.jsx'
import MyFoot from '../components/footer.jsx';
import DarkVariantExample from '../components/Slider.jsx';
import Mycards from '../components/Mycards.jsx';
import { products } from '../components/productsData.jsx';
import Myform from '../components/Myform.jsx';
export default function profile() {
  return (
    <>
    <CollapsibleExample/>
    <DarkVariantExample/>
    <div className='bg-dark '>
    <p className="h1 text-opacity-50 mb-3 text-center p-3 text-light bg-dark ">
          Our Products
        </p>
      <div className="row row-cols-4 container mx-auto gap-4">
        {products.map(function (item) {
          return (
            <Mycards
              key={item.id}
              title={item.title}
              desc={item.desc}
              imgSrc={item.imgSrc}
              price={item.price}
              inStock={item.inStock}
            ></Mycards>
          );
        })}
      </div>
    </div>
    <Myform/>
    <MyFoot/>

    </>
  );
}