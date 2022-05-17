import React, { createContext } from "react";
import C2 from "./c2";

const Name = createContext();
function C1() {
  return (
    <>
    <Name.Provider value={"test--only"}>
    <C2></C2>
    </Name.Provider>
    
    </>
  );
}

export default C1;
export {Name};
