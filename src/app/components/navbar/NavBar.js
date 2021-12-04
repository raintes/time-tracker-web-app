import React from 'react'
import { ButtonComponent } from '..'

function NavBar() {
  return (
    <div className='static border-b border-gray-200mx-auto px-4 sm:px-6 lg:px-8 z-50 bg-white'>
      <div className='flex justify-end h-16'>
        <div className='flex items-center'>
          <div className='flex-shrink-0 space-x-5'>
            {ButtonComponent({ text: 'Login', style: 'white' })}
            {ButtonComponent({ text: 'Sign up', style: 'primary' })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
