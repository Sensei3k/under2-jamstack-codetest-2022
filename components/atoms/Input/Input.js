import React from 'react'
import PropTypes from 'prop-types'

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
}

export function Input({ className = '', label, ...props }) {
  const baseClassName = `max-w-sm space-y-2 mb-3`

  return (
    <div className={`${baseClassName} ${className}`}>
      <label htmlFor={label} className='inline-block text-gray-600 text-center'>
        {label}
      </label>
      <input
        className='w-full focus:outline-none focus:ring-2 h-10 border-solid border-2 rounded px-2'
        {...props}
      />
    </div>
  )
}
