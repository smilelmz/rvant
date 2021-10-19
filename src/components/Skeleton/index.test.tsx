import React from 'react'
import { render } from '@testing-library/react'
import Skeleton from '.'
import { SkeletonProps } from './types'

describe('Test Component', () => {
  let props: SkeletonProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<Skeleton {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('Skeleton')

    expect(component).toHaveTextContent('harvey was here')
  })
})
