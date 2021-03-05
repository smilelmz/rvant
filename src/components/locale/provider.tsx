/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useState, useEffect, useContext } from 'react'
import { deepAssign } from '../utils/deep-assign'
import defaultMessages from './lang/zh-CN'

type Message = Record<string, any>
type Messages = Record<string, Message>
type MessagesFunc = () => Message
interface LocaleProps {
  lang?: string
  locale?: Message
  children: React.ReactNode | React.ReactNode[]
}
const Context = createContext({
  lang: 'zh-CN',
  messages: {
    'zh-CN': defaultMessages
  } as Messages,
  getMessages: (() => defaultMessages) as MessagesFunc,
  addMessages: (newLang: string, newLocale?: Message) => {}
})

export const LocaleProvider = ({ lang, locale, children }: LocaleProps) => {
  const [currentLang, setCurrentLang] = useState('zh-CN')
  const [messages, setMessages] = useState<Messages>({
    'zh-CN': defaultMessages
  })
  useEffect(() => {
    if (lang && locale) {
      setCurrentLang(lang)
      const newMessages = deepAssign(messages, { [lang]: locale })
      setMessages(newMessages)
    }
  })
  const getMessages: MessagesFunc = () => messages[currentLang]
  const addMessages = (newLang: string, newLocale?: Message) => {
    const newMessages = deepAssign(messages, { [newLang]: newLocale })
    setMessages(newMessages)
    setCurrentLang(newLang)
  }
  return (
    <Context.Provider
      value={{
        lang: currentLang,
        messages,
        getMessages,
        addMessages
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useI18n = () => {
  const { lang, getMessages, addMessages } = useContext(Context)
  return { lang, messages: getMessages(), setI18n: addMessages }
}
