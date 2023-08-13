import React, {useState} from "react";
import './index.css'

const App =  ()=>{
    const c = "#8e44ad";
    const [bg,setBg] = useState(c);
    const [newName,setName] = useState("Click Me");
    const newBg = ()=>{
      let bgColor= "#34495e";
       setBg(bgColor);
       setName("Clicked")
    };

    const newBackground =()=>{
        setBg(c);
        setName("DoubleClicked")
    }

  return(
    <>
    <div style={{backgroundColor: bg}}>
    <button className="button" onClick={newBg} onDoubleClick={newBackground} > {newName}  </button>
    </div>
    </>
  )
};

export default App;