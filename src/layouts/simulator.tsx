/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from 'react'
import './simulator.scss'

interface IProps {
  url?: string
}

const Simulator = ({ url = '' }: IProps) => {
  const [height, setHeight] = useState(window.innerHeight - 120)

  const onWindowResize = () => {
    setHeight(window.innerHeight - 120)
  }

  useEffect(() => {
    window.addEventListener('resize', onWindowResize)
    return () => {
      window.removeEventListener('resize', onWindowResize)
    }
  }, [])

  return (
    <div className='doc_simulator'>
      <iframe src={url} style={{ height }} />
    </div>
  )
}

export default React.memo(Simulator)
