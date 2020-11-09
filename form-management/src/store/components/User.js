import React from "react"
import "./User.css"

function User (props) {
    const { details } = props
    console.log(details)

    return (
        <div className="user-container" >
            <h3>Name: {details.name}</h3>
            <p>Age: {details.age}</p>
            <p>Height: {details.height}</p>
            <p>Color: {details.color}</p>
            <p>Alignment: {details.gve} {details.lvc}</p>
            <p>Sign: {details.sign[0]} {details.sign[1]} {details.sign[2]}</p>
        </div>
    )
}

export default User
