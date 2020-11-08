import React from "react"
import User from "./User"

function UserList (props) {
    const { users } =props

    return (
        <div className="userlist-container" >
            <h2>User List</h2>
            {users.map(item => {
                return <User details={item} key={item.id} />
            })}
        </div>
    )
}

export default UserList
