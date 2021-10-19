import React from 'react'
import { render } from '@testing-library/react'
import Image from '.'
import { ImageProps } from './types'

describe('Test Component', () => {
  let props: ImageProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<Image {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('Image')

    expect(component).toHaveTextContent('harvey was here')
  })
})
