import React from 'react'
import { render } from '@testing-library/react'
import Loading from '.'
import { LoadingProps } from './index.types'

describe('Test Component', () => {
  let props: LoadingProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<Loading {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('Loading')

    expect(component).toHaveTextContent('harvey was here')
  })
})
