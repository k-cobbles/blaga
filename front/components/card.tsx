import React from 'react'
import Link from 'next/link'
import NextImage from './image'
import { ApiArticleArticle } from '@/types/schemas'

type CardProps = {
  article: ApiArticleArticle;
}

const Card = ({ article }: CardProps) => {
  const category = `${article.attributes.category}`
  const title = `${article.attributes.title}`

  return (
    <Link href={`/articles/${article.attributes.slug}`}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <NextImage image={article.attributes.cover} />
          </div>
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {category}
            </p>
            <p id="title" className="uk-text-large">
              {title}
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}
