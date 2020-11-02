import React from 'react'
import { render } from '@testing-library/react'
import CellGroup from '.'
import { CellGroupProps } from './index.types'

describe('Test Component', () => {
  let props: CellGroupProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<CellGroup {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('CellGroup')

    expect(component).toHaveTextContent('harvey was here')
  })
})
