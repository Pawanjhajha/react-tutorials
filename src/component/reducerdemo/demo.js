import { useReducer } from "react";
function Demo(){
    function reducer(currentState,action){
        console.log("reducer call",currentState,"currentstate",action,"action");
        switch (action){
            case 'decrement':
                return {count :currentState.count-1};
                break;
            case 'increment':
                return {count:currentState.count+1};
                break;
            default:
                return {count:currentState.count};
        }
        return {count:11}
    }
    let[state,disPatcher]=useReducer(reducer,{count:0});
    function decrementHandler(){
        disPatcher('decrement')
    }
    function incrementHandler(){
        disPatcher('increment')
    }
    return(
       <div className="container">
        <button onClick={decrementHandler}>-</button>
        <span>{state.count}</span>
        <button onClick={incrementHandler}>+</button>
       </div>
    )
}

export default Demo;