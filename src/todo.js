import { useState } from "react";
import "./App.css"


function Todo(){
   
   const [Input, setInput] = useState("");
    const [todoList, settodoList] = useState([]);
    const [completedTaskCount, setCompletedTaskCount] = useState(0);
   

    const onFormSubmit = (event) => {
        event.preventDefault();
        const id = todoList.length + 1;
        settodoList((prev) => [...prev, {
            id:id,
            task : Input,
            complete : false
        }
    ]);
     setInput("");

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
 const handleClear = () => {
    var cleas = document.querySelector("ul");
cleas.innerHTML = " ";
//completedTaskCount = 0;

    
 };
 const handleDelete = ({id}) => {
    settodoList(todoList.filter((todo) => todo.id !==id))
 }
return(
    <container className =  "text-center w-full ref" >
     <div>
        <h2 className="text-blue-700 font-bold text-8xl">Todo list</h2>
       <form onSubmit={onFormSubmit}> <input className="shadow bg-gray-200 border-2 place-items-center border-red-500 rounded text-black w-4/12 mt-12 h-12 focus:outline-none"
        placeholder="Enter a task..."value={Input} required onInput ={(e) => setInput(e.target.value)}/>
        <button className="bg-blue-700 border-1 border-white-500 text-red-500 h-12 mt-12 w-20 -ml-1" type="submit">Add</button> <br/></form>
        <tasks>
            <taskcount>
                <b className="ml-2.5">Pending tasks : </b>{todoList.length - completedTaskCount}
            </taskcount>
            <taskcount>
                <b className="ml-2.5">Completed tasks : </b>{completedTaskCount}
            </taskcount>
        </tasks>
        <div>
            <ul className="text-black font-mono mt-12 font-bold text-1xl cursor-pointer flex flex-col list-decimal list-inside">
           { todoList.map((todo) => {
            return (
                <li
                
             
               
                
                // <button>edit taskk</button>
            
                
                
                
                
                
                ><input   complete = {todo.complete}
                style ={{ textDecoration: todo.complete && "line-through",color: todo.complete && "gray"}}
 
                 id= {todo.id} type="text" value ={todo.task} className="shadow bg-transparent border-2 place-items-center border-blue-500 rounded text-black w-4/12 mt-12 h-12 focus:outline-none" onChange={(event) => event.preventDefault}/>
                <div>
                    <button onClick={() => handleComplete(todo.id)}> <i className="fa fa-check pb-7 gap-3"></i></button>
                    
                    <button onClick={()=> handleDelete(todo)}> <i className="fa fa-trash pl-5"></i></button>
                    
                    
            </div></li>
            );
           })}
            </ul>
        </div>
       <button className="bg-purple-700 border-2 border-white-500 text-white h-16 w-2/12 rounded-2xl mt-12 " onClick={handleClear}>Clear all</button>
     </div>


    </container>
);



   
    
  
   

};



export default Todo;