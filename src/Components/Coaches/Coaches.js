import React, {useState, useEffect} from "react";
import './Coaches.css'


function Coaches(){

    const [coaches, setCoaches] = useState('');
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
    
            const newCoach = {
                name: addForm.name}
                const newCoach1 = [...coaches,newCoach]
        setCoaches(newCoach1)
    }
    
    return(
        <div className="coach">
            <form onSubmit={handleAddFormSubmit}>
            <input type="text" name="coach name" className="form-control" required="required" placeholder="Enter Coach Name..." onChange={handleAddForm} />
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

export default Coaches;

