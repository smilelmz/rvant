import React from 'react'
import { render } from '@testing-library/react'
import Cell from '.'
import { CellProps } from './index.types'

describe('Test Component', () => {
  let props: CellProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<Cell {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('Cell')

    expect(component).toHaveTextContent('harvey was here')
  })
})
