// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
// import Login from './login';

function App() {
  let[isLoggnIn,updateIsLoggin]=useState(false);
  const isLogin=localStorage.getItem('isLoggedIn');
  useEffect(()=>{
    if(isLogin==='1'){
      updateIsLoggin(true);
    }
  },[isLoggnIn])
  console.log(isLogin,"isLogin")
  const loginHandler=(email,password)=>{
    localStorage.setItem('isLoggedIn','1')
    updateIsLoggin(true);
  }
  const logOutHandler=()=>{
    localStorage.removeItem('isLoggedIn');
    updateIsLoggin(false);
  }
  return (
   <>
    {!isLoggnIn && <h2>Not login</h2>}
    <button onClick={loginHandler}>click to login</button>
    <button onClick={logOutHandler}>click to logOut</button>
   </>
  );
}

export default App;
