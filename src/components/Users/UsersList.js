import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

function UsersList(props) {
  return (
    <Card className={classes.users}>
      {props.users.length === 0 ? null : (
        <ul>
          {props.users.map((element) => (
            <li key={element.id}>
              <p>
                <b>Name: </b>
                {element.name}, <b>Age: </b>
                {element.age} years old
              </p>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}

export default UsersList;
