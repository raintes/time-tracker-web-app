import React from 'react'

/*
Passes each item in the array to the Boolean object.
Checks if the item is truthy, if it is then we keep.
*/
function setClassNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SideBar(props) {
  return (
    <div className='top-0 flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-gray-800 overflow-y-auto w-48 max-h-full h-screen'>
      <div className='flex items-center flex-shrink-0 px-4 space-y-5'>
        <span className='text-white font-bold'>Time Tracker App</span>
      </div>
      <div className='mt-10 flex-grow flex flex-col'>
        <nav className='flex-1  space-y-1' aria-label='Sidebar'>
          {props.navigation.map(item => (
            <a
              key={item.name}
              href={item.href}
              className={setClassNames(
                item.current
                  ? 'bg-blue-50 border-blue-600 text-blue-600'
                  : 'border-transparent text-white hover:bg-gray-900 ',
                'group flex items-center px-3 py-2 text-sm font-medium border-l-4'
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
