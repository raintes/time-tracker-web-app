import React from 'react'

export default function SideBar(props) {
  const { navigation } = props
  return (
    <div className='top-0 flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-gray-800 overflow-y-auto w-48 max-h-full h-screen'>
      <div className='flex items-center flex-shrink-0 px-4 space-y-5'>
        <span className='text-white font-bold'>Time Tracker App</span>
      </div>
      <div className='mt-10 flex-grow flex flex-col'>
        <nav className='flex-1  space-y-1' aria-label='Sidebar'>
          {navigation.map(item => (
            <a
              key={item.name}
              href={item.href}
              className='border-transparent text-white hover:bg-gray-900 flex items-center px-3 py-2 text-sm font-medium border-l-4'
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
