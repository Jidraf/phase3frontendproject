import React, {useState, useEffect} from "react";
import './Teams.css'


function Team(){

    const [team, setTeam] = useState('');
    const [addForm, setForm] = useState({
        name:'',  });

        const handleAddForm = (event) => {
            event.preventDefault();
    
            const name1 =event.target.getAttribute('name');
            const value1 = event.target.value;
    
            const newForm = {...addForm};
            newForm[name1] = value1;
            setForm(newForm);
    
        }
    
        const handleAddFormSubmit = (event) => {
            event.preventDefault();
    
            const newTeam = {
                name: addForm.name}
                const newTeam1 = [...team,newTeam]
        setTeam(newTeam1)
        }
    
    return(
        <div className="team">
            <form onSubmit={handleAddFormSubmit}>
            <input type="text" name="team name" className="form-control" required="required" placeholder="Enter Team Name..." onChange={handleAddForm} />
            </form>
       <table>
      <thead>
        <tr>
          <th>NAME</th>
          <th></th>
        </tr>
    </thead>
    <tbody>
             <tr>
             <td>Name</td> 
             <td><button type="button" className="btn btn-outline-primary" >Add</button></td>
           </tr>
    </tbody>
    </table>
          </div>
    );
}

export default Team;