import React from 'react'
import { render } from '@testing-library/react'
import Cascader from '.'
import { CascaderProps } from './types'

describe('Test Component', () => {
  let props: CascaderProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<Cascader {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('Cascader')

    expect(component).toHaveTextContent('harvey was here')
  })
})
