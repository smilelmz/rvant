import React from 'react'
import { render } from '@testing-library/react'
import TreeSelect from '.'
import { TreeSelectProps } from './types'

describe('Test Component', () => {
  let props: TreeSelectProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<TreeSelect {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('TreeSelect')

    expect(component).toHaveTextContent('harvey was here')
  })
})
