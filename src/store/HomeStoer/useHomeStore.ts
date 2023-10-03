import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'
import { articles } from '../../api/api'

export const useHomeStore = defineStore({
  id: 'home',
  state: () => ({
    title: ref('Home'),
    articles: ref([]) as Ref<Array<any>>,
  }),
  actions: {
    // 获取文章列表
    async getArticles() {
      articles.then((res) => {
        console.log(res)

        this.articles = res.data
      })
    },
  },
  getters: {},
})
