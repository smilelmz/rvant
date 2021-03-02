import React from 'react'
import { render } from '@testing-library/react'
import Calendar from '.'
import { CalendarProps } from './index.types'

describe('Test Component', () => {
  let props: CalendarProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<Calendar {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('Calendar')

    expect(component).toHaveTextContent('harvey was here')
  })
})
