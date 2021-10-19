import React from 'react'
import { render } from '@testing-library/react'
import CollapseItem from '.'
import { CollapseItemProps } from './types'

describe('Test Component', () => {
  let props: CollapseItemProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<CollapseItem {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('CollapseItem')

    expect(component).toHaveTextContent('harvey was here')
  })
})
