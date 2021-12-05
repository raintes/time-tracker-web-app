import React from 'react'
import timeTrack from '../../assets/images/time_track.png'

export default function TimeEmptyStateView() {
  return (
    <>
      <div className='p-10 h-auto max-h-ch'>
        <div className='flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
          <div className='my-12'>
            <img
              className='object-cover md:object-scale-down max-h-96 w-full'
              alt={timeTrack}
              src={timeTrack}
            />
          </div>

          <span className='text-2xl'>Let's start tracking!</span>
          <p className='text-lg text-gray-500 mt-1'>
            Spot your most productive hours
          </p>
        </div>
      </div>
    </>
  )
}
