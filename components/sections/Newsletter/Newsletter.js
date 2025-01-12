import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '../../atoms/Container'
import { Heading } from '../../atoms/Heading'
import { TextBlock } from '../../atoms/TextBlock'
import { Form } from '../../comps/Form'

Newsletter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export function Newsletter({ className = '', ...props }) {
  const inputs = [
    { _id: 1, label: 'First name', name: 'firstName' },
    { _id: 2, label: 'Last name', name: 'lastName' },
    { _id: 3, label: 'Email', name: 'email' },
    { _id: 4, label: 'Company', name: 'company' },
  ]

  return (
    <section className={`bg-gray-100 ${className}`}>
      <Container className='md:items-center md:space-x-24'>
        <div className='col-span-full md:order-1 md:col-span-4'>
          <Heading>Financial Tech trends, straight to your inbox.</Heading>
          <TextBlock theme='subtle' className='md:whitespace-normal'>
            Sign up for trends, reports and papers on everything finance, and
            tech in the banking world.
          </TextBlock>
        </div>
        <div className='md:order-2 md:col-span-7'>
          <Form inputs={inputs} {...props} />
        </div>
      </Container>
    </section>
  )
}
