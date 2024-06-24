import React, { useState } from "react";
import Userform from "./components/Users/Userform";
import Userlist from "./components/Users/userslist";


function App() {
  const [userslist, setuserslist] = useState([]);

  const addUserHandler = (uName,uAge) =>{
    setuserslist((prevUsersList) =>{
      return [...prevUsersList,{name:uName,age:uAge,id: Math.random().toString()}];
    })
  }
  return (
    <div>
      <Userform onAddUser={addUserHandler}/>
      <Userlist users={userslist} />
    </div>
  );
}

export default App;
