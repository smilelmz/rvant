import React, { MouseEvent, useEffect, useMemo, useState } from 'react'
import LazyLoad from 'react-lazyload'
import { isDef, addUnit, createNamespace } from '../utils'
import Icon from '../Icon'
import { ImageProps } from './index.types'

const [bem] = createNamespace('image')
const Image: React.FC<ImageProps> = ({
  src,
  fit = 'fill',
  alt,
  width,
  height,
  radius,
  iconPrefix,
  iconSize,
  round = false,
  lazyLoad = false,
  showError = true,
  showLoading = true,
  errorIcon = 'photo-fail',
  loadingIcon = 'photo',
  click,
  load,
  error
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const style = useMemo(() => {
    const style: Record<string, any> = {}
    if (isDef(width)) {
      style.width = addUnit(width)
    }

    if (isDef(height)) {
      style.height = addUnit(height)
    }

    if (isDef(radius)) {
      style.overflow = 'hidden'
      style.borderRadius = addUnit(radius)
    }
    return style
  }, [width, height, radius])
  useEffect(() => {
    setIsLoading(true)
    setIsError(false)
  }, [src])
  const onLoad = () => {
    setIsLoading(false)
    load && load()
  }
  const onError = () => {
    setIsLoading(false)
    setIsError(true)
    error && error()
  }
  const renderLoadingIcon = () => {
    if (React.isValidElement(loadingIcon)) {
      return loadingIcon
    }
    return (
      <Icon
        name={loadingIcon as string}
        className={bem(`loading-icon`)}
        classPrefix={iconPrefix}
      />
    )
  }
  const renderErrorIcon = () => {
    if (React.isValidElement(errorIcon)) {
      return errorIcon
    }
    return (
      <Icon
        size={iconSize}
        name={errorIcon as string}
        className={bem(`error-icon`)}
        classPrefix={iconPrefix}
      />
    )
  }
  const renderPlaceholder = () => {
    if (isLoading && showLoading) {
      return <div className={bem('loading')}>{renderLoadingIcon()}</div>
    }
    if (isError && showError) {
      return <div className={bem('error')}>{renderErrorIcon()}</div>
    }
  }
  const renderImage = () => {
    if (isError) {
      return <></>
    }
    if (lazyLoad) {
      return (
        <LazyLoad height='100%' once>
          <img
            src={src}
            onLoad={onLoad}
            onError={onError}
            className={bem(`img`)}
            style={{ objectFit: fit }}
            alt={alt}
          />
        </LazyLoad>
      )
    }
    return (
      <img
        src={src}
        onLoad={onLoad}
        onError={onError}
        className={bem(`img`)}
        style={{ objectFit: fit }}
        alt={alt}
      />
    )
  }
  return (
    <div
      className={bem([{ round }])}
      style={style}
      onClick={(e: MouseEvent) => click && click(e)}
    >
      {renderImage()}
      {renderPlaceholder()}
    </div>
  )
}
export default React.memo(Image)
