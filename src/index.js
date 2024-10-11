import React from "react";
import ReactDom from "react-dom/client";
import App from "./app";//in react app we dont need the specify extion but in node we have to specify .js extention


// const header=<h1>This is my first react app</h1>
// ReactDom.render(header,document.getElementById('root')); in the react 18 the ReactDom.render() method is deprecated so insteted of ReactDom.render() 
//we will use ReactDom.createRoot() method

const root=ReactDom.createRoot(document.getElementById('root'))//it will take the container inside the  container append all the element,
root.render(<App/>)//inside the <div id="root"> container it will render our componet
