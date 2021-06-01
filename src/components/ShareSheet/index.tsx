import React from 'react'
import { ShareSheetOption, ShareSheetProps } from './index.types'
import { createNamespace } from '../utils'
import { useI18n } from '@/components/locale'
import { Popup } from '..'

const PRESET_ICONS = [
  'qq',
  'link',
  'weibo',
  'wechat',
  'poster',
  'qrcode',
  'weapp-qrcode',
  'wechat-moments'
]
function getIconURL(icon: string) {
  if (PRESET_ICONS.includes(icon)) {
    return `https://img.yzcdn.cn/vant/share-sheet-${icon}.png`
  }
  return icon
}

const [bem, t] = createNamespace('sharesheet')
const ShareSheet = ({
  style = {},
  className,
  show = false,
  zIndex,
  duration = 0.3,
  overlay = true,
  overlayClass,
  overlayStyle = {},
  transitionAppear = false,
  lockScroll = true,
  closeOnClickOverlay = true,
  title,
  cancelText,
  description,
  options = [],
  closeOnPopstate = true,
  safeAreaInsetBottom = true,
  select,
  cancel,
  opened,
  closed
}: ShareSheetProps) => {
  const { messages } = useI18n()
  const onCancel = () => cancel && cancel()
  const onSelect = (option: ShareSheetOption, index: number) =>
    select && select(option, index)

  const renderHeader = () => {
    if (title || description) {
      return (
        <div className={bem('header')}>
          {title && <h2 className={bem('title')}>{title}</h2>}
          {description && (
            <span className={bem('description')}>{description}</span>
          )}
        </div>
      )
    }
  }

  const renderOption = (option: ShareSheetOption, index: number) => {
    const { name, icon, className, description } = option
    return (
      <div
        key={index}
        role='button'
        tabIndex={index}
        className={`${bem('option')} ${className}`}
        onClick={() => onSelect(option, index)}
      >
        <img src={getIconURL(icon)} className={bem('icon')} />
        {name && <span className={bem('name')}>{name}</span>}
        {description && (
          <span className={bem('option-description')}>{description}</span>
        )}
      </div>
    )
  }

  const renderOptions = (
    options: ShareSheetOption[],
    index: number,
    border?: boolean
  ) => (
    <div className={bem('options', { border })} key={index}>
      {options.map(renderOption)}
    </div>
  )

  const renderRows = () => {
    if (Array.isArray(options[0])) {
      return (options as ShareSheetOption[][]).map((item, index) =>
        renderOptions(item, index, index !== 0)
      )
    }
    return renderOptions(options as ShareSheetOption[], 0)
  }

  const renderCancelButton = () => {
    return (
      <button type='button' className={bem('cancel')} onClick={onCancel}>
        {cancelText ?? t(messages, 'cancel')}
      </button>
    )
  }

  const popupProps = {
    show,
    style,
    zIndex,
    duration,
    overlay,
    overlayClass,
    overlayStyle,
    transitionAppear,
    lockScroll,
    closeOnClickOverlay,
    closeOnPopstate,
    safeAreaInsetBottom,
    close: onCancel,
    opened,
    closed
  }

  return (
    <Popup
      round
      className={`${bem()} ${className || ''}`}
      position='bottom'
      {...popupProps}
    >
      {renderHeader()}
      {renderRows()}
      {renderCancelButton()}
    </Popup>
  )
}
export default React.memo(ShareSheet)
