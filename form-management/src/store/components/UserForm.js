import React from "react"
import "./UserForm.css"

function UserForm (props) {
    const { values, change, submit } = props

    const onChange = e => {
        const { name, value, type, checked } = e.target
        const valueToUse = type === "checkbox" ? checked : value
        change(name, valueToUse)
    }

    const onSubmit = e => {
        e.preventDefault()
        submit()
    }

    return (
        <form className="userform-container" onSubmit={onSubmit} >
            <div className="text-container">
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
            <div className="dropdown-container">
                <label>Color:
                    <select type="dropdown" name="color" value={values.color} onChange={onChange}>
                        <option value="">-select role-</option>
                        <option value="Red">Red</option>
                        <option value="Orange">Orange</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Green">Green</option>
                        <option value="Blue">Blue</option>
                        <option value="Indigo">Indigo</option>
                        <option value="Violet">Violet</option>
                    </select>
                </label>
            </div>
            <div className="radio-container">
                <label>Alignment:
                    <div>
                        <input type="radio" name="gve" value="Good" checked={values.gve === "Good"} onChange={onChange} /> Good
                        <input type="radio" name="gve" value="Neutral" checked={values.gve === "Neutral"} onChange={onChange} /> Neutral
                        <input type="radio" name="gve" value="Evil" checked={values.gve === "Evil"} onChange={onChange} /> Evil
                    </div>
                    <div>
                        <input type="radio" name="lvc" value="Lawful" checked={values.lvc === "Lawful"} onChange={onChange} /> Lawful
                        <input type="radio" name="lvc" value="Neutral" checked={values.lvc === "Neutral"} onChange={onChange} /> Neutral
                        <input type="radio" name="lvc" value="Chaotic" checked={values.lvc === "Chaotic"} onChange={onChange} /> Chaotic
                    </div>
                </label>
            </div>
            <div className="checkbox-container">Sign: 
                <div>
                    <label>Soul:
                        <input type="checkbox" name="soul" checked={values.soul} onChange={onChange} />
                    </label>
                    <label>Heart:
                        <input type="checkbox" name="heart" checked={values.heart} onChange={onChange} />
                    </label>
                    <label>Mind:
                        <input type="checkbox" name="mind" checked={values.mind} onChange={onChange} />
                    </label>
                </div>
            </div>
            <button className="submit-btn">submit</button>
        </form>
    )
}

export default UserForm