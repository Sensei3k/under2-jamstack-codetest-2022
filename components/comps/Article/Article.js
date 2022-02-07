import React from 'react'
import PropTypes from 'prop-types'
import { Heading } from '../../atoms/Heading'
import { TextBlock } from '../../atoms/TextBlock'

Article.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

const dateToString = (date) => {
  let now = new Date()
  let nowString = now.toDateString()

  let splitDate = date.split('-')
  let newDate = new Date(`20${splitDate[2]}`, splitDate[1] - 1, splitDate[0])
  let thisDate = newDate.toDateString()

  if (nowString === thisDate) {
    return 'Today'
  }

  let useableDate = thisDate.split(' ')
  return `${useableDate[0]} ${useableDate[2]} ${useableDate[1]} ${useableDate[3]}`
}

export function Article({
  className = '',
  src,
  alt,
  title,
  date,
  height,
  width,
}) {
  return (
    <div
      className={`grid grid-cols-2 gap-4 items-center md:grid-cols-1 md:gap-4`}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className='object-contain'
      />
      <div className='space-y-2'>
        <TextBlock theme='subtle'>{dateToString(date)}</TextBlock>
        <Heading size='sm' className='text-sm sm:text-lg md:h-12'>
          {title}
        </Heading>
      </div>
    </div>
  )
}
