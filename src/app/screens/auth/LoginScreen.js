import { localStorageKey } from 'app/utils/constants/constants'
import React, { useState } from 'react'
import login from '../../assets/images/login.png'
import close from '../../assets/icons/close.svg'

export default function LoginScreen(props) {
  const { auth } = props
  const [formInput, setFormInput] = useState({
    email: '',
    password: '',
  })

  const handleChange = event => {
    const value = event.target.value
    setFormInput({
      ...formInput,
      [event.target.name]: value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
  }

  const onHandleSignIn = event => {
    localStorage.setItem(localStorageKey.USER, JSON.stringify(formInput))
    auth.handleHideLogin()
  }

  return (
    <>
      <div className='fixed z-10 inset-0 overflow-y-auto min-h-screen bg-gray-600 bg-opacity-75 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='items-center justify-center mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <div className='mb-10 flex justify-end'>
              <img
                onClick={auth.handleHideLogin}
                className='object-cover md:object-scale-down max-h-7'
                alt={close}
                src={close}
              />
            </div>
            <img
              className='object-cover md:object-scale-down max-h-48 w-full mb-16'
              alt={login}
              src={login}
            />
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700'
                >
                  Email address
                </label>
                <div className='mt-1'>
                  <input
                    placeholder='you@example.com'
                    id='email'
                    name='email'
                    type='email'
                    value={formInput.email}
                    autoComplete='email'
                    required
                    onChange={handleChange}
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-700'
                >
                  Password
                </label>
                <div className='mt-1'>
                  <input
                    placeholder='Password'
                    id='password'
                    name='password'
                    type='password'
                    value={formInput.password}
                    autoComplete='current-password'
                    required
                    onChange={handleChange}
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                  />
                </div>
              </div>
              <div>
                <button
                  onClick={onHandleSignIn}
                  type='submit'
                  className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                >
                  Sign in
                </button>
              </div>
              <div className='relative'>
                <div className='absolute inset-0 flex items-center'>
                  <div className='w-full border-t border-gray-300' />
                </div>
                <div className='relative flex justify-center text-sm'></div>
              </div>
              <div className='flex items-center justify-center'>
                <div className='text-sm' onClick={auth.handleShowSignup}>
                  <span className='font-medium text-blue-600 hover:text-blue-500 cursor-pointer'>
                    Don't have an account yet?
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
