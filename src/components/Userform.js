import React from "react";
import './Userform.css';
function Userform(props)
{
function savedetailhandler(event) 
{
    console.log(event.get.value)
}
return(
    <div > 
        <div>
            <label>Username</label>
            <input type="text" onChange={savedetailhandler}  />
        </div>
        <div>
            <label>Age</label>
            <input type="text"/>
        </div>
        <button type='submit' >Submit</button>
    </div>
);
}
export default Userform;