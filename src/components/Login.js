import React, { useState, useRef, useEffect } from "react";
import "./Login.css";

let Login = () => {
  let count = 1;


  let [username, setusername] = useState("new");
  let [passname, setpassname] = useState("new");
  let [displayname , setdisplayname] = useState([1,2,3]);
  useEffect(()=>console.log("useEffect"),[username]);

  function submitHandler(event) {
    event.preventdefault();
  }

  function buttonHandler() {
    count += 1;
    if (count % 2 === 0) {
      setusername(` ${count} Odd number`);
      setpassname(` ${count} Odd number`);

      console.log(`if in ${count}`);
    } else {
      setusername(` ${count} Even number`);
      setpassname(` ${count} Even  number`);

      console.log(`else in ${count}`);
    }
    console.log(`buttonHandler run ${count}`);
    console.log(window.screen.width)



    // +++++++++++++++++++++++++++---------------------------------


    // setusername(` ${count} Odd number`);
    // setpassname(` ${count} Odd number`);
    // setdisplayname([...displayname,count])
    // console.log(...displayname);
    // localStorage.setItem("name","new")
    // count++;

  }
  return (
    <>
      <from onSubmit={submitHandler}>
        <span>{username}</span>
        <input type="text"></input>
        <span>{passname}</span>
        <input type="text"></input>
        <button type="submit" onClick={buttonHandler}>
          {" "}
          Click me{" "}
        </button>
      </from>
    </>
  );
};

export default Login;
