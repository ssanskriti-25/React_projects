import React, {useState} from "react";
import './index.css'

const App =  ()=>{
    let time= new Date().toLocaleTimeString();
    const [cTime, currTime]= useState(time);

    const setTime =()=>{
        time= new Date().toLocaleTimeString();
        currTime(time);
    };

  return(
    <>
    <h1>{cTime}</h1>
    <button className="button" onClick={setTime}>Click Me</button>
    </>
  )
};

export default App;