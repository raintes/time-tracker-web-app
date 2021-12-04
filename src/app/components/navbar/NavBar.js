import React from 'react'
import { ButtonComponent, TimerComponent } from '..'

export default function NavBar(props) {
  return (
    <>
      <div className='static border-b border-gray-200mx-auto px-4 sm:px-6 lg:px-8 z-50 bg-white'>
        {/* Not logged in state */}
        {/* <div className='flex justify-end h-16'>
          <div className='flex items-center'>
            <div className='flex-shrink-0 space-x-5'>
              <button
                onClick={props.action}
                type='button'
                className={
                  'inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                }
              >
                <span>Login</span>
              </button>
              <button
                onClick={props.action}
                type='button'
                className={
                  'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                }
              >
                <span>Sign up</span>
              </button>
            </div>
          </div>
        </div> */}
        {/*End of not logged in state */}
        <div className='flex items-center ml-48 h-20'>
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
