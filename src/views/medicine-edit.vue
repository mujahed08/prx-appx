<template>
<div class="my-3 font-monospace card rounded-0">
  <h3 class="text-start card-header">Medicine </h3>
  <div class="card-body">
    <h5 class="text-start card-title">Create Medicine </h5>
    <div class="container-fluid">
        <form @submit.prevent="submit" class="needs-validation row g-5" novalidate>
            <div class="col-lg-2 d-flex flex-column align-items-start">
              <label for="type" class="form-label fw-bold">Type</label>
              <input  v-model="state.type" :class="{ 'is-invalid' : v$.type.$error}" type="text" placeholder="e.g. Tab." class="form-control" id="type">
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback text-start" v-if="v$.type.$error">Type is required</div>
            </div>

            <div class="col-lg-6 d-flex flex-column align-items-start">
              <label for="name" class="form-label fw-bold">Name</label>
              <input  v-model="state.name" :class="{ 'is-invalid' : v$.name.$error}" type="text" placeholder="Name" class="form-control" id="name">
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback text-start" v-if="v$.name.$error">Name is required</div>
            </div>

            <div class="col-lg-6 d-flex flex-column align-items-start">
              <label for="generic" class="form-label fw-bold">Generic</label>
              <input  v-model="state.generic" type="text" placeholder="Generic" class="form-control" id="generic">
            </div>

            <div class="col-lg-2 d-flex flex-column align-items-start">
              <label for="strength" class="form-label fw-bold">Strength</label>
              <input  v-model="state.strength" type="text" placeholder="Strength" class="form-control" id="generic">
            </div>
          
            <div class="col-12">
              <div class="row">
                <div class="col-6 d-flex flex-column align-items-end"><button class="btn btn-primary" type="submit">Submit form</button></div>
                <div class="col-6 d-flex flex-column align-items-start"><button class="btn btn-danger" type="button">Cancel</button></div>
              </div>
            </div>
        </form>
    </div>
  </div>
</div>
</template>


<script setup>
import { onMounted, watch, ref } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import useMedicineStore from '../stores/medicine';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

const state = ref({})
const rules = {
  type: { required },
  name: { required } 
}

const v$ = useVuelidate(rules, state, { $lazy: true })

const medicineStore  = useMedicineStore()


const route = useRoute()
onMounted(() => {
  console.log('mounted!', route.params.id)
  medicineStore.fetchMedicine(route.params.id)
})


const { getMedicine } = storeToRefs(medicineStore)
watch(getMedicine, function() {
  state.value = getMedicine.value
});

const submit = async () => {
  console.log(v$.value.$validate())
  const result = await v$.value.$validate()
  console.log(result)
  if (!result) {
    return
  }

  medicineStore.updateMedicine(state.value)
}

</script>