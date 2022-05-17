import React from "react";
import { Name } from "./c1";

function C4() {
  return (
    <>
     <Name.Consumer>{(nam)=>{
            return(<>
                <h3>Hello from {nam}</h3>
                
                
                </>)

     }}</Name.Consumer>
    </>
  );
}

export default C4;
