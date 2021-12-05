import React from 'react'

export default function NavBar(props) {
  const { justifyCenter, justifyEnd, justifyStart, element } = props
  return (
    <>
      <div className='static border-b border-gray-200mx-auto px-4 sm:px-6 lg:px-8 z-50 bg-white'>
        {justifyEnd && <div className='flex justify-end h-16'>{element}</div>}
        {justifyCenter && (
          <div className='flex justify-center h-16'>{element}</div>
        )}
        {justifyStart && (
          <div className='flex justify-start h-16'>{element}</div>
        )}
      </div>
    </>
  )
}
