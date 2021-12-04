import React from 'react'

export default function Timer(props) {
  const formatTime = timer => {
    const getSeconds = `0${timer % 60}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return timer ? `${getHours}:${getMinutes}:${getSeconds}` : '00:00:00'
  }

  return (
    <>
      <span className='sm:text-xl font-semibold flex'>
        {formatTime(props.time)}
      </span>
    </>
  )
}
