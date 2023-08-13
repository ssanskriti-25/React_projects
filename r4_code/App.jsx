import React, {useState} from "react";
import './index.css'

const App =  ()=>{
    let time= new Date().toLocaleTimeString();
    const [cTime, currTime]= useState(time);

    const setTime =()=>{
        time= new Date().toLocaleTimeString();
        currTime(time);
    };

    setInterval(setTime,1000);

  return(
    <>
    <h1>{cTime}</h1>
    </>
  )
};

export default App;