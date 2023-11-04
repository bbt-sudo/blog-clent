import { defineStore } from 'pinia'
import { userLogin } from '../../api/api'
import { store, obj2url, url2obj } from 'xijs'
export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    id: '',
    nickName: '',
    head_Sculpture: '',
    accessToken: '',
    refreshToken: '',
  }),
  actions: {
    // 获取文章列表
    async getUser(email: string, password: string) {
      userLogin(email, password).then((res) => {
        this.id = res.data.userInfo.id
        this.nickName = res.data.userInfo.nick_Name
        this.head_Sculpture = res.data.userInfo.head_Sculpture
        this.accessToken = res.data.accessToken
        console.log(res)

        const user = {
          id: this.id,
          nickName: this.nickName,
          head_Sculpture: this.head_Sculpture,
        }
        store.set('u', obj2url(user), Date.now() + 1800000)
        store.set('accessToken', this.accessToken)
      })
      // console.log(qs.stringify({ email, password }))
    },
    async user() {
      const key = store.get('u') as any
      if (key.status !== 1) {
        const u = url2obj(key.value) as any

        this.id = u.id
        this.nickName = u.nickName
        this.head_Sculpture = u.head_Sculpture
      }
      console.log(this.id)
    },

    async accessLogin() {},
  },
  getters: {},
})
