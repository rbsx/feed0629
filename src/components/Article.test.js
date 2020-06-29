import React from 'react'
import { render } from '@testing-library/react'

import Article from './Article'

describe('<Article />', () => {
  test('username and text should appear in the article', () => {
    let mockArticle = {
      image: '',
      username: 'John Doe',
      text: 'My first tweet!',
    }
    const { queryByText } = render(<Article {...mockArticle} />)

    expect(queryByText('John Doe')).toBeInTheDocument()
    expect(queryByText('My first tweet!')).toBeInTheDocument()
  })
})
