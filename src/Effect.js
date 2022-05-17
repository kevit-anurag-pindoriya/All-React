import React from "react";

function Effect() {
  function inr() {
    console.log("i'am Clicked");
  }
  return (
    <>
      <h1>Hello</h1>
      <button onClick={() => inr}>
        {}
        Clicked
      </button>
    </>
  );
}

export default Effect;
