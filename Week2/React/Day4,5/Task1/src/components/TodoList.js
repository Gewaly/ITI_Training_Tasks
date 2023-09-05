import React from "react";
import { useState } from "react";
function TodoList(){
    const [currentValue ,setCurrentValue] =useState("");
    const [finalTodos ,setFinalTodo]= useState ([]);
    const addTodoHandler =()=>{
        setFinalTodo([...finalTodos ,currentValue]);
    };
    return(
        <>
        <div className="p-5 bg-dark text-light text-center">
            <h1>Todo List ....</h1>
            <input
            type="text"
            placeholder="Todo your things"
            className="bg-light col-lg-6 rounded p-2"
            onChange={(e) => setCurrentValue(e.target.value)}

            />
            <button className="btn btn-success mx-4 p-2"
            onClick={addTodoHandler}
            >
                Add+

            </button>
            </div>

            <div className="container text-light">
                {finalTodos.map((item,index) =>(
              <div key={index} className="row fs-3 d-flex justify-content-center">
                <div className="bg-secondary border border-dark border-4 text-white gap-3">
    <p>{item}</p>
    </div>

             
             <button
            className="btn btn-danger col-4 rounded-0"
                onClick={() =>
setFinalTodo(finalTodos.filter((el,i) => index !== i))}
>
    Delete
</button>
</div>

                )

                )

                }

            </div>


      
        </>
        
       
    )

}
export default TodoList ;