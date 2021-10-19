import React, {
  FocusEvent,
  FormEvent,
  MouseEvent,
  useMemo,
  useRef,
  useState
} from 'react'
import { StepperProps } from './types'
import {
  isNaN,
  isDef,
  addUnit,
  resetScroll,
  formatNumber,
  getSizeStyle,
  preventDefault,
  createNamespace,
  callInterceptor
} from '../utils'
import { useWatch } from '../composables'

const [bem] = createNamespace('stepper')
const LONG_PRESS_INTERVAL = 200
const LONG_PRESS_START_TIME = 600

function equal(value1?: string | number, value2?: string | number) {
  return String(value1) === String(value2)
}

// add num and avoid float number
function add(num1: number, num2: number) {
  const cardinal = 10 ** 10
  return Math.round((num1 + num2) * cardinal) / cardinal
}

const Stepper = ({
  style = {},
  className,
  theme,
  integer,
  disabled,
  allowEmpty,
  value,
  inputWidth,
  buttonSize,
  placeholder,
  disablePlus,
  disableMinus,
  disableInput,
  beforeChange,
  decimalLength,
  name = '',
  min = 1,
  max = Infinity,
  step = 1,
  defaultValue = 1,
  showPlus = true,
  showMinus = true,
  showInput = true,
  longPress = true,
  plus,
  blur,
  minus,
  focus,
  change,
  overlimit
}: StepperProps) => {
  const format = (value: string | number) => {
    if (allowEmpty && value === '') {
      return value
    }

    value = formatNumber(String(value), !integer)
    value = value === '' ? 0 : +value
    value = isNaN(value) ? +min : value
    value = Math.max(Math.min(+max, value), +min)

    // format decimal
    if (isDef(decimalLength)) {
      value = value.toFixed(+(decimalLength as number | string))
    }

    return value
  }
  let actionType: 'plus' | 'minus'
  const inputRef = useRef<HTMLInputElement>(null)
  const current = useRef(format(value ?? defaultValue))
  const [modelValue, setModelValue] = useState(format(value ?? defaultValue))

  const minusDisabled = disabled || disableMinus || current.current <= +min
  const plusDisabled = disabled || disablePlus || current.current >= +max
  const inputStyle = useMemo(
    () => ({
      width: addUnit(inputWidth),
      height: addUnit(buttonSize)
    }),
    [inputWidth, buttonSize]
  )
  const buttonStyle = useMemo(() => getSizeStyle(buttonSize), [buttonSize])
  const setCurrentValue = (value: number | string) => {
    current.current = value
    setModelValue(value)
    change && change(value, name)
  }
  const check = () => {
    const value = format(current.current)
    if (!equal(value, current.current)) {
      setCurrentValue(value)
    }
  }
  const setValue = (value: string | number) => {
    if (isDef(beforeChange)) {
      callInterceptor({
        args: [value],
        interceptor: beforeChange,
        done() {
          setCurrentValue(value)
        }
      })
    } else {
      setCurrentValue(value)
    }
  }
  const onChange = () => {
    if (
      (actionType === 'plus' && plusDisabled) ||
      (actionType === 'minus' && minusDisabled)
    ) {
      overlimit && overlimit(actionType)
      return
    }

    const diff = actionType === 'minus' ? -step : +step
    const value = format(add(+current.current, diff))

    setValue(value)
    if (actionType) {
      actionType === 'plus' ? plus && plus() : minus && minus()
    }
  }
  const onInput = (event: FormEvent) => {
    const input = event.target as HTMLInputElement
    const { value } = input

    let formatted = formatNumber(String(value), !integer)

    // limit max decimal length
    if (isDef(decimalLength) && formatted.includes('.')) {
      const pair = formatted.split('.')
      formatted = `${pair[0]}.${pair[1].slice(
        0,
        +(decimalLength as number | string)
      )}`
    }

    if (isDef(beforeChange)) {
      input.value = String(current.current)
    } else if (!equal(value, formatted)) {
      input.value = formatted
    }
    // perfer number type
    const isNumeric = formatted === String(+formatted)
    setValue(isNumeric ? +formatted : formatted)
  }
  const onFocus = (event: FocusEvent) => {
    // readonly not work in lagacy mobile safari
    if (disableInput) {
      inputRef.current?.blur()
    } else {
      focus && focus(event)
    }
  }
  const onBlur = (event: FocusEvent) => {
    const input = event.target as HTMLInputElement
    const value = format(input.value)
    input.value = String(value)
    setCurrentValue(value)
    blur && blur(event)
    resetScroll()
  }

  let isLongPress: boolean
  let longPressTimer: NodeJS.Timeout
  const longPressStep = () => {
    longPressTimer = setTimeout(() => {
      onChange()
      longPressStep()
    }, LONG_PRESS_INTERVAL)
  }

  const onTouchStart = () => {
    if (longPress) {
      isLongPress = false
      clearTimeout(longPressTimer)
      longPressTimer = setTimeout(() => {
        isLongPress = true
        onChange()
        longPressStep()
      }, LONG_PRESS_START_TIME)
    }
  }

  const onTouchEnd = (event: any) => {
    if (longPress) {
      clearTimeout(longPressTimer)
      if (isLongPress) {
        preventDefault(event)
      }
    }
  }

  const onMousedown = (event: MouseEvent) => {
    // fix mobile safari page scroll down issue
    // see: https://github.com/youzan/vant/issues/7690
    if (disableInput) {
      event.preventDefault()
    }
  }

  const createListeners = (type: 'plus' | 'minus') => ({
    onClick: (event: MouseEvent) => {
      // disable double tap scrolling on mobile safari
      event.preventDefault()
      actionType = type
      onChange()
    },
    onTouchStart: () => {
      actionType = type
      onTouchStart()
    },
    onTouchEnd,
    onTouchCancel: onTouchEnd
  })

  useWatch([max, min, integer, decimalLength], check)
  useWatch(modelValue, (value) => {
    if (!equal(value, current.current)) {
      setCurrentValue(format(value!))
    }
  })
  return (
    <div style={style} className={`${bem([theme])} ${className || ''}`}>
      {showMinus && (
        <button
          type='button'
          style={buttonStyle}
          className={bem('minus', { disabled: minusDisabled })}
          {...createListeners('minus')}
        />
      )}
      {showInput && (
        <input
          ref={inputRef}
          type={integer ? 'tel' : 'text'}
          role='spinbutton'
          className={bem('input')}
          value={current.current}
          style={inputStyle}
          disabled={disabled}
          readOnly={disableInput}
          // set keyboard in mordern browers
          inputMode={integer ? 'numeric' : 'decimal'}
          placeholder={placeholder}
          aria-valuemax={+max}
          aria-valuemin={+min}
          aria-valuenow={+current.current}
          onBlur={onBlur}
          // onInput={onInput}
          onChange={onInput}
          onFocus={onFocus}
          onMouseDown={onMousedown}
        />
      )}
      {showPlus && (
        <button
          type='button'
          style={buttonStyle}
          className={bem('plus', { disabled: plusDisabled })}
          {...createListeners('plus')}
        />
      )}
    </div>
  )
}
export default React.memo(Stepper)
