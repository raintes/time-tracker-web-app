// Convert time in H[:mm[:ss]] format to seconds
export const convertToSeconds = duration => {
  let [h, m, s] = duration.split(':')
  return h * 3600 + (m | 0) * 60 + (s | 0) * 1
}
// Convert seconds to time in H:mm:ss format
export const convertSecondsToHour = seconds => {
  let z = n => (n < 10 ? '0' : '') + n

  return (
    ((seconds / 3600) | 0) +
    ':' +
    z(((seconds % 3600) / 60) | 0) +
    ':' +
    z(seconds % 60)
  )
}
