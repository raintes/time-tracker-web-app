import React from 'react'
import timeStoryset from '../../assets/images/time_storyset.png'

export default function NotLoggedInView() {
  return (
    <>
      <div className='p-10 h-auto max-h-ch'>
        <div className='flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
          <div className='my-12'>
            <img
              className='object-cover md:object-scale-down max-h-96 w-full'
              alt={timeStoryset}
              src={timeStoryset}
            />
          </div>

          <span className='text-2xl'>
            Time tracking for better work, not overwork
          </span>
          <p className='text-lg text-gray-500 mt-1'>
            Sign in to start tracking your time now!
          </p>
        </div>
      </div>
    </>
  )
}
