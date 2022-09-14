import React, {useState, useEffect} from "react";
import './Coaches.css'


function Coaches(){
    const [coaches, setCoaches] = useState([]);
    const [addForm, setForm] = useState({
        coach_name: "",
        coach_team: "",
    });

    const handleAddForm = (event) => {
        event.preventDefault();
        
        const name1 =event.target.getAttribute('coach_name');
        const value1 = event.target.value;

        const newForm = {...addForm};
        newForm[name1] = value1;
        setForm(newForm);
    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newCoach = {
            coach_name: addForm.coach_name,
            coach_team: addForm.coach_team,
        }

        const newCoach1 = [...coaches,newCoach]
        setCoaches(newCoach1)
    }

    useEffect(() => {
        fetch('http://localhost:9292/coaches')
            .then((res) => res.json())
            .then((Data) => setCoaches(Data))
    }, []);

    return (
        <div className="coaches">
            <h4>ADD COACH</h4>
            <form  onSubmit={handleAddFormSubmit}>
        <input type="text" name="coach name" className="form-control" required="required" placeholder="Enter Coach name..." onChange={handleAddForm}/>
        <input type="text" name="coach team" className="form-control" required="required" placeholder="Enter Coach team..." onChange={handleAddForm}/>
        <button type="submit" className="form-control" class="btn btn-outline-success"  >Add</button>
    </form>
            <table>
      <thead>
        <tr>
          <th>COACH NAME</th>
          <th>COACH TEAM</th>
        </tr>
    </thead>
    <tbody>
        {coaches.map((coaches)=>(
             <tr>
             <td>{coaches.coach_name}</td>
             <td>{coaches.coach_team}</td>
            
           </tr>
        ))}
     
    </tbody>
    </table>
    
    
    </div>
    );
}
          
 export default Coaches