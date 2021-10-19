import React from 'react'
import { render } from '@testing-library/react'
import Rate from '.'
import { RateProps } from './types'

describe('Test Component', () => {
  let props: RateProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<Rate {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('Rate')

    expect(component).toHaveTextContent('harvey was here')
  })
})
