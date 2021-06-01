import React from 'react'
import { EmptyProps } from './index.types'
import { Network } from './Network'
import { createNamespace, getSizeStyle } from '../utils'

const [bem] = createNamespace('empty')
const PRESET_IMAGES = ['error', 'search', 'default']
const Empty: React.FC<EmptyProps> = ({
  style = {},
  className = '',
  imageSize,
  description,
  image = 'default',
  children
}) => {
  const renderImage = () => {
    if (typeof image === 'string') {
      if (image === 'network') {
        return <Network />
      }

      if (PRESET_IMAGES.includes(image)) {
        image = `https://img.yzcdn.cn/vant/empty-image-${image}.png`
      }

      return <img src={image as string} />
    }
    return image
  }
  const renderDescription = () => {
    if (description) {
      return <p className={bem('description')}>{description}</p>
    }
  }
  const renderBottom = () => {
    if (children) {
      return <div className={bem('bottom')}>{children}</div>
    }
  }
  return (
    <div className={`${bem()} ${className}`} style={style}>
      <div className={bem('image')} style={getSizeStyle(imageSize)}>
        {renderImage()}
      </div>
      {renderDescription()}
      {renderBottom()}
    </div>
  )
}
export default React.memo(Empty)
