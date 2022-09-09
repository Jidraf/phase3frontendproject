import React, {useState, useEffect} from "react";
import './Teams.css'


function Teams(){

    const [team, setTeam] = useState({});

    useEffect(()=> {
        fetch('http://localhost:9292/team')
        .then((res)=>res.json())
        .then((Data)=>setTeam(Data))
        },[]);

    function eachTeam(){
        console.log(team);
    }

    return(
        <div className="team"> 
     <label>Team</label>
      <input type="text" onChange={(event) => {setTeam(event.target.value);}}/>  
      <button onClick={eachTeam}>Add</button> 
      <button onClick={eachTeam}> Edit</button>
      <button onClick={eachTeam}>Delete</button>
        </div>
    );
}

export default Teams
