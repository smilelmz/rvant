import React, { useState } from 'react'
import LazyLoad from 'react-lazyload'
import { BASE_PREFIX } from '../utils/constant'
import { isDef, addUnit } from '../utils'
import Icon from '../Icon'
import { ImageProps } from './index.types'
import classnames from '../utils/classNames'

const baseClass = `${BASE_PREFIX}image`
const Image: React.FC<ImageProps> = ({
  src,
  fit = 'fill',
  alt,
  width,
  height,
  radius,
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
  const onLoad = () => {
    setIsLoading(false)
    load && load()
  }
  const onError = () => {
    setIsLoading(false)
    setIsError(true)
    error && error()
  }
  const onClick = () => {
    click && click()
  }
  const genPlaceholder = () => {
    if (isLoading && showLoading) {
      return (
        <div className={classnames(`${baseClass}__loading`)}>
          {typeof loadingIcon === 'object' ? (
            loadingIcon
          ) : (
            <Icon
              name={loadingIcon as string}
              className={classnames(`${baseClass}__loading-icon`)}
            />
          )}
        </div>
      )
    }
    if (isError && showError) {
      return (
        <div className={classnames(`${baseClass}__error`)}>
          {typeof errorIcon === 'object' ? (
            errorIcon
          ) : (
            <Icon
              name={errorIcon as string}
              className={classnames(`${baseClass}__error-icon`)}
            />
          )}
        </div>
      )
    }
  }
  const genImage = () => {
    if (isError) {
      return null
    }
    if (lazyLoad) {
      return (
        <LazyLoad height='100%' once>
          <img
            src={src}
            onLoad={onLoad}
            onError={onError}
            className={classnames(`${baseClass}__img`)}
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
        className={classnames(`${baseClass}__img`)}
        style={{ objectFit: fit }}
        alt={alt}
      />
    )
  }
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
  const className = classnames(baseClass, [{ round }])
  return (
    <div className={className} style={style} onClick={onClick}>
      {genImage()}
      {genPlaceholder()}
    </div>
  )
}
export default Image
