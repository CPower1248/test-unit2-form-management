import React from "react"

function UserForm (props) {
    const { values, change, submit } = props

    const onChange = e => {
        const { name, value } = e.target
        change(name, value)
    }

    const onSubmit = e => {
        e.preventDefault()
        submit()
    }

    return (
        <form className="userform-container" onSubmit={onSubmit} >
            <div>
                <label>Name:
                    <input type="text" name="name" value={values.name} onChange={onChange} />
                </label>
                <label>Age:
                    <input type="text" name="age" value={values.age} onChange={onChange} />
                </label>
                <label>Height:
                    <input type="text" name="height" value={values.height} onChange={onChange} />
                </label>
            </div>
            <div>
                <label>Role:
                    <select type="dropdown" name="role" value={values.role} onChange={onChange}>
                        <option value="">-select role-</option>
                        <option value="Blue">Blue</option>
                        <option value="Red">Red</option>
                    </select>
                </label>
            </div>
            <button>submit</button>
        </form>
    )
}

export default UserForm