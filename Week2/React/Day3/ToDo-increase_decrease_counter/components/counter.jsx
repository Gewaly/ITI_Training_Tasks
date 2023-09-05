// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export default function Counter() {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [state,setState]= useState({
        counter:0,
        title:"Hello",
      });
      function increaseCounter() {
        setState({
          ...state,
          counter:state.counter+1
        });
      }
      function decreaseCounter() {
          setState({
            ...state,
            counter:state.counter-1
          });
      }
      function title(){
        setState({
          ...state,
          title:"fake title"
        });
      }
      return (  
        <div className="d-flex flex-column bg-dark text-light justify-content-center align-items-center"
            >
                <h1>{state.title}</h1>
                <h2>{state.counter}</h2>
                <div className="p-3"> 
                <button className="btn btn-success mx-3"onClick={increaseCounter}  >
                    increase +
                     </button>
                     <button className="btn btn-warning mx-3"onClick={title}  >
                        change title
                        </button>
                     <button className="btn btn-danger mx-3"onClick={decreaseCounter}  >
                        decrease -
                     </button>
                     </div>                 
</div>);
}
