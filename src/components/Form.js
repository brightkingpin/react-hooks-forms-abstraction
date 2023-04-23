/*
import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
*/

import React, { useState } from "react";

function Form() {
 const [firstName, setFirstName] = useState("John");
 const [lastName, setLastName] = useState("Henry");
 const [admin, setAdmin] = useState(false);

 function handleFirstNameChange(event) {
  setFirstName(event.target.value);
 }

 function handleLastNameChange(event) {
  setLastName(event.target.value);
 }

 function handleAdminChange(event) {
  setAdmin(event.target.checked);
 }

 function handleSubmit(event) {
  event.preventDefault();
  console.log({ firstName, lastName, admin });
 }

return (
  <form onSubmit={handleSubmit}>
    <input type="text" onChange={handleFirstNameChange} value={firstName} />
    <input type="text" onChange={handleLastNameChange} value={lastName} />
    <input type="checkbox" onChange={handleAdminChange} checked={admin} />
    <button type="submit">Submit</button>
  </form>
);
}

export default Form;