import React from 'react'
import { render } from '@testing-library/react'
import Notify from '.'
import { NotifyProps } from './types'

describe('Test Component', () => {
  let props: NotifyProps

  beforeEach(() => {
    props = {}
  })

  const renderComponent = () => render(<Notify {...props} />)

  it('should render foo text correctly', () => {
    const { getByTestId } = renderComponent()

    const component = getByTestId('Notify')

    expect(component).toHaveTextContent('harvey was here')
  })
})
