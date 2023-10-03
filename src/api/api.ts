import axios from '.'

export const articles = axios.get('article/articles')
export const userLogin = (email: string, password: string) => {
  const data = {
    email,
    password,
  }
  return axios.post('user/login', data)
}
