export const comparePwd = (name, pwd, maxSame) => {
  if (pwd.length < maxSame) return false
  for (let i = 0; i <= name.length - maxSame; i++) {
    const substring = name.slice(i, maxSame)
    const reg = new RegExp(substring)
    const Result = reg.test(pwd)
    if (Result) return true
  }
  return false
}
