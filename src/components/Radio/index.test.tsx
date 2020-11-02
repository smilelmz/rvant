import React from 'react'
import { render } from '@testing-library/react'
import Radio from '.'
import { RadioProps } from './index.types'

describe('Test Component', () => {
  let props: RadioProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<Radio {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('Radio')

    expect(component).toHaveTextContent('harvey was here')
  })
})
