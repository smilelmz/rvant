import React from 'react'
import ReactDOM from 'react-dom'

export interface CreatePortalProps {
  el?: HTMLElement
  id?: string
  className?: string
  style?: Record<string, any>
  children?: React.ReactNode | React.ReactNode[]
}

class CreatePortal extends React.Component<CreatePortalProps> {
  el: HTMLElement
  constructor(props: CreatePortalProps) {
    super(props)
    if (props.el) this.el = props.el
    else this.el = document.createElement('div')
    if (props.id) this.el.id = props.id
    if (props.className) this.el.className = props.className
    const style = props.style || {}
    if (style) {
      Object.keys(style).forEach((v) => {
        this.el.style[v] = style[v]
      })
    }
  }
  componentDidMount() {
    document.body.appendChild(this.el)
  }
  componentWillUnmount() {
    document.body.removeChild(this.el)
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}

export default CreatePortal
