import React from "react";
import axios from "axios";
const table = () => {
    
    const handleChange = async (e) => {
        e.preventDefault();
        console.log(e.target.properties.value);
       await axios.post('http://localhost:5000/api/post', {
            properties: 'John Doe',
        });
    }

    
    return(
        <form onSubmit={handleChange}>
            <input name = "properties"/>
            <input name = "due_date"/>
            <input name = "description"/>
            <input name = "assignee"/>
            <input name = "status"/>
            <button type ="submit">add</button>
        </form>
    )
}

export default table 