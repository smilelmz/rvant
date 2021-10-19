import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import { extend } from '.'

export function usePopupState() {
  const [state, setState] = useState<Record<string, any>>({ show: false })

  const toggle = (show: boolean) => {
    setState({
      ...state,
      show
    })
  }

  const open = (props: Record<string, any>) => {
    setState({ ...extend(state, props), show: true })
  }

  const close = () => toggle(false)

  return {
    open,
    close,
    state,
    toggle
  }
}

export const createNotification = (RootComponent: typeof React.Component) => {
  let instance = null
  const div = document.createElement('div')
  document.body.appendChild(div)

  ReactDOM.render(
    <RootComponent
      ref={(ele) => {
        instance = ele
      }}
    />,
    div
  )

  return {
    instance,
    unmount: () => {
      ReactDOM.unmountComponentAtNode(div)
      document.body.removeChild(div)
    }
  }
}
