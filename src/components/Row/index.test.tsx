import React from 'react'
import { render } from '@testing-library/react'
import Row from '.'
import { RowProps } from './types'

describe('Test Component', () => {
  let props: RowProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<Row {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('Row')

    expect(component).toHaveTextContent('harvey was here')
  })
})
