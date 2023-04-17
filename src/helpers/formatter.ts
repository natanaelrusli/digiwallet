const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'IDR'
})

export const formatCurrency = (amount?: number): string => {
  if (amount) {
    return formatter.format(amount)
  }
  return ''
}

export const formatDate = (date: string): string => {
  const dateObj = new Date(date)

  return dateObj.toLocaleDateString('en-US')
}