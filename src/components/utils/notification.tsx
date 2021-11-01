import React, { useImperativeHandle } from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import { extend } from '.'

export type INotificationHandler = {
  open: (props: Record<string, any>) => void
  close: VoidFunction
  toggle: (show: boolean) => void
}

export type INotificationState = {
  show: boolean
  [key: string]: any
}

export type INotificationProps = {
  render: (
    state: INotificationState,
    toggle: (show: boolean) => void
  ) => React.ReactElement
}

function usePopupState(ref: React.Ref<INotificationHandler>) {
  const [state, setState] = useState<INotificationState>({ show: false })

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

  useImperativeHandle(ref, () => ({
    open,
    toggle,
    close
  }))

  return {
    open,
    close,
    state,
    toggle
  }
}

const Notification = (
  { render }: INotificationProps,
  ref: React.Ref<INotificationHandler>
) => {
  const { state, toggle } = usePopupState(ref)
  return render(state, toggle)
}

const NotificationWrapper = React.memo(React.forwardRef(Notification))

export const createNotification = (props: INotificationProps) => {
  let instance = null
  const div = document.createElement('div')
  document.body.appendChild(div)

  ReactDOM.render(
    <NotificationWrapper
      {...props}
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
