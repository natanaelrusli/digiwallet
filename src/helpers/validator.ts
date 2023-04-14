const regex = new RegExp(`[a-z0-9]+@[a-z]+.[a-z]{2,3}`);

export const ValidateEmail = (email: string): boolean => {
  return regex.test(email)
}

export const ValidatePasswordLength = (password: string, min: number, max: number): boolean => {
  if (password.length < min || password.length > max) {
    return false
  }
  return true
}