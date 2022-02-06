import React from "react"
import { Link } from "../Link"
import PropTypes from "prop-types"

Input.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string
}

export function Input({ className = "", label }, props) {
    
    const baseClassName = `inline-block bg-blue-700 hover:bg-blue-800 px-5 py-4 rounded-md text-white`
    
    return (
        <div className={`${baseClassName} ${className}`}>
            <label>{label}</label>
            <input {...props} />
        </div>
    )
}
