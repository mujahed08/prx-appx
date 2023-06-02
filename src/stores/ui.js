import { ref } from 'vue'
import { defineStore } from 'pinia'

const useUiStore = defineStore('ui', () => {
  const loading = ref(false)
  const setLoading = (value) => {
    loading.value = value
  } 
  
  return { loading, setLoading }
})

export default useUiStore;