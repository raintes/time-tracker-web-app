import React from 'react'
import page_404 from '../../assets/images/page_404.png'
import { Link } from 'react-router-dom'
import { NAVIGATION } from 'app/utils/enums/enums'

export default function PageNotFoundScreen() {
  return (
    <>
      <div className='inset-0 overflow-y-auto min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='items-center justify-center mt-8 sm:mx-auto sm:w-full sm:max-w-2xl'>
          <div className='flex flex-col'>
            <img
              className='object-cover md:object-scale-down max-h-96 w-full'
              alt={page_404}
              src={page_404}
            />
            <div className='flex-col flex justify-center items-center'>
              <span className='font-extrabold text-6xl'>Page not found</span>
              <span className='font-normal text-xl mt-3 text-gray-500'>
                Please check the URL in the address bar and try again.
              </span>

              <button
                type='button'
                className={
                  'mt-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                }
              >
                <Link to={NAVIGATION.HOME}>Go back home</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
