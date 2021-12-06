import { projects } from 'app/mock-data/projects.list'
import React, { useState } from 'react'

export default function TimerView(props) {
  const { modal } = props

  const [formInput, setFormInput] = useState({
    description: null,
    project: null,
    hours: null,
    modifiedOn: new Date(),
  })

  const handleChange = event => {
    const value = event.target.value
    setFormInput({
      ...formInput,
      [event.target.name]: value,
    })
  }

  const onAddTime = event => {
    if (formInput.description && formInput.hours) {
      props.addTimeEntry(formInput)
    }
  }

  const renderProjectOptions = () => {
    return projects.map(project => {
      return <option value={project.label}>{project.label}</option>
    })
  }

  return (
    <>
      <div className='w-screen flex items-center'>
        <div className='w-full flex items-center h-20'>
          <input
            required={true}
            type='text'
            name='description'
            id='description'
            value={formInput.description || ''}
            className='focus:shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-base border-0 rounded-md'
            placeholder='What are you working on?'
            onChange={handleChange}
          />
          <div className='mx-10'>
            <select
              name='project'
              onChange={handleChange}
              className='font-semibold hover:underline cursor-pointer '
            >
              {renderProjectOptions()}
            </select>
          </div>
          <div className='flex flex-row items-center justify-center'>
            <input
              type='text'
              name='hours'
              value={formInput.hours || ''}
              className='focus:shadow-sm focus:ring-gray-500 focus:border-gray-500 font-semibold w-24 block sm:text-lg border-0 rounded-md'
              placeholder='00:00:00'
              onChange={handleChange}
            />
            <div className='ml-10 flex'>
              <button
                onClick={onAddTime}
                type='button'
                className={
                  'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none'
                }
              >
                <span>ADD</span>
              </button>
              <button
                onClick={modal.handleShowLogin}
                type='button'
                className={
                  'ml-4 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                }
              >
                <span>Login</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
