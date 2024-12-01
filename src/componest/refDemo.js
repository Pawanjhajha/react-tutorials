import { useState } from "react";
import { useRef } from "react";
function RefDemo(){
    let nameInputRef=useRef("hello");
    let[name,UpdateName]=useState(false);
    console.log(nameInputRef,"nameInputRef")
    function showNameEventHandler(){
        console.log(nameInputRef,nameInputRef.current,nameInputRef.current.value,"nakeInpur in showNameevnet")
        UpdateName(nameInputRef.current.value);
    }
    return(
        <>
        <span>Name:</span>
        <input type="text" ref={nameInputRef}/>
        <button onClick={showNameEventHandler}>show Name</button>
        {name?<h1>name</h1>:<br></br>}
        </>
    )
}
export default RefDemo; 