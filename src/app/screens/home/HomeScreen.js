import React, { useState, useRef } from 'react'
import { NavBarComponent, SideBarComponent } from 'app/components'
import { NotLoggedInView } from 'app/views'
import { NAVIGATION } from 'app/utils/enums/enums'

const navigation = [
  { name: 'TIME TRACKER', icon: null, href: NAVIGATION.HOME, selected: true },
  { name: 'REPORTS', icon: null, href: '', selected: false },
]

const useTimer = (initialState = 0) => {
  const [timer, setTimer] = useState(initialState)
  const [isActive, setIsActive] = useState(false)
  const countRef = useRef(null)

  const handleStart = () => {
    setIsActive(true)
    countRef.current = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)
  }

  const handleResume = () => {
    countRef.current = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)
  }

  const handleReset = () => {
    clearInterval(countRef.current)
    setIsActive(false)
    setTimer(0)
  }

  return {
    timer,
    isActive,
    handleStart,
    handleResume,
    handleReset,
  }
}

function HomeScreen() {
  const timer = useTimer(0)

  return (
    <>
      <div className='home-container h-screen bg-gray-50'>
        <div className='header'>
          <NavBarComponent timer={timer} />
        </div>
        <div className='sidebar'>
          <SideBarComponent {...{ navigation }} />
        </div>
        <div className='content'>
          <NotLoggedInView />
        </div>
      </div>
    </>
  )
}

export default HomeScreen
