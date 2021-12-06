import {
  convertSecondsToHour,
  convertToSeconds,
} from 'app/utils/helpers/duration'
import React from 'react'

export default function EnterItemHeaderView(props) {
  const { date, entries } = props

  const getTotalDayHours = () => {
    const dayHour = entries
      .map(item => convertToSeconds(item.hours))
      .reduce((prev, next) => prev + next)
    return convertSecondsToHour(dayHour)
  }

  return (
    <>
      <div className='date-hours flex flex-row justify-between border px-4 py-1 bg-gray-200'>
        <div>
          <span className='text-base text-gray-500'>{date}</span>
        </div>
        <div className='flex flex-row items-center'>
          <span className='text-base text-gray-500 mr-2'>Total: </span>
          <span className='sm:text-lg font-semibold flex'>
            {' '}
            {getTotalDayHours()}
          </span>
        </div>
      </div>
    </>
  )
}
