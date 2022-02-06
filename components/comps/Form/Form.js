import React from "react"
import PropTypes from "prop-types"
import { Button } from "../../atoms/Button/Button"
import { Input } from "../../atoms/Input"

Form.propTypes = {
    className: PropTypes.string,
}

export function Form({ className = "", inputs }) {
    console.log("INput: ", inputs)
    return (
        <form className={`` + className}>
            {inputs.map(item => {
                <Input key={item._id} label={item.name} {...item} />
            })}
            <Input label="first name" />
            <Button type="submit">Subscribe</Button>
        </form>
    )
}
