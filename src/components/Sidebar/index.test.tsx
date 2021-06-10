import React from 'react'
import { render } from '@testing-library/react'
import Sidebar from '.'
import { SidebarProps } from './index.types'

describe('Test Component', () => {
  let props: SidebarProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<Sidebar {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('Sidebar')

    expect(component).toHaveTextContent('harvey was here')
  })
})
