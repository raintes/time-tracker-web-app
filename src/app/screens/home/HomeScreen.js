import React, { useState } from 'react'
import { NavBarComponent, SideBarComponent } from 'app/components'
import { format } from 'date-fns'

import {
  NavBarAuthView,
  NotLoggedInView,
  EntryEmptyStateView,
  TimerView,
  EntryWeeklyView,
} from 'app/views'

import { navigation } from 'app/utils/constants/constants'
import { Login, Signup } from '..'
import { getWeekOfYear } from 'app/utils/helpers/dates'
import { weekEntries } from 'app/mock-data/entry.list'

// Handle Login and Signup screens to display as modal-like view
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

export default function HomeScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [weeks, setWeeks] = useState(weekEntries) // add 'weekEntries' as initial state to use mock data
  const auth = useAuthModals()

  // Group time entries by week of the year
  const addWeekGroup = timeEntry => {
    const weekNumber = getWeekOfYear(new Date(timeEntry.modifiedOn))
    const dateString = format(new Date(timeEntry.modifiedOn), 'MMMM dd yyyy')

    // Checks if `weekNumber` is existing on the object along with
    // the `dateString` that is used as a key for the list of entries
    // The expected output of `weeks` is an array of
    // `n: { 'yyyy-mm-dd' : [array of entries]} `
    // where n is the week number of the year.
    if (weeks[weekNumber] && weeks[weekNumber][dateString]) {
      setWeeks({
        ...weeks,
        [weekNumber]: {
          ...weeks[weekNumber],
          [dateString]: [...weeks[weekNumber][dateString], timeEntry],
        },
      })
    } else {
      setWeeks({
        ...weeks,
        [weekNumber]: {
          [dateString]: [timeEntry],
        },
      })
    }
  }

  const addTimeEntry = object => {
    addWeekGroup(object)
  }

  return (
    <>
      {auth.showLogin && <Login auth={auth} />}
      {auth.showSignup && <Signup auth={auth} />}

      <div className='flex flex-row overflow-hidden'>
        <div className='sidebar flex overflow-hidden'>
          <SideBarComponent {...{ navigation }} />
        </div>
        <div className='home-container h-screen bg-gray-50 min-w-0'>
          <div className='header'>
            <NavBarComponent
              justifyEnd={true}
              element={
                isLoggedIn ? (
                  <NavBarAuthView modal={auth} />
                ) : (
                  <TimerView addTimeEntry={addTimeEntry} />
                )
              }
            />
          </div>
          {isLoggedIn ? (
            <div className='content'>
              <NotLoggedInView />
            </div>
          ) : Object.values(weeks).length ? (
            <>
              <div className='overflow-y-scroll h-screen'>
                {Object.values(weeks).map(keyData => {
                  return (
                    <>
                      <EntryWeeklyView data={keyData} />
                      {/* Hackish way to add +5rem on h-screen's 100vh to show bottom items*/}
                    </>
                  )
                })}
                <div className='h-20'></div>
              </div>
            </>
          ) : (
            <>
              <EntryEmptyStateView />
            </>
          )}
        </div>
      </div>
    </>
  )
}
