import React from "react";
import ReactDom from "react-dom/client";
import App from "./app";
//add the bootstrap ex:- npm install bootstrap
import 'bootstrap/dist/css/bootstrap.css';//add the bootstrap
//if we want to goble css that will apply on hole react application so that will add on index.css that will apply on hole react application gobally
import './index.css';

const root=ReactDom.createRoot(document.getElementById('root'))
root.render(<App/>)

