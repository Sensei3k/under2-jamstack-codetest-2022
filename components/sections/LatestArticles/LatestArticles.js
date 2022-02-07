import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '../../atoms/Container'
import { Heading } from '../../atoms/Heading'
import { Article } from '../../comps/Article'

LatestArticles.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export function LatestArticles({ className = '', articles }) {
  return (
    <section className={` ${className}`}>
      <Container>
        <div className='col-span-full'>
          <Heading className=''>The latest from Mula</Heading>
          <div className='grid gap-3 md:grid-cols-3 '>
            {articles.map((article) => (
              <Article
                key={article._id}
                title={article.heading}
                date={article.publishDate}
                src={article.coverImage}
                alt={article.heading}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
