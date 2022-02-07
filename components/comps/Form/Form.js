import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../atoms/Button/Button'
import { Input } from '../../atoms/Input'

Form.propTypes = {
  className: PropTypes.string,
}

export function Form({ className = '', inputs }) {
  return (
    <form className={`gap-4 sm:grid sm:grid-cols-2` + className}>
      {inputs.map((item) => (
        <Input key={item._id} label={item.name} {...item} />
      ))}
      <Button type='submit' className='w-3/4 my-4'>
        Subscribe
      </Button>
    </form>
  )
}
