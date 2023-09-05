import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SearchProvider } from './contexts/SearchProvider';
import { BrowserRouter } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<BrowserRouter>
   <SearchProvider> 
   <App/>
 
</SearchProvider>  
</BrowserRouter>
  
);

