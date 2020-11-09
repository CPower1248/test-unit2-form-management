import React from "react"
import User from "./User"
import "./UserList.css"

function UserList (props) {
    const { users } =props

    return (
        <div className="userlist-container" >
            <h2>User List</h2>
            <div className="userlist">
                {users.map(item => {
                    return <User details={item} key={item.id} />
                })}
            </div>
        </div>
    )
}

export default UserList
