import React from 'react'
import { render } from '@testing-library/react'
import PullRefresh from '.'
import { PullRefreshProps } from './types'

describe('Test Component', () => {
  let props: PullRefreshProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<PullRefresh {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('PullRefresh')

    expect(component).toHaveTextContent('harvey was here')
  })
})
