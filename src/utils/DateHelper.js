export const formatDate = (timestamp) => {
  const date = new Date(timestamp)
  return date.toLocaleString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  })
}
export const formatTime = (timestamp) => {
  const date = new Date(timestamp)
  return date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true
  })
}
export const getDateAndTime = (when) => {
  console.log("when", when)
  const date = new Date(when)
  return `${formatDate(date)} ${formatTime(date)}`
}
