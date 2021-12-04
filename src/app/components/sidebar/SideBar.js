import React from 'react'

/*
Passes each item in the array to the Boolean object.
Checks if the item is truthy, if it is then we keep.
*/
function setClassNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function SideBar(props) {
  return (
    <div className='fixed z-20 top-0 flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto w-48 max-h-full h-screen'>
      <div className='flex items-center flex-shrink-0 px-4 space-y-5'>
        Time Tracker App
      </div>

      <div className='mt-10 flex-grow flex flex-col'>
        <nav className='flex-1 bg-white space-y-1' aria-label='Sidebar'>
          {props.navigation.map(item => (
            <a
              key={item.name}
              href={item.href}
              className={setClassNames(
                item.current
                  ? 'bg-indigo-50 border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
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

export default SideBar
