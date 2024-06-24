import React, { useState } from "react";
import classes from "./Userform.module.css";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import Errormodal from "../../UI/errormodal";
function Userform(props) {
  const [enteredUsername, setEnteredeUsername] = useState("");
  const [enteredage, setEnteredeage] = useState("");
  const [error,seterror]=useState();
  const usernameChangeHandler = (event) => {
    setEnteredeUsername(event.target.value);
  };
  
  const ageChangeHandler = (event) => {
    setEnteredeage(event.target.value);
  };



  function addUserHandler(event) 
  {
    event.preventDefault();
    if (
      enteredUsername.trim().length === "" ||
      enteredage.trim().length === 0)
      {
        seterror({title:'invalid input',
          message:'please enter a valid name and age (non-empty values). '
        })
        return;
    }
    if (enteredage < 1) {
     seterror({title:'invalid input',
          message:'please enter a valid age (positive age). '});
          return;
    }
    props.onAddUser(enteredUsername, enteredage);
    setEnteredeUsername("");
    setEnteredeage("");
  };

  const errorhandler = () => {
    seterror();
  };

  return (
    <div>
      {error &&<Errormodal title={error.title} message={error.message} onConfirm={errorhandler}/>}
      <Card class={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={enteredage}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
}
export default Userform;
