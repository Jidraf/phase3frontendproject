import React, {useState, useEffect} from "react";
import './Players.css'


function Players(){

    const [player, setPlayer] = useState({});

    useEffect(()=> {
        fetch('http://localhost:9292/player')
        .then((res)=>res.json())
        .then((Data)=>setPlayer(Data))
        },[]);

    function teamPlayer(){
        console.log(player);
    }

    return(
        <div className="player"> 
     <label>Player</label>
      <input type="text" onChange={(event) => {setPlayer(event.target.value);}}/>  
      <button onClick={teamPlayer}>Add</button> 
      <button onClick={teamPlayer}> Edit</button>
      <button onClick={teamPlayer}>Delete</button>
        </div>
    );
}

export default Players