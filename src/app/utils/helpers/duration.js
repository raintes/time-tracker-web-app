export const convertToSeconds = duration => {
  let seconds = duration.split(':')
  // every hour and minute is 60 seconds
  return +seconds[0] * 60 * 60 + +seconds[1] * 60 + +seconds[2]
}

export const convertSecondsToHour = duration => {
  const hours = duration / 3600 // Find whole number by dividing the number of seconds
  const minutes = parseFloat(hours.toString().substring(2)) * 60 // Number to the left of the decimal is the number of whole hours
  const seconds = parseFloat(minutes.toString().substring(2)) * 60 //The number to the right of the decimal is the partial minutes.

  let hh = parseInt(hours).toString()
  let mm = parseInt(minutes).toString()
  let ss = parseInt(seconds).toString()

  // Manual adding of 0 before the number if length of number is 1
  if (hh.length === 1) {
    hh = '0' + hh
  }
  if (mm.length === 1) {
    mm = '0' + mm
  }
  if (ss.length === 1) {
    ss = '0' + ss
  }

  console.log(ss.length)

  return hh + ':' + mm + ':' + ss
}
