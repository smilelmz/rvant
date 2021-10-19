import React from 'react'
import { render } from '@testing-library/react'
import Calendar from '.'
import { CalendarProps } from './types'

describe('Test Component', () => {
  let props: CalendarProps

  beforeEach(() => {
    props = {}
  })

  const renderComponent = () => render(<Calendar {...props} />)

  it('should render foo text correctly', () => {
    const { getByTestId } = renderComponent()

    const component = getByTestId('Calendar')

    expect(component).toHaveTextContent('harvey was here')
  })
})
