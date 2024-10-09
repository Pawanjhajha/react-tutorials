import React from "react";
import ReactDom from "react-dom";

const header=<h1>This is my first react app</h1>//this is jsx code react.createElement() automatically call bihind the seen and pass into babel and then balbel convert jsx into plain js
console.log(header,"header")//still it will show in virtual dom 
ReactDom.render(header,document.getElementById('root'));//this will convert the virtual dom to real dom/browser dom