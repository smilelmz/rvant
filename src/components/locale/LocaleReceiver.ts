import React from 'react'
import { LocaleInterface, LocaleReceiverProps, LocaleType } from './index.types'
import LocaleContext from './context'

export default class LocaleReceiver extends React.Component<
  LocaleReceiverProps
> {
  static defaultProps = {
    componentName: 'global'
  }

  static contextType = LocaleContext

  getLocale() {
    const { componentName, defaultLocale } = this.props
    const locale: object | Function =
      defaultLocale ||
      (defaultLocaleData as LocaleInterface)[componentName || 'global']
    const antLocale = this.context
    const localeFromContext =
      componentName && antLocale ? antLocale[componentName] : {}
    return {
      ...(typeof locale === 'function' ? locale() : locale),
      ...(localeFromContext || {})
    }
  }

  getLocaleCode() {
    const antLocale = this.context
    const localeCode = antLocale && antLocale.locale
    // Had use LocaleProvide but didn't set locale
    if (antLocale && antLocale.exist && !localeCode) {
      return defaultLocaleData.locale
    }
    return localeCode
  }

  render() {
    return this.props.children(
      this.getLocale(),
      this.getLocaleCode(),
      this.context
    )
  }
}

type LocaleComponent = keyof LocaleType
export function useLocaleReceiver<T extends LocaleComponent>(
  componentName: T,
  defaultLocale?: LocaleType[T] | Function
): [LocaleType[T]] {
  const antLocale = React.useContext(LocaleContext)

  const componentLocale = React.useMemo(() => {
    const locale = defaultLocale || defaultLocaleData[componentName || 'global']
    const localeFromContext =
      componentName && antLocale ? antLocale[componentName] : {}

    return {
      ...(typeof locale === 'function' ? (locale as Function)() : locale),
      ...(localeFromContext || {})
    }
  }, [componentName, defaultLocale, antLocale])

  return [componentLocale]
}
