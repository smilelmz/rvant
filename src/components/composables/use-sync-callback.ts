import { useEffect, useState, useCallback } from 'react'

export const useSyncCallback = (callback) => {
  const [proxyState, setProxyState] = useState({ current: false })

  const Func = useCallback(() => {
    setProxyState({ current: true })
  }, [proxyState])

  useEffect(() => {
    if (proxyState.current === true) setProxyState({ current: false })
  }, [proxyState])

  useEffect(() => {
    proxyState.current && callback()
  })

  return Func
}
