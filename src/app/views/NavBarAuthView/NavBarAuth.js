import React from 'react'

export default function NavBarAuthView(props) {
  return (
    <>
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
    </>
  )
}
