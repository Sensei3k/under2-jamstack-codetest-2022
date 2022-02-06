import React from "react"
import { Link } from "../Link"
import PropTypes from "prop-types"

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    type: PropTypes.string,
}

export function Button({ className = "", href, children, type }) {
    
    const baseClassName = `inline-block bg-blue-700 hover:bg-blue-800 px-5 py-4 rounded-md text-white`

    if (href) {
        return <Link className={`${baseClassName} ${className}`} href={href}>
            {children}
        </Link>
    }
    
    return (
        <button className={`${baseClassName} ${className}`} type={type}>
            {children}
        </button>
    )
}
