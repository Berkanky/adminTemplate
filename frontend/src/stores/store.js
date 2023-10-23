import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ 
    baseUrl:'http://localhost:3000',
    window:{},
    mobileActive:false,
    visible:false
  }),
  getters: {
  },
  actions: {
  },
})
