import React from 'react'
import { render } from '@testing-library/react'
import DatetimePicker from '.'
import { DatetimePickerProps } from './index.types'

describe('Test Component', () => {
  let props: DatetimePickerProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<DatetimePicker {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('DatetimePicker')

    expect(component).toHaveTextContent('harvey was here')
  })
})
