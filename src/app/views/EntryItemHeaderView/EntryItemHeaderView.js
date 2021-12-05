import React from 'react'

export default function EnterItemHeaderView(props) {
  const { date } = props
  return (
    <>
      <div className='date-hours flex flex-row justify-between border px-4 py-1 bg-gray-200'>
        <div>
          <span className='text-base text-gray-500'>{date}</span>
        </div>
        <div className='flex flex-row items-center'>
          <span className='text-base text-gray-500 mr-2'>Total: </span>
          <span className='sm:text-lg font-semibold flex'> 00:00:00</span>
        </div>
      </div>
    </>
  )
}
