import React from 'react'
import { render } from '@testing-library/react'
import NavBar from '.'
import { NavBarProps } from './types'

describe('Test Component', () => {
  let props: NavBarProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<NavBar {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('NavBar')

    expect(component).toHaveTextContent('harvey was here')
  })
})
