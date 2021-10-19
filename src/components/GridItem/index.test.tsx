import React from 'react'
import { render } from '@testing-library/react'
import GridItem from '.'
import { GridItemProps } from './types'

describe('Test Component', () => {
  let props: GridItemProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<GridItem {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('GridItem')

    expect(component).toHaveTextContent('harvey was here')
  })
})
