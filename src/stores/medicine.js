import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { getMedicinList, createMedicineApi, fetchMedicinApi, editMedicineApi } from "../api/medicine"
import useUiStore from "./ui"

const initialState = {
    medicine: {
        "id" : '',
        "type" : '',
        "name" : '',
        "generic" : '',
        "strength" : '',
        "createdOn" : null,
        "updated_on" : null
    },
    medicineList: {
      'data' : [],
      'page' : 0,
      'total' : 0
    }
}

const useMedicineStore = defineStore('medicine', {
    // a function that returns a fresh state
    state: () => initialState,
    // optional getters
    getters: {
      // getters receive the state as first parameter
      getMedicine: (state) => state.medicine,
      getMedicineList: (state) => state.medicineList,
    },
    // optional actions
    actions: {
      async fetchMedicineList(page_number) {
          const limit = 10;
          const uiStore = useUiStore()
          try {
              uiStore.setLoading(true)
              const data = await getMedicinList(page_number, limit)
              console.log(data)
              this.medicineList = data
              return data;
          } catch (error) {
              console.log(error)
          } finally { uiStore.setLoading(false) }
          return null
      },
      async createMedicine(payload) {
          const uiStore = useUiStore()
          try {
              uiStore.setLoading(true)
              const data = await createMedicineApi(payload)
              console.log(data)
              if(data.id) {
                this.router.push('/medicine/list/1')
              }
          } catch (error) {
              console.log(error)
          } finally { uiStore.setLoading(false) }
      },
      async updateMedicine(payload) {
          const { id } = payload
          delete payload._id

          const strength = Array.isArray(payload.strength) ? payload.strength : [payload.strength]
          const uiStore = useUiStore()
          try {
              uiStore.setLoading(true)
              const data = await editMedicineApi(id, {...payload, strength, app_id:100})
              console.log(data)
              if(data.id) {
                this.router.push('/medicine/list/1')
              }
          } catch (error) {
              console.log(error)
          } finally { uiStore.setLoading(false) }
      },
      async fetchMedicine(id) {
          const uiStore = useUiStore()
          try {
              uiStore.setLoading(true)
              const data = await fetchMedicinApi(id)
              console.log(data)
              this.medicine = data
          } catch (error) {
              console.log(error)
          } finally { uiStore.setLoading(false) }
      }
    },
  })
  
  export default useMedicineStore;