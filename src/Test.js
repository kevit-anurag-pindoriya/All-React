import React, { useState, useReducer } from "react";
// =============================================
function Test() {
  
  // =============================================
  function reducer(state, action) {
    console.log(state);
    if(action.type == "inc")
    {
        
        console.log("INR trigerd");
        return state + 1;
    }
    else{
       
        console.log("dcr trigerd");
        return state - 1;
    }

    return state + 1;
  }

  //   const [state, dispatch] = useReducer(reducer, 0);
  const [state, dispatch] = useReducer(reducer, 0);
  // =============================================
  return (
    <>
      <h1>Hello world</h1>
      <h1>
        <p>{state}</p>
      </h1>
      <button onClick={()=>dispatch({type : "inc"})}>+</button>&nbsp;&nbsp;&nbsp;
      <button onClick={()=>dispatch({type : "dcr"})}>-</button>
    </>
  );
}

export default Test;
