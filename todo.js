import { useState } from "react";
import "./app.scss"


function Todo(){
    const [Input, setInput] = useState("");
    const [todoList, settodoList] = useState([]);
    const [completedTaskCount, setCompletedTaskCount] = useState(0);

    const handleClick = () => {
        const id = todoList.length + 1;
        settodoList((prev) => [...prev, {
            id:id,
            task : Input,
            complete : false
        }
    ]);
     setInput(" ");

    };
    const handleComplete = (id) => {
        let list = todoList.map((task) => {
            let item = {};
            if (task.id === id) {
                if(!task.complete ){
                    setCompletedTaskCount(completedTaskCount + 1);
                }
          else {
            setCompletedTaskCount(completedTaskCount - 1);
          }
                item = {...task, complete: !task.complete};
            } else item = {...task}
            return item;
        });
        settodoList(list);
    } 

return(
    <container className = "ref" >
     <div>
        <h2>Todo list</h2>
        <input value={Input} onInput ={(e) => setInput(e.target.value)}/>
        <button onClick={handleClick}>Add</button> <br/>
        <tasks>
            <taskcount>
                <b>Pending tasks</b>{todoList.length - completedTaskCount}
            </taskcount>
            <taskcount>
                <b>Completed tasks</b>{completedTaskCount}
            </taskcount>
        </tasks>
        <div>
            <ul>
           { todoList.map((todo) => {
            return (
                <li
               complete = {todo.complete}
                id= {todo.id}
                onClick={() => handleComplete(todo.id)}
                 style ={{listStyle :"none", textDecoration: todo.complete && "line-through",}}
            
                
                
                
                
                
                >{todo.task}</li>
            );
           })}
            </ul>
        </div>
       <button>Clear all</button>
     </div>


    </container>
);
};




export default Todo;