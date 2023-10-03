import { defineStore } from 'pinia'
import { userLogin } from '../../api/api'
export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    userInfo: {},
  }),
  actions: {
    // 获取文章列表
    async getUser(email: string, password: string) {
      userLogin(email, password).then((res) => {
        console.log(res)
      })
      // console.log(qs.stringify({ email, password }))
    },
  },
  getters: {},
})
