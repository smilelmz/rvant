import React from 'react'
import { render } from '@testing-library/react'
import Grid from '.'
import { GridProps } from './types'

describe('Test Component', () => {
  let props: GridProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<Grid {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('Grid')

    expect(component).toHaveTextContent('harvey was here')
  })
})
