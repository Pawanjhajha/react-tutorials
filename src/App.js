import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  let[resourcType,SetResourceType]=useState('Home');
  console.log("app componet.....")
  useEffect(()=>{
    console.log("useEffect execute......")
  },[resourcType])
  return (
    <div className="App">
      <button onClick={()=>{SetResourceType('Home')}}>Home</button>
      <button onClick={()=>{SetResourceType("About")}}>About</button>
      <button onClick={()=>{SetResourceType("Contact")}}>Contact</button>
      <h3>{resourcType}</h3>
    </div>
  );
}

export default App;
