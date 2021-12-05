import React from 'react'

export default function NavBar(props) {
  return (
    <>
      <div className='static border-b border-gray-200mx-auto px-4 sm:px-6 lg:px-8 z-50 bg-white'>
        {props.justifyEnd && (
          <div className='flex justify-end h-16'>{props.element}</div>
        )}
        {props.justifyCenter && (
          <div className='flex justify-center h-16'>{props.element}</div>
        )}
        {props.justifyStart && (
          <div className='flex justify-start h-16'>{props.element}</div>
        )}
      </div>
    </>
  )
}
