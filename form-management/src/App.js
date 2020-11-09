import React, { useState } from "react"
import axios from "axios"
import UserForm from "./store/components/UserForm"
import UserList from "./store/components/UserList"
import './App.css';

const initialFormValues = {
  id: Math.round(Math.random() * 10000),
  name: "",
  age: "",
  height: "",
  color: "",
  gve: "",
  lvc: "",
  soul: false,
  heart: false,
  mind: false
}

const initialUsers = []

function App() {
  const [ users, setUsers ] = useState(initialUsers)
  const [ formValues, setFormValues ] = useState(initialFormValues)

  const fetchUsers = () => {
      axios.get("https://reqres.in/api/users/")
        .then(res => {
          console.log("THIS IS GET RES: ", res)
          // setUsers([...users, res.data])
        })
        .catch(err => {
          console.log(err)
        })
  }
  fetchUsers()

  const handleChange = (name, value) => {
    setFormValues({...formValues, [name]: value})
  }

  const handleSubmit = () => {
    let newUser = {
      id: Math.round(Math.random() * 10000),
      name: formValues.name.trim(),
      age: formValues.age,
      height: formValues.height,
      color: formValues.color,
      gve: formValues.gve,
      lvc: formValues.lvc,
      sign: ["soul", "heart", "mind"].filter(item => formValues[item])
    }
    axios.post("https://reqres.in/api/users")
     .then(res => {
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
      <h1>Smurf DnD Character Creator</h1>
      <h6>-Form Management-</h6>
      <UserForm values={formValues} change={handleChange} submit={handleSubmit} />
      <UserList users={users} />
    </div>
  );
}

export default App;
