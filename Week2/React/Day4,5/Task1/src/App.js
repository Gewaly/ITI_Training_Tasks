// import MyNav from "./components/MyNav";
// // import Profile from "./components/Profile";
// // import MySlider from "./components/MySlider";
// // import MyFooter from "./components/MyFooter";
// // import MyForm from "./components/MyForm";
// import "bootstrap/dist/css/bootstrap.min.css";

// // import Product from "./components/Product";
// // import MyTable from "./components/MyTable";
// // import Counter from "./components/Counter";
// // import TodoList from "./components/TodoList";


// import MyFooter from "./components/MyFooter";
// import {Routes ,Route} from "react-router-dom";

// import Todopage from "./pages/Todopage"



// import Viewproducts from "./pages/Viewproducts"

// function App() {
 
 
//   return (
//     <div className="App">
//     <MyNav/>
//     <Routes>
//      <Route path='/home' element={
//     <Viewproducts/>
     
//      }></Route>
//  <Route path='/todo' element={
//     <Todopage/>
     
//      }></Route>
//     </Routes>
//     <MyFooter/>
  
//      </div>

 
   
    


//   );
// }

// export default App;

import React, { useState } from "react"
import Layout from "./components/Layout"
import { Main } from "./components/Main"
import ThemeContext from "./contexts/ThemeContext"

function App() {
  const [theme, setTheme] = useState("light")
  const value = { theme, setTheme }

  return (
    <div className="App">
      <ThemeContext.Provider value={value}>
        <Layout>
          <Main />
        </Layout>
      </ThemeContext.Provider>
    </div>
  )
}

export default App