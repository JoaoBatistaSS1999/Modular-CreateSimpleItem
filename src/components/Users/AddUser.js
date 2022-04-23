import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

function AddUser(props) {
  const nameInput = useRef();
  const ageInput = useRef();

  // const [enteredUserName, setEnteredUserName] = useState("");
  // const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState();
  const AddUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInput.current.value;
    const enteredAge = nameInput.current.value;
    if (enteredAge.trim().length === 0 || enteredName.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age ( > 0).",
      });
      return;
    }

    props.onAddUser(enteredName, enteredAge);
    nameInput.current.value = "";
    ageInput.current.value = "";

    // setEnteredUserName("");
    // setEnteredUserAge("");
  };
  // const userNameChangeHandler = (event) => {
  //  setEnteredUserName(event.target.value);
  // };
  // const userAgeChangeHandler = (event) => {
  //   setEnteredUserAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="useName">User Name</label>
          <input
            id="useName"
            type="text"
            // value={enteredUserName}
            // onChange={userNameChangeHandler}
            ref={nameInput}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            // value={enteredUserAge}
            // onChange={userAgeChangeHandler}
            ref={ageInput}
          />
          <Button type="subimit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddUser;
