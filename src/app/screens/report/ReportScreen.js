import { localStorageKey } from 'app/utils/constants/constants'
import {
  convertSecondsToHour,
  convertToSeconds,
} from 'app/utils/helpers/duration'
import { ReportsEmptyStateView } from 'app/views'
import React, { useState } from 'react'

const transformData = data => {
  let projects = {}
  //  Create object that is filtered by projects base from the entries saved
  Object.entries(data).map(item => {
    let [weekNumber, daysEntry] = item
    return Object.entries(daysEntry).map(entryItem => {
      let [dayName, dayValues] = entryItem
      return dayValues.map(projectEntry => {
        if (projects[projectEntry.project]) {
          return (projects = {
            ...projects,
            [projectEntry.project]: [
              ...projects[projectEntry.project],
              projectEntry,
            ],
          })
        } else {
          return (projects = {
            ...projects,
            [projectEntry.project]: [projectEntry],
          })
        }
      })
    })
  })
  return projects
}

export default function ReportScreen() {
  const entries = JSON.parse(localStorage.getItem(localStorageKey.ENTRIES))
  const tableData = transformData(entries)

  const getTotalHours = () => {
    const totalHour = Object.values(tableData).map(entry => {
      const dayHour = entry
        .map(item => convertToSeconds(item.hours))
        .reduce((prev, next) => (prev = next))
      return dayHour
    })

    return convertSecondsToHour(totalHour.reduce((prev, next) => prev + next))
  }

  return (
    <>
      <div className='flex flex-row overflow-hidden bg-gray-50 w-screen p-10'>
        <div className='report-container min-w-0 w-screen'>
          <div className='header flex flex-col'>
            <span className='text-2xl leading-6 font-medium text-gray-900'>
              Reports
            </span>
            <span className='mt-4 text-base leading-6 font-medium text-gray-500'>
              Project hours overview
            </span>
          </div>
          {Object.values(tableData).length ? (
            <div className='content mt-10'>
              <div className='flex flex-col'>
                <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                  <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
                    <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                      <table className='min-w-full divide-y divide-gray-200'>
                        <thead className='bg-gray-50'>
                          <tr>
                            <th
                              scope='col'
                              className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                            >
                              Project Name
                            </th>
                            <th
                              scope='col'
                              className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                            >
                              Duration
                            </th>
                          </tr>
                        </thead>
                        <tbody className='bg-white divide-y divide-gray-300'>
                          {Object.entries(tableData).map(data => {
                            return (
                              <>
                                <tr key={data[0]}>
                                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                                    {data[0]}
                                  </td>
                                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                                    {getTotalHours()}
                                  </td>
                                </tr>
                              </>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <ReportsEmptyStateView />
            </>
          )}
        </div>
      </div>
    </>
  )
}
