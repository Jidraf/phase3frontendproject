import React, {useState, useEffect} from "react";
import './Teams.css'


function Teams(){
    const [team, setTeam] = useState([]);
    const [addForm, setForm] = useState({
        team_name: "",
    
    });

    const handleAddForm = (event) => {
        event.preventDefault();
        
        const name1 =event.target.getAttribute('team_name');
        const value1 = event.target.value;

        const newForm = {...addForm};
        newForm[name1] = value1;
        setForm(newForm);
    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newTeam = {
            team_name: addForm.team_name,
        }

        const newTeam1 = [...team,newTeam]
        setTeam(newTeam)
    }

    useEffect(() => {
        fetch('http://localhost:9292/teams')
            .then((res) => res.json())
            .then((Data) => setTeam(Data))
    }, []);

    return (
        <div className="teams">
            <h4>ADD TEAM</h4>
            <form  onSubmit={handleAddFormSubmit}>
        <input type="text" name="team name" className="form-control" required="required" placeholder="Enter Team name..." onChange={handleAddForm}/>
    
        <button type="submit" className="form-control" class="btn btn-outline-success"  >Add</button>
    </form>
            <table>
      <thead>
        <tr>
          <th>TEAM NAME</th>
        </tr>
    </thead>
    <tbody>
        {team.map((teams)=>(
             <tr>
             <td>{teams.team_name}</td>
           </tr>
        ))}
     
    </tbody>
    </table>
    
    
    </div>
    );
}
          
 export default Teams;
