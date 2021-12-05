import { getWeek } from 'date-fns'

export const getWeekOfYear = date => {
  return getWeek(new Date(date), {
    weekStartsOn: 0,
  })
}
