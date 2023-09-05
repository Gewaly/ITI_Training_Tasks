import  React from "react";
import { useState } from "react";
export default function Counter(){
    const [state ,setState] = useState({
        counter:0 ,
        title :"hello this is original title"
    });
    function increaseHandler(){
        setState({
            ...state,
counter:state.counter +1
        });
    }
    function decreaseHandler(){
        setState({
            ...state,
            counter:state.counter -1
        });
    }
    function titleHandler(){
        setState({
            ...state,
            title:"this is fake title"
        });
    }
    return(
<div className="d-flex flex-column bg-dark text-light justify-content-center align-items-center ">
<h1>{state.title}</h1>
<h2>{state.counter}</h2>
<div className="p-3">
<button className="btn btn-success mx-3" onClick={ increaseHandler}>Increase +</button>
<button className="btn btn-info mx-3" onClick={titleHandler }>change title</button>
<button className="btn btn-primary mx-3" onClick={decreaseHandler}>Decrease -</button>
</div>


</div>
    );
}