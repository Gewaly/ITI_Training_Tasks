// eslint-disable-next-line no-unused-vars
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CollapsibleExample from '../components/navbar.jsx'
import MyFoot from '../components/footer.jsx';
import DarkVariantExample from '../components/Slider.jsx';
export default function profile() {
  return (
    <>
    <CollapsibleExample/>
    <DarkVariantExample/>
    <MyFoot/>
    </>
  );
}