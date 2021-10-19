import React from 'react'
import { render } from '@testing-library/react'
import Tag from '.'
import { TagProps } from './types'

describe('Test Component', () => {
  let props: TagProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<Tag {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('Tag')

    expect(component).toHaveTextContent('harvey was here')
  })
})
