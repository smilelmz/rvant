import React from 'react'
import { render } from '@testing-library/react'
import ShareSheet from '.'
import { ShareSheetProps } from './types'

describe('Test Component', () => {
  let props: ShareSheetProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<ShareSheet {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('ShareSheet')

    expect(component).toHaveTextContent('harvey was here')
  })
})
