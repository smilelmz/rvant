export function isMobile(value: string): boolean {
  const v = value.replace(/[^-|\d]/g, '')
  return /^((\+86)|(86))?(1)\d{10}$/.test(v) || /^0[0-9-]{10,13}$/.test(v)
}
