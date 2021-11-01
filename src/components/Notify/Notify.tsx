import React from 'react'
import Popup from '../Popup'
import { NotifyProps } from './types'
import { createNamespace } from '../utils'

const [bem] = createNamespace('notify')
const VanNotify: React.FC<NotifyProps> = (props: NotifyProps) => {
  return (
    <Popup
      show={props.show}
      className={`${bem([props.type || 'danger'])} ${props.className}`}
      style={{
        color: props.color,
        background: props.background
      }}
      overlay={false}
      position='top'
      duration={0.2}
      lockScroll={props.lockScroll}
      updateShow={props.updateShow}
    >
      {props.message || props.children}
    </Popup>
  )
}

export default VanNotify
