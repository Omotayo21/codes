import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
//import Todo from './todo';
import Weather from './weather'
/*import "./App.css" ;
import "./app.scss";
/*import Layout from "./pages/layout";
import Home from "./pages/home";
import Contact from "./pages/contact";


/*const x = 14;
 const Header = (
     <>
     <p>{(x) < 10 ? "hello" : "world"}</p>
     <p>hi there</p>
     <input type ="text" placeholder='first name'/>
     </>
     );
    
     
 
 function Header(props) {
     return <h1>i am a {props.brand}</h1>;
 }
 
 
 function Garage(){
    // var carName = "ferrari"
    const [color, setColor]= useState("red");
     const shoot = () => {
      setColor("blue");
          //document.write("siuuuu");
          }
          const cars = 
          [
            {id: 1, brand :"lambo"},
          {id: 2, brand :"maybach "},
          {id: 3, brand :"kia"}
        ]
        const handleSubmit =() => {
        alert("the name u entereed is valid")
        }
     return (
          <>
          who lives in my Garage
          
          <button onClick={shoot}> take the shot </button>
          <ul>{ cars.map((car) => <Header key={car.id} brand = {car.brand}/>)}

          </ul>
          <h2>my favorite color is {color}</h2>
          <form onSubmit={handleSubmit}>
            <label>
              enter your name
              <input type="text" value={color} onChange={(e) => setColor(e.target.value)}/>
              </label>
          </form>

         {/*<BrowserRouter>
          <Routes>
             <Route path="/" element={<Layout />}/>
             <Route index element={<Home/>}/>
             <Route path="contact" element ={<Contact/>}/>
         </Routes>
          </BrowserRouter>
     </> 

     );
 }*/

 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< Weather/>);

