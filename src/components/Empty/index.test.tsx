import React from 'react'
import { render } from '@testing-library/react'
import Empty from '.'
import { EmptyProps } from './index.types'

describe('Test Component', () => {
  let props: EmptyProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<Empty {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('Empty')

    expect(component).toHaveTextContent('harvey was here')
  })
})
