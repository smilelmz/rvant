import React from 'react'
import { render } from '@testing-library/react'
import Col from '.'
import { ColProps } from './index.types'

describe('Test Component', () => {
  let props: ColProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<Col {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('Col')

    expect(component).toHaveTextContent('harvey was here')
  })
})
