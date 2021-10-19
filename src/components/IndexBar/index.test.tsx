import React from 'react'
import { render } from '@testing-library/react'
import IndexBar from '.'
import { IndexBarProps } from './types'

describe('Test Component', () => {
  let props: IndexBarProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<IndexBar {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('IndexBar')

    expect(component).toHaveTextContent('harvey was here')
  })
})
