import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHomeStore = defineStore({
  id: 'home',
  state: () => ({
    title: ref('Home'),
  }),
  actions: {},
  getters: {},
})
