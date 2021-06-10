import React from 'react'
import { render } from '@testing-library/react'
import SidebarItem from '.'
import { SidebarItemProps } from './index.types'

describe('Test Component', () => {
  let props: SidebarItemProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<SidebarItem {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('SidebarItem')

    expect(component).toHaveTextContent('harvey was here')
  })
})
