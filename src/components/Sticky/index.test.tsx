import React from 'react'
import { render } from '@testing-library/react'
import Sticky from '.'
import { StickyProps } from './index.types'

describe('Test Component', () => {
  let props: StickyProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<Sticky {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('Sticky')

    expect(component).toHaveTextContent('harvey was here')
  })
})
