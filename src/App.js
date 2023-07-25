import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
    const title = 'Welcome to React App'
  return (
   <>
       <Navbar />
     <h3>{title}</h3>
     <Home/>

   </>
  );
}

export default App;
