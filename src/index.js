import React from "react";
import ReactDom from "react-dom/client";
import App from "./app";


const root=ReactDom.createRoot(document.getElementById('root'))
root.render(<App/>)

// let div=document.getElementById('root')
// const appData=App();
// console.log(appData,"appData")
// div.append(appData)
