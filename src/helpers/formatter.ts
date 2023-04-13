const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'IDR'
})

export const formatCurrency = (amount: number): string => {
  return formatter.format(amount)
}

export const formatDate = (date: string): string => {
  const dateObj = new Date(date)

  return dateObj.toLocaleDateString('en-US')
}