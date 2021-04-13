/* eslint-disable @typescript-eslint/no-implied-eval */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { BASE_PREFIX } from '../utils'

interface IProps {
  className?: string
  transitionName?: string
  transitionTime?: number
  style?: Record<string, any>
}

interface IState {
  notices: any
}

let seed = 0
const getNoticeKey = () => {
  return `notice-${new Date().getTime()}-${seed++}`
}

class Notification extends Component<IProps, IState> {
  static defaultProps = {
    className: '',
    transitionName: `${BASE_PREFIX}fade`,
    transitionTime: 300,
    style: {}
  }

  state = {
    notices: []
  }

  closeTimer: NodeJS.Timeout | null | undefined

  componentWillUnmount() {
    this.clearCloseTimer()
  }

  clearCloseTimer = () => {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer)
      this.closeTimer = null
    }
  }

  add = (notice: Record<string, any>) => {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this
    notice.key = notice.key || getNoticeKey()
    const { key } = notice
    this.setState((previousState) => {
      const { notices } = previousState
      if (!notices.filter((v: any) => v.key === key).length) {
        if (notice.duration > 0) {
          self.closeTimer = setTimeout(() => {
            self.clearCloseTimer()
            self.remove(notice.key)
          }, notice.duration * 1000)
        }
        return {
          notices: notices.concat(notice)
        }
      }
    })
  }

  remove = (key: string) => {
    const { transitionTime } = this.props
    this.setState((previousState) => {
      return {
        notices: previousState.notices.filter((notice: any) => {
          if (notice.key === key) {
            if (notice.onClose) {
              setTimeout(notice.onClose, transitionTime || 300)
            }
            return false
          }
          return true
        })
      }
    })
  }

  render() {
    const { className, transitionName, transitionTime, style } = this.props
    const { notices } = this.state
    return (
      <TransitionGroup className={`${className}`} style={style}>
        {notices.map((notice: any) => (
          <CSSTransition
            key={notice.key}
            classNames={`${transitionName}`}
            timeout={transitionTime || 300}
            unmountOnExit
            onOpened={notice.onOpened}
          >
            {notice.content}
          </CSSTransition>
        ))}
      </TransitionGroup>
    )
  }
}

const createNotification = (
  properties: Record<string, any>,
  callback: (notification: any) => void
) => {
  const div = document.createElement('div')
  document.body.appendChild(div)
  let called = false
  const ref = (notification: any) => {
    if (called) return
    called = true
    callback({
      notice(noticeProps: any) {
        notification.add(noticeProps)
      },
      remove(key: string) {
        notification.remove(key)
      },
      component: notification,
      destroy() {
        ReactDOM.unmountComponentAtNode(div)
        document.body.removeChild(div)
      }
    })
  }
  ReactDOM.render(<Notification {...properties} ref={ref} />, div)
}

export default createNotification
