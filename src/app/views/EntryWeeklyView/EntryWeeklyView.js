import React, { useState } from 'react'
import { EntryItemHeaderView, EntryItemView } from '..'
import {
  convertSecondsToHour,
  convertToSeconds,
} from 'app/utils/helpers/duration'

export default function EntryWeeklyView(props) {
  const { data } = props

  const getTotalWeekHours = () => {
    const weekHour = Object.values(data).map(entry => {
      const dayHour = entry
        .map(item => convertToSeconds(item.hours))
        .reduce((prev, next) => prev + next)
      return dayHour
    })
    return convertSecondsToHour(weekHour.reduce((prev, next) => prev + next))
  }

  const renderEntries = () => {
    // Use entries to get key, value and use key as header
    // entry[0] would contain the date set as key
    return Object.entries(data).map(entry => {
      return (
        <>
          <div className='mt-4 border'>
            <EntryItemHeaderView date={entry[0]} />
            {entry[1].map(timeEntries => {
              return (
                <>
                  <div className='border-2'>
                    <EntryItemView entry={timeEntries} />
                  </div>
                </>
              )
            })}
          </div>
        </>
      )
    })
  }

  return (
    <>
      <div className='px-10 py-7'>
        <div className='week-header flex flex-row justify-between'>
          <div>
            <span className='text-base'>This Week</span>
          </div>
          <div className='flex flex-row items-center'>
            <span className='text-base text-gray-500 mr-2'>Week total: </span>
            <span className='sm:text-lg font-semibold flex'>
              {getTotalWeekHours()}
            </span>
          </div>
        </div>

        <div className='week-container mt-4'>{renderEntries()}</div>
      </div>
    </>
  )
}
