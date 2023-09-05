import { useState } from "react";

export default function ToDo(){

    const[currentValue, setCurrentValue] = useState("");
    const [finalTodos, setFinalTodo] = useState([]);
    
    const addTodoHandler = function(){
        setFinalTodo([...finalTodos, currentValue]);
    }

    return(
        <>
            <div className="p-5 bg-dark text-light text-center">
                <h1>ToDo list</h1>
                <input
                    type="text"
                    placeholder="add any thing to the list"
                    className="col-6 fs-2 rounded p-2"
                    onChange={(el) => setCurrentValue(el.target.value)}
                />
                <button className="btn btn-success fs-2 mx-4 p-3" onClick={addTodoHandler}>
                    ADD
                </button>
            
            </div> 
            <div className="container-fluid text-light bg-dark p-4">

                {
                    finalTodos.map((el,idx) => (
                        <div key={idx} className="p-2 text-center d-flex ">
                            <div className="bg-success text-white fs-1 m-3 col-11   p-3">
                                <p>{el}</p>
                            </div>    
                            <button className="btn btn-danger fs-4 col-1  "
                            onClick={() => setFinalTodo(finalTodos.filter((el, i) => idx !== i))}
                            
                            >
                                Delete Task
                            </button>

                        </div>
                    ))
                }




            </div>
        </>
    );
}