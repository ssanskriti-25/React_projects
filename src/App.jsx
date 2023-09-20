import React, {useState} from "react";
import './index.css'

const App = ()=>{
  const [fullName, setFullName]= useState({
    fName :"",
    lName :"",
  });

  const inputEvent =(event)=>{
    console.log(event.target.value);
    
    const value= event.target.value;
    const name= event.target.name;

  setFullName((preValue) =>{
      if(name=== "fName"){
        return{
          fName : value,
          lName : preValue.lName,
      };
      } else if(name === "lName"){
        return {
          fName : preValue.fName,
          lName : value,
        };
      }
    })
  };

  const onSubmits = (event) =>{
    event.preventDefault();
    alert("form submitted");
  };

  return (
  <>
  <div className="main_div">
    <form onSubmit={onSubmits}>
      <div>
  <h1>Hello {fullName.fName} {fullName.lName}</h1>
  <input type="text" placeholder="Enter your first Name" name="fName" onChange={inputEvent}
  value= {fullName.fName}/>
  <br />
  <input type="text" placeholder="Enter your last Name" name="lName" onChange={inputEvent}
  value= {fullName.lName}/>
  <button type="submit"> Submit Me</button>
  </div>
  </form>
  </div>
  </>
    );
}



export default App;