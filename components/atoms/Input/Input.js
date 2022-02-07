import React from 'react'
import { Link } from '../Link'
import PropTypes from 'prop-types'

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
}

export function Input({ className = '', label }, props) {
  const baseClassName = `max-w-sm space-y-2 mb-2`

  return (
    <div className={`${baseClassName} ${className}`}>
      <label className='inline-block text-gray-600 text-center'>{label}</label>
      <input className='bg-grey-light w-full' {...props} />
    </div>
  )
}
