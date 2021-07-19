import React, {
  FocusEvent,
  FormEvent,
  KeyboardEvent,
  MouseEvent,
  TouchEvent,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'
import {
  FieldFormatTrigger,
  FieldHandle,
  FieldProps,
  FieldRule,
  FieldValidateError,
  FieldValidateTrigger
} from './index.types'
import {
  addUnit,
  createNamespace,
  formatNumber,
  isDef,
  isElement,
  preventDefault,
  resetScroll
} from '../utils'
import {
  endComposing,
  getRuleMessage,
  mapInputType,
  resizeTextarea,
  runRuleValidator,
  runSyncRule,
  startComposing
} from './utils'
import Icon from '../Icon'
import { useWatch } from '../composables'
import Cell from '../Cell'
import { FormContext, FieldContext } from '../context'

const [bem] = createNamespace('field')

const Field = (fieldProps: FieldProps, ref: React.Ref<FieldHandle>) => {
  const props: FieldProps = {
    value: '',
    center: false,
    isLink: false,
    border: true,
    required: false,
    clickable: false,
    error: null,
    disabled: null,
    readonly: null,
    clearIcon: 'clear',
    clearTrigger: 'focus',
    formatTrigger: 'onChange',
    type: 'text',
    colon: null,
    ...fieldProps
  }
  const { style = {}, className = '', labelClass = '' } = props
  const [focused, setFocused] = useState(false)
  const [validateFailed, setValidateFailed] = useState(false)
  const [validateMessage, setValidateMessage] = useState('')

  const inputRef = useRef<HTMLInputElement & HTMLTextAreaElement>()
  const childFieldValue = useRef<unknown>()

  const parent = useContext(FormContext)

  const getModelValue = () => String(props.value ?? '')

  const getProp = (key: keyof typeof props) => {
    if (isDef(props[key])) {
      return props[key]
    }
    if (parent && isDef(parent[key])) {
      return parent[key]
    }
  }

  const showClear = () => {
    const readonly = getProp('readonly')

    if (props.clearable && !readonly) {
      const hasValue = getModelValue() !== ''
      const trigger =
        props.clearTrigger === 'always' ||
        (props.clearTrigger === 'focus' && focused)

      return hasValue && trigger
    }
    return false
  }

  const formValue = () => {
    if (childFieldValue.current && props.input) {
      return childFieldValue.current
    }
    return props.value
  }

  const runRules = (rules: FieldRule[]) =>
    rules.reduce(
      (promise, rule) =>
        promise.then(() => {
          if (validateFailed) {
            return
          }

          let value = formValue()

          if (rule.formatter) {
            value = rule.formatter(value, rule)
          }

          if (!runSyncRule(value, rule)) {
            setValidateFailed(true)
            setValidateMessage(getRuleMessage(value, rule))
            return
          }

          if (rule.validator) {
            return runRuleValidator(value, rule).then((result) => {
              if (result && typeof result === 'string') {
                setValidateFailed(true)
                setValidateMessage(result)
              } else if (result === false) {
                setValidateFailed(true)
                setValidateMessage(getRuleMessage(value, rule))
              }
            })
          }
        }),
      Promise.resolve()
    )

  const resetValidation = () => {
    if (validateFailed) {
      setValidateFailed(false)
      setValidateMessage('')
    }
  }

  const validate = (rules = props.rules) =>
    new Promise<FieldValidateError | void>((resolve) => {
      resetValidation()
      if (rules) {
        runRules(rules).then(() => {
          if (validateFailed) {
            resolve({
              name: props.name,
              message: validateMessage
            })
          } else {
            resolve()
          }
        })
      } else {
        resolve()
      }
    })

  const validateWithTrigger = (trigger: FieldValidateTrigger) => {
    if (parent && props.rules) {
      const defaultTrigger = parent.validateTrigger === trigger
      const rules = props.rules.filter((rule) => {
        if (rule.trigger) {
          return rule.trigger === trigger
        }

        return defaultTrigger
      })

      if (rules.length) {
        validate(rules)
      }
    }
  }

  const limitValueLength = (value: string) => {
    const { maxlength } = props
    if (isDef(maxlength) && value.length > maxlength) {
      const modelValue = getModelValue()
      if (modelValue && modelValue.length === +maxlength) {
        return modelValue
      }
      return value.slice(0, +maxlength)
    }
    return value
  }

  const updateValue = (
    value: string,
    trigger: FieldFormatTrigger = 'onChange'
  ) => {
    value = limitValueLength(value)

    if (props.type === 'number' || props.type === 'digit') {
      const isNumber = props.type === 'number'
      value = formatNumber(value, isNumber, isNumber)
    }

    if (props.formatter && trigger === props.formatTrigger) {
      value = props.formatter(value)
    }

    if (inputRef.current && inputRef.current.value !== value) {
      inputRef.current.value = value
    }

    if (value !== props.value) {
      props.change && props.change(value)
    }
  }

  const onInput = (event: FormEvent) => {
    // skip update value when composing
    if (!event.target!.composing) {
      updateValue((event.target as HTMLInputElement).value)
    }
  }

  const blur = () => inputRef.current?.blur()
  const focus = () => inputRef.current?.focus()

  const onFocus = (event: FocusEvent) => {
    setFocused(true)
    props.focus && props.focus(event)

    // readonly not work in legacy mobile safari
    const readonly = getProp('readonly')
    if (readonly) {
      blur()
    }
  }

  const onBlur = (event: FocusEvent) => {
    setFocused(false)
    updateValue(getModelValue(), 'onBlur')
    props.blur && props.blur(event)
    validateWithTrigger('onBlur')
    resetScroll()
  }

  const onClickInput = (event: MouseEvent) =>
    props.clickInput && props.clickInput(event)

  const onClickLeftIcon = (event: MouseEvent) =>
    props.clickLeftIcon && props.clickLeftIcon(event)

  const onClickRightIcon = (event: MouseEvent) =>
    props.clickRightIcon && props.clickRightIcon(event)

  const onClear = (event: TouchEvent) => {
    preventDefault(event)
    props.change && props.change('')
    props.clear && props.clear(event)
  }

  const showError = () => {
    if (typeof props.error === 'boolean') {
      return props.error
    }
    if (parent && parent.showError && validateFailed) {
      return true
    }
  }

  const labelStyle = () => {
    const labelWidth = getProp('labelWidth')
    if (labelWidth) {
      return { width: addUnit(labelWidth) }
    }
  }

  const onKeypress = (event: KeyboardEvent) => {
    const ENTER_CODE = 13

    if (event.keyCode === ENTER_CODE) {
      const submitOnEnter = parent && parent.submitOnEnter
      if (!submitOnEnter && props.type !== 'textarea') {
        preventDefault(event)
      }

      // trigger blur after click keyboard search button
      if (props.type === 'search') {
        blur()
      }
    }

    props.keypress && props.keypress(event)
  }

  const adjustTextareaSize = () => {
    const input = inputRef.current
    if (props.type === 'textarea' && props.autosize && input) {
      resizeTextarea(input, props.autosize)
    }
  }

  const renderInput = () => {
    const inputAlign = getProp('inputAlign')

    if (props.input) {
      return (
        <div
          className={bem('control', [inputAlign, 'custom'])}
          onClick={onClickInput}
        >
          {props.input}
        </div>
      )
    }
    const inputAttrs = {
      ref: inputRef,
      name: props.name,
      rows: props.rows !== undefined ? +props.rows : undefined,
      className: bem('control', inputAlign),
      value: props.value,
      disabled: getProp('disabled'),
      readOnly: getProp('readonly'),
      autoFocus: props.autofocus,
      placeholder: props.placeholder,
      autoComplete: props.autocomplete,
      onBlur,
      onFocus,
      onInput,
      onClick: onClickInput,
      onChange: endComposing,
      onKeyPress: onKeypress,
      onCompositionEnd: endComposing,
      onCompositionStart: startComposing
    }

    if (props.type === 'textarea') {
      return <textarea {...inputAttrs} />
    }

    return <input {...mapInputType(props.type)} {...inputAttrs} />
  }

  const renderLeftIcon = () => {
    if (props.leftIcon) {
      return (
        <div className={bem('left-icon')} onClick={onClickLeftIcon}>
          {isElement(props.leftIcon) ? (
            props.leftIcon
          ) : (
            <Icon
              name={props.leftIcon as string}
              classPrefix={props.iconPrefix}
            />
          )}
        </div>
      )
    }
  }

  const renderRightIcon = () => {
    if (props.rightIcon) {
      return (
        <div className={bem('right-icon')} onClick={onClickRightIcon}>
          {isElement(props.rightIcon) ? (
            props.rightIcon
          ) : (
            <Icon
              name={props.rightIcon as string}
              classPrefix={props.iconPrefix}
            />
          )}
        </div>
      )
    }
  }

  const renderWordLimit = () => {
    if (props.showWordLimit && props.maxlength) {
      const count = getModelValue().length
      return (
        <div className={bem('word-limit')}>
          <span className={bem('word-num')}>{count}</span>/{props.maxlength}
        </div>
      )
    }
  }

  const renderMessage = () => {
    if (parent && parent.showErrorMessage === false) {
      return
    }
    const message = props.errorMessage || validateMessage
    if (message) {
      const errorMessageAlign = getProp('errorMessageAlign')
      return (
        <div className={bem('error-message', errorMessageAlign)}>{message}</div>
      )
    }
  }

  const renderLabel = () => {
    const colon = getProp('colon') ? ':' : ''

    if (isElement(props.label)) {
      return [props.label, colon]
    }
    if (props.label) {
      return <span>{props.label + colon}</span>
    }
  }

  useImperativeHandle(ref, () => ({
    blur,
    focus,
    validate,
    formValue,
    resetValidation
  }))

  useWatch(props.value, () => {
    updateValue(getModelValue())
    resetValidation()
    validateWithTrigger('onChange')
    adjustTextareaSize()
  })

  useEffect(() => {
    updateValue(getModelValue(), props.formatTrigger)
    adjustTextareaSize()
  }, [])

  const labelAlign = getProp('labelAlign')
  return (
    <FieldContext.Provider
      value={{
        childFieldValue,
        resetValidation,
        validateWithTrigger
      }}
    >
      <Cell
        icon={renderLeftIcon() || null}
        title={renderLabel() || null}
        extra={props.extra}
        size={props.size}
        className={`${bem({
          error: showError(),
          disabled: getProp('disabled'),
          [`label-${getProp('labelAlign')}`]: getProp('labelAlign'),
          'min-height': props.type === 'textarea' && !props.autosize
        })} ${className}`}
        style={style}
        center={props.center}
        border={props.border}
        isLink={props.isLink}
        required={props.required}
        clickable={props.clickable}
        titleStyle={labelStyle()}
        valueClass={bem('value')}
        titleClass={`${bem('label', labelAlign)} ${labelClass}`}
        arrowDirection={props.arrowDirection}
        click={props.click}
      >
        <div className={bem('body')}>
          {renderInput()}
          {showClear() && (
            <Icon
              name={props.clearIcon}
              className={bem('clear')}
              touchstart={onClear}
            />
          )}
          {renderRightIcon()}
          {props.button && <div className={bem('button')}>{props.button}</div>}
        </div>
        {renderWordLimit()}
        {renderMessage()}
      </Cell>
    </FieldContext.Provider>
  )
}
export default React.memo(React.forwardRef(Field))
