import React from 'react'
import { LocaleProviderProps } from './index.types'
import LocaleContext from './context'

export default class LocaleProvider extends React.Component<
  LocaleProviderProps,
  any
> {
  static defaultProps = {
    locale: {}
  }

  constructor(props: LocaleProviderProps) {
    super(props)
    changeConfirmLocale(props.locale && props.locale.Modal)

    devWarning(
      props._ANT_MARK__ === ANT_MARK,
      'LocaleProvider',
      '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale'
    )
  }

  componentDidMount() {
    changeConfirmLocale(this.props.locale && this.props.locale.Modal)
  }

  componentDidUpdate(prevProps: LocaleProviderProps) {
    const { locale } = this.props
    if (prevProps.locale !== locale) {
      changeConfirmLocale(locale && locale.Modal)
    }
  }

  componentWillUnmount() {
    changeConfirmLocale()
  }

  render() {
    const { locale, children } = this.props

    return (
      <LocaleContext.Provider value={{ ...locale, exist: true }}>
        {children}
      </LocaleContext.Provider>
    )
  }
}
