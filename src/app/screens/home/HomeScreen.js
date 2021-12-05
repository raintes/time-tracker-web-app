import React, { useState, useRef } from 'react'
import { NavBarComponent, SideBarComponent } from 'app/components'

import {
  NavBarAuthView,
  NotLoggedInView,
  TimeEmptyStateView,
  TimerView,
  TimeWeeklyView,
} from 'app/views'

import { NAVIGATION } from 'app/utils/enums/enums'
import { Login, Signup } from '..'

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

const useAuthModals = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)

  const handleShowLogin = () => {
    setShowSignup(false)
    setShowLogin(true)
  }

  const handleHideLogin = () => {
    setShowLogin(false)
  }

  const handleShowSignup = () => {
    setShowLogin(false)
    setShowSignup(true)
  }

  const handlehideSignup = () => {
    setShowSignup(false)
  }

  return {
    showLogin,
    showSignup,
    handleShowLogin,
    handleHideLogin,
    handleShowSignup,
    handlehideSignup,
  }
}

const useAuth = (initialState = false) => {
  const [isLoggedIn, setIsLoggedIn] = useState(initialState)

  return {
    isLoggedIn,
    setIsLoggedIn,
  }
}

const useTimeTrack = () => {
  const [timeTracks, setTimeTracks] = useState([])

  return {
    timeTracks,
    setTimeTracks,
  }
}

export default function HomeScreen() {
  const timer = useTimer(0)
  const auth = useAuthModals()
  const authenticated = !useAuth()
  const tracks = useTimeTrack()

  return (
    <>
      {auth.showLogin && <Login auth={auth} />}
      {auth.showSignup && <Signup auth={auth} />}
      <div className='flex flex-row'>
        <div className='sidebar flex'>
          <SideBarComponent {...{ navigation }} />
        </div>
        <div className='home-container h-screen bg-gray-50 min-w-0'>
          <div className='header'>
            <NavBarComponent
              justifyEnd={true}
              element={
                authenticated ? (
                  <NavBarAuthView modal={auth} />
                ) : (
                  <TimerView timer={timer} />
                )
              }
              timer={timer}
            />
          </div>
          {authenticated ? (
            <div className='content'>
              <NotLoggedInView />
            </div>
          ) : tracks.timeTracks.length ? (
            <TimeWeeklyView />
          ) : (
            <TimeEmptyStateView />
          )}
        </div>
      </div>
    </>
  )
}
