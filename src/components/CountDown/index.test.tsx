import React from 'react'
import { render } from '@testing-library/react'
import CountDown from '.'
import { CountDownProps } from './index.types'

describe('Test Component', () => {
  let props: CountDownProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<CountDown {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('CountDown')

    expect(component).toHaveTextContent('harvey was here')
  })
})
