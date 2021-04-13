import React from 'react'
import { render } from '@testing-library/react'
import ActionSheet from '.'
import { ActionSheetProps } from './index.types'

describe('Test Component', () => {
  let props: ActionSheetProps

  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })

  const renderComponent = () => render(<ActionSheet {...props} />)

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()

    const component = getByTestId('ActionSheet')

    expect(component).toHaveTextContent('harvey was here')
  })
})
