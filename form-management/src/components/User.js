import React from "react"

function User (props) {
    const { details } = props

    return (
        <div className="user-container" >
            <h3>Name: {details.name}</h3>
            <p>Age: {details.age}</p>
            <p>Height: {details.height}</p>
        </div>
    )
}

export default User
