import React from 'react'

export default function EntryItemView(props) {
  const { description, hours, project } = props.entry
  return (
    <>
      <div className='hours-description p-4 bg-white w-full flex items-center'>
        <input
          disabled={true}
          readOnly={true}
          type='text'
          name='description'
          id='description'
          className='focus:shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-base border-0 rounded-md'
          value={description}
        />
        <div className='mx-10 '>
          <span className='font-semibold text-blue-600 whitespace-nowrap'>
            {project}
          </span>
        </div>
        <input
          disabled={true}
          readOnly={true}
          type='text'
          name='description'
          id='time'
          className='focus:shadow-sm focus:ring-gray-500 focus:border-gray-500 font-semibold w-24 block sm:text-lg border-0 rounded-md'
          placeholder='00:00:00'
          value={hours}
        />
      </div>
    </>
  )
}
