import React, { memo } from 'react'

function replaceWithFallback(e) {
  e.target.onerror = null
  e.target.src = 'https://ssl.gstatic.com/images/branding/product/2x/avatar_circle_blue_512dp.png'
}

const Article = ({ image, username, text }) => (
  <div className="md:flex p-6">
    <div className="md:flex-shrink-0">
      <img className="rounded-full w-12" src={image} alt={username} onError={replaceWithFallback} />
    </div>
    <div className="mt-4 md:mt-0 md:ml-4">
      <div className="tracking-wide text-sm text-indigo-600 font-bold">{username}</div>
      <p className="mt-2 text-gray-600">{text}</p>
    </div>
  </div>
)

function compareArticle(prevArticle, nextArticle) {
  return prevArticle.id === nextArticle.id
}

export default memo(Article, compareArticle)
