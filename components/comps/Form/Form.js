import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../atoms/Button/Button'
import { Input } from '../../atoms/Input'

Form.propTypes = {
  className: PropTypes.string,
}

export function Form({ className = '', ...props }) {
  return (
    <form onSubmit={props.onSubmit} className={`gap-4 sm:grid sm:grid-cols-2` + className} ref={props.inputRef}>
      {props.inputs.map((item) => (
        <Input key={item._id} id={item.label} label={item.label} name={item.name} onChange={props.onChange} />
        ))}
      <Button type='submit' className='w-1/3 my-4 md:w-3/4'>
        Subscribe
      </Button>
    </form>
  )
}
