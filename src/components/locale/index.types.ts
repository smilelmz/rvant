/* eslint-disable @typescript-eslint/no-unused-vars */
export interface VanCalendar {
  end: string
  start: string
  title: string
  confirm: string
  startEnd: string
  weekdays: string[]
}

export interface VanCascader {
  select: string
}

export interface VanContactCard {
  addText: string
}

export interface VanContactList {
  addText: string
}

export interface VanPagination {
  prev: string
  next: string
}

export interface VanPullRefresh {
  pulling: string
  loosing: string
}

export interface VanSubmitBar {
  label: string
}

export interface VanCoupon {
  unlimited: string
}

export interface VanCouponCell {
  title: string
  tips: string
}

export interface VanCouponList {
  empty: string
  exchange: string
  close: string
  enable: string
  disabled: string
  placeholder: string
}

export interface VanAddressEdit {
  area: string
  postal: string
  areaEmpty: string
  addressEmpty: string
  postalEmpty: string
  defaultAddress: string
  telPlaceholder: string
  namePlaceholder: string
  areaPlaceholder: string
}

export interface VanAddressEditDetail {
  label: string
  placeholder: string
}

export interface VanAddressList {
  add: string
}

export interface LocaleType {
  name: string
  tel: string
  save: string
  confirm: string
  cancel: string
  delete: string
  complete: string
  loading: string
  telEmpty: string
  nameEmpty: string
  nameInvalid: string
  confirmDelete: string
  telInvalid: string
  vanCalendar: VanCalendar
  vanCascader: VanCascader
  vanContactCard: VanContactCard
  vanContactList: VanContactList
  vanPagination: VanPagination
  vanPullRefresh: VanPullRefresh
  vanSubmitBar: VanSubmitBar
  vanCoupon: VanCoupon
  vanCouponCell: VanCouponCell
  vanCouponList: VanCouponList
  vanAddressEdit: VanAddressEdit
  vanAddressEditDetail: VanAddressEditDetail
  vanAddressList: VanAddressList
}

export interface LocaleProviderProps {
  locale: LocaleType
  children?: React.ReactNode
  _ANT_MARK__?: string
}

export interface LocaleInterface {
  [key: string]: any
}

export interface LocaleReceiverProps {
  componentName?: string
  defaultLocale?: object | Function
  children: (
    locale: object,
    localeCode?: string,
    fullLocale?: object
  ) => React.ReactNode
}

export interface LocaleReceiverContext {
  antLocale?: LocaleInterface
}
