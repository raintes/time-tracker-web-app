export const convertToSeconds = duration => {
  let seconds = duration.split(':')
  // every hour and minute is 60 seconds
  return +seconds[0] * 60 * 60 + +seconds[1] * 60 + +seconds[2]
}

export const convertSecondsToHour = duration => {
  const measuredTime = new Date(null)
  measuredTime.setSeconds(duration)
  return measuredTime.toISOString().substr(11, 8)
}
