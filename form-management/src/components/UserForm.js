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
            <label>Name:
                <input type="text" name="name" value={values.name} onChange={onChange} />
            </label>
            <label>Age:
                <input type="text" name="age" value={values.age} onChange={onChange} />
            </label>
            <label>Height:
                <input type="text" name="height" value={values.height} onChange={onChange} />
            </label>
            <button>submit</button>
        </form>
    )
}

export default UserForm