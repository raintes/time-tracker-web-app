import { getWeek, isThisWeek } from 'date-fns'

export const getWeekOfYear = date => {
  return getWeek(new Date(date), {
    weekStartsOn: 0,
  })
}

export const getIsThisWeek = date => {
  return isThisWeek(new Date(date))
}

export const getISOWeek = (week, year) => {
  // Get the first date of the week, then return an array of 7 elements, incrementing the date for each element.
  // If the day number goes above the number of days in the month, then add one to the month `temp.month` and reset the day `temp.day` equal to one.
  var simple = new Date(year, 0, 1 + (week - 1) * 7)
  var dow = simple.getDay()
  var ISOweekStart = simple
  if (dow <= 4) ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1)
  else ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay())

  const temp = {
    day: ISOweekStart.getDate(),
    month: ISOweekStart.getMonth(),
    year: ISOweekStart.getFullYear(),
  }
  const numDaysInMonth = new Date(temp.year, temp.month + 1, 0).getDate()

  return Array.from({ length: 7 }, _ => {
    if (temp.day > numDaysInMonth) {
      temp.month += 1
      temp.day = 1
    }
    return new Date(temp.year, temp.month, temp.day++).toUTCString()
  })
}
