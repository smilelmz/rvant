import React from 'react'
import { render } from '@testing-library/react'
import Tabbar from '.'
import { TabbarProps } from './types'

describe('Test Component', () => {
  let props: TabbarProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<Tabbar {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('Tabbar')

    expect(component).toHaveTextContent('harvey was here')
  })
})
