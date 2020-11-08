import React, { useEffect, useState } from "react"
import axios from "axios"
import UserForm from "./components/UserForm"
import UserList from "./components/UserList"
import './App.css';

const initialFormValues = {
  id: Math.round(Math.random() * 10000),
  name: "",
  age: "",
  height: "",
  role: ""
}

const initialUsers = []

function App() {
  const [ users, setUsers ] = useState(initialUsers)
  const [ formValues, setFormValues ] = useState(initialFormValues)

  // const fetchUsers = () => {
  //     axios.get("https://reqres.in/api/users")
  //       .then(res => {
  //         console.log(res)
  //       })
  //       .catch(err => {
  //         console.log(err)
  //       })
  // }
  // fetchUsers()

  const handleChange = (name, value) => {
    setFormValues({...formValues, [name]: value})
  }

  const handleSubmit = () => {
    let newUser = {
      id: Math.round(Math.random() * 10000),
      name: formValues.name.trim(),
      age: formValues.age,
      height: formValues.height,
      role: formValues.role
    }
    axios.post("https://reqres.in/api/users")
     .then(res => {
       console.log("THIS IS POST RES: ", res)
      setUsers([...users, newUser])
     })
     .catch(err => {
       console.log(err)
     })
    setUsers([...users, newUser])
    setFormValues(initialFormValues)
  }

  return (
    <div className="App">
      <h1>-Form Management-</h1>
      <UserForm values={formValues} change={handleChange} submit={handleSubmit} />
      <UserList users={users} />
    </div>
  );
}

export default App;
