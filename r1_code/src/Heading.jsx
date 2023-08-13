import React from "react";
import "./index.css"

const today = new Date();
let hours= today.getHours();
let greeting;
if(hours>=1 && hours<12){
     greeting= "Good Morning";
}
else if(hours>=12 && hours<20){
   greeting= "Good Afternoon";
}
else{
   greeting= "Good Night";
}

function Heading(){
    return <div>
        <h1>Hello, Maam <span> {greeting} </span> </h1>
    </div>
}

export default Heading;