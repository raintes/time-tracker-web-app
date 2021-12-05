import { TimerComponent } from 'app/components'
import React from 'react'

export default function TimerView(props) {
  return (
    <>
      <div className='w-screen flex items-center'>
        <div className='w-full flex items-center ml-48 h-20'>
          <input
            type='text'
            name='description'
            id='description'
            className='focus:shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-base border-0 rounded-md'
            placeholder='What are you working on?'
          />
          <div className='mx-10'>
            <span className='font-semibold hover:underline cursor-pointer'>
              Project
            </span>
          </div>
          <div>
            <TimerComponent time={props.timer.timer} />
          </div>
          <div className='ml-10'>
            {!props.timer.isActive ? (
              <button
                onClick={props.timer.handleStart}
                type='button'
                className={
                  'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none'
                }
              >
                <span>START</span>
              </button>
            ) : (
              <button
                onClick={props.timer.handleReset}
                type='button'
                className={
                  'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none'
                }
              >
                <span>STOP</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
