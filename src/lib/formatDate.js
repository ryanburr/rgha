export function formatDate(dateString) {
  const hasTime = dateString.length > 10
  const fullDate = hasTime ? dateString : `${dateString}T00:00:00Z`
  return new Date(fullDate).toLocaleDateString('en-US', {
    // dateStyle: 'medium',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: hasTime ? 'numeric' : undefined,
    timeZone: 'America/New_York',
  })
}
