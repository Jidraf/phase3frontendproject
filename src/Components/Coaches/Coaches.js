import React, {useState, useEffect} from "react";
import './Coaches.css'


function Coaches(){

    const [coach, setCoach] = useState({});

    useEffect(()=> {
        fetch('http://localhost:9292/coach')
        .then((res)=>res.json())
        .then((Data)=>setCoach(Data))
        },[]);

    function teamCoach(){
        console.log(coach);
    }

    return(
        <div className="coach"> 
     <label>TeamCoach</label>
      <input type="text" onChange={(event) => {setCoach(event.target.value);}}/>  
      <button onClick={teamCoach}>Add</button> 
      <button onClick={teamCoach}> Edit</button>
      <button onClick={teamCoach}>Delete</button>
        </div>
    );
}

export default Coaches;

