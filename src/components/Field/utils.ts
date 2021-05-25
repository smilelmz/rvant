import { CompositionEvent, HTMLAttributes, InputHTMLAttributes } from 'react'
import { isFunction, isObject, isPromise, trigger } from '../utils'
import {
  FieldAutosizeConfig,
  FieldModeType,
  FieldRule,
  FieldType
} from './index.types'

function isEmptyValue(value: unknown) {
  if (Array.isArray(value)) {
    return !value.length
  }
  if (value === 0) {
    return false
  }
  return !value
}

export function runSyncRule(value: unknown, rule: FieldRule) {
  if (rule.required && isEmptyValue(value)) {
    return false
  }
  if (rule.pattern && !rule.pattern.test(String(value))) {
    return false
  }
  return true
}

export function runRuleValidator(value: unknown, rule: FieldRule) {
  return new Promise((resolve) => {
    const returnVal = rule.validator!(value, rule)

    if (isPromise(returnVal)) {
      return returnVal.then(resolve)
    }

    resolve(returnVal)
  })
}

export function getRuleMessage(value: unknown, rule: FieldRule) {
  const { message } = rule

  if (isFunction(message)) {
    const showMsg = message as (value: any, rule: FieldRule) => string
    return showMsg(value, rule)
  }
  return (message as string) || ''
}

export function startComposing(
  event: CompositionEvent<HTMLTextAreaElement & HTMLInputElement>
) {
  event.target!.composing = true
}

export function endComposing(event: any) {
  const { target } = event
  if (target!.composing) {
    target!.composing = false
    trigger(target as Element, 'input')
  }
}

export function resizeTextarea(
  input: HTMLInputElement,
  autosize: true | FieldAutosizeConfig
) {
  input.style.height = 'auto'

  let height = input.scrollHeight
  if (isObject(autosize)) {
    const { maxHeight, minHeight } = autosize
    if (maxHeight !== undefined) {
      height = Math.min(height, maxHeight)
    }
    if (minHeight !== undefined) {
      height = Math.max(height, minHeight)
    }
  }

  if (height) {
    input.style.height = `${height}px`
  }
}

export function mapInputType(
  type: FieldType
): {
  type: InputHTMLAttributes<FieldType>['type']
  inputMode?: HTMLAttributes<FieldModeType>['inputMode']
} {
  // type="number" is weird in iOS, and can't prevent dot in Android
  // so use inputmode to set keyboard in modern browsers
  if (type === 'number') {
    return {
      type: 'text',
      inputMode: 'decimal'
    }
  }

  if (type === 'digit') {
    return {
      type: 'tel',
      inputMode: 'numeric'
    }
  }

  return { type }
}
