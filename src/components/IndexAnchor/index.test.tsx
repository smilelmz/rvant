import React from 'react'
import { render } from '@testing-library/react'
import IndexAnchor from '.'
import { IndexAnchorProps } from './types'

describe('Test Component', () => {
  let props: IndexAnchorProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<IndexAnchor {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('IndexAnchor')

    expect(component).toHaveTextContent('harvey was here')
  })
})
