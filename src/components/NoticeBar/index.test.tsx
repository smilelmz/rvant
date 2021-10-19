import React from 'react'
import { render } from '@testing-library/react'
import NoticeBar from '.'
import { NoticeBarProps } from './types'

describe('Test Component', () => {
  let props: NoticeBarProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<NoticeBar {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('NoticeBar')

    expect(component).toHaveTextContent('harvey was here')
  })
})
