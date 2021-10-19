import React from 'react'
import { render } from '@testing-library/react'
import Form from '.'
import { FormProps } from './types'

describe('Test Component', () => {
  let props: FormProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<Form {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('Form')

    expect(component).toHaveTextContent('harvey was here')
  })
})
