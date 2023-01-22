import { format, parseISO } from 'date-fns'

export function formatDate(dateString) {
  if (!dateString) {
    return ''
  }
  const hasTime = dateString.length > 10
  return format(
    parseISO(dateString),
    `MMMM d, yyyy${hasTime ? ` 'at' h aa` : ``}`
  )

  // return new Date(fullDate).toLocaleDateString('en-US', {
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric',
  //   hour: hasTime ? 'numeric' : undefined,
  //   timeZone: 'America/New_York',
  // })
}
