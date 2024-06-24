import React from "react";

import Card from "../../UI/Card";
import classes from './userlist.module.css';
function Userslist(props) {
  return (
    <Card class={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default Userslist;
