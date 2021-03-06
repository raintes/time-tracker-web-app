import React, { useState, useEffect } from 'react'
import { format } from 'date-fns'

import { Login, Signup } from '..'

import { NavBarComponent } from 'app/components'
import { EntryEmptyStateView, TimerView, EntryWeeklyView } from 'app/views'
import { weekEntries } from 'app/mock-data/entry.list'

import { getWeekOfYear } from 'app/utils/helpers/dates'
import { localStorageKey } from 'app/utils/constants/constants'
import { getISOWeek, getIsThisWeek } from 'app/utils/helpers/dates'

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

  const handleHideSignup = () => {
    setShowSignup(false)
  }

  return {
    showLogin,
    showSignup,
    handleShowLogin,
    handleHideLogin,
    handleShowSignup,
    handleHideSignup,
  }
}

const getWeekName = (week, year = 2021) => {
  const weeks = getISOWeek(week, year)
  const firstDayOfWeek = weeks[0]
  const lastDayOfWeek = weeks[weeks.length - 1]

  if (getIsThisWeek(firstDayOfWeek)) {
    return 'This week'
  } else {
    return (
      format(new Date(firstDayOfWeek), 'MMM dd') +
      ' - ' +
      format(new Date(lastDayOfWeek), 'MMM dd')
    )
  }
}

export default function HomeScreen() {
  const token = localStorage.getItem(localStorageKey.TOKEN)

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [weeks, setWeeks] = useState({}) // use `weekEntries` as initial state to use mock data else `{}`
  const auth = useAuthModals()

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [token])

  useEffect(() => {
    localStorage.setItem(localStorageKey.ENTRIES, JSON.stringify(weeks))
  }, [weeks])

  // Group time entries by week of the year
  const addWeekGroup = timeEntry => {
    const weekNumber = getWeekOfYear(new Date(timeEntry.modifiedOn)) - 1
    const dateString = format(new Date(timeEntry.modifiedOn), 'MMMM dd yyyy')

    /**
    Checks if `weekNumber` is existing on the object along with
    the `dateString` that is used as a key for the list of entries.
    The expected output of `weeks` is an array of
    `n: { 'yyyy-mm-dd' : [array of entries]} `
    where n is the week number of the year.
    **/
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
        <div className='home-container h-screen bg-gray-50 min-w-0'>
          <div className='header'>
            <NavBarComponent
              justifyEnd={true}
              element={
                <TimerView
                  authenticated={isLoggedIn}
                  addTimeEntry={addTimeEntry}
                  modal={auth}
                  removeAuth={setIsLoggedIn}
                />
              }
            />
          </div>
          {Object.values(weeks).length ? (
            <>
              <div className='overflow-y-scroll h-screen'>
                {Object.entries(weeks)
                  .reverse()
                  .map(keyData => {
                    const weekHeader = getWeekName(
                      keyData[0], // Week of the year
                      new Date(Object.keys(keyData[1])[0]).getFullYear() // Get sample data from keys (which uses date as key) to get year
                    )
                    return (
                      <>
                        <EntryWeeklyView
                          weekHeader={weekHeader}
                          data={keyData[1]}
                        />
                      </>
                    )
                  })}
                {/* Hackish way to add +5rem on h-screen's 100vh to show bottom items*/}
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
