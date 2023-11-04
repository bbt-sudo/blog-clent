Storage.prototype.setStorageWithAge = (key: string, value: any, age: number) => {
  if (isNaN(age) || age < 1) throw new Error('age must be a number')
  const obj = {
    data: value, //存储值
    time: Date.now(), //存值时间戳
    maxAge: age, //过期时间
  }
  localStorage.setItem(key, JSON.stringify(obj))
}

Storage.prototype.getStorageWithAge = (key: string) => {
  if (!localStorage.getItem(key)) {
    return undefined
  }

  const k: string = localStorage.getItem(key) as any
  const { data, time, maxAge } = JSON.parse(k)
  console.log(time + maxAge)
  console.log(Date.now())

  const b = time + maxAge < Date.now()
  console.log(b)

  if (b) {
    localStorage.removeItem(key)
    return undefined
  }
  return data
}

export default localStorage
