const classnames = (baseClass: string, names: object[] = [], isAll = true): string => {
  const normalizedNames: string[] = []
  const specialKeys: string[] = ['type']
  names.forEach((name: object) => {
    if (Object.prototype.toString.call(name) === '[object Object]') {
      const key = Object.keys(name)[0]
      const value = name[key]
      if (specialKeys.indexOf(key) !== -1) {
        normalizedNames.push(`${baseClass}--${value}`)
      } else if (value) {
        normalizedNames.push(`${baseClass}--${key}`)
      }
    }
  })
  if (isAll) return [baseClass, ...normalizedNames].join(' ')
  return [...normalizedNames].join(' ')
}

export default classnames
