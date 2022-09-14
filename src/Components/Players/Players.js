import React, {useState, useEffect} from "react";
import './Players.css'


function Players(){
    const [players, setPlayers] = useState([]);
    const [addForm, setForm] = useState({
        player_name: "",
        player_age: "",
        player_position:""
    });

    const handleAddForm = (event) => {
        event.preventDefault();
        
        const name1 =event.target.getAttribute('player_name');
        const value1 = event.target.value;

        const newForm = {...addForm};
        newForm[name1] = value1;
        setForm(newForm);
    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newPlayer = {
            player_name: addForm.player_name,
            player_age: addForm.player_age,
            player_position: addForm.player_position
        }

        const newPlayer1 = [...players,newPlayer]
        setPlayers(newPlayer1)
    }

    useEffect(() => {
        fetch('http://localhost:9292/players')
            .then((res) => res.json())
            .then((Data) => setPlayers(Data))
    }, []);

    return (
        <div className="players">
            <h4>ADD PLAYER</h4>
            <form  onSubmit={handleAddFormSubmit}>
        <input type="text" name="player name" className="form-control" required="required" placeholder="Enter Player name..." onChange={handleAddForm}/>
        <input type="text" name="player age" className="form-control" required="required" placeholder="Enter Player age..." onChange={handleAddForm}/>
        <input type="text" name="player position" className="form-control" required="required" placeholder="Enter Player position..." onChange={handleAddForm}/>
       
        <button type="submit" className="form-control" class="btn btn-outline-success"  >Add</button>
    </form>
            <table>
      <thead>
        <tr>
          <th>PLAYER NAME</th>
          <th>PLAYER AGE</th>
          <th>PLAYER POSITION</th>
        </tr>
    </thead>
    <tbody>
        {players.map((players)=>(
             <tr>
             <td>{players.player_name}</td>
             <td>{players.player_age}</td>
             <td>{players.player_position}</td>
            
           </tr>
        ))}
     
    </tbody>
    </table>
    
    
    </div>
    );
}
          
 export default Players;

 