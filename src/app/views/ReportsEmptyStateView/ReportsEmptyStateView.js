import React from 'react'
import empty from '../../assets/images/empty.png'

export default function ReportsEmptyStateView() {
  return (
    <>
      <div className='p-10 h-auto max-h-ch'>
        <div className='flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
          <div className='my-12'>
            <img
              className='object-cover md:object-scale-down max-h-96 w-full'
              alt={empty}
              src={empty}
            />
          </div>

          <span className='text-2xl'>There's no data :(</span>
          <p className='text-lg text-gray-500 mt-1'>
            Start tracking to know which project you are productive with
          </p>
        </div>
      </div>
    </>
  )
}
