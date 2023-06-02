<template>
    <div class="d-flex my-2">
        <router-link to="/medicine/create" role="button" class="btn btn-success mx-2">Create</router-link>
        <button @click="edit" type="button" class="btn btn-primary mx-2">Edit</button>
        <button @click="_delete" type="button" class="btn btn-danger mx-2">Delete</button>
    </div>
    <table class="table border">
        <thead>
            <tr>
            <th scope="col"><input v-model="all" @click="select(medicineList.data)" type="checkbox" class="form-check-input"></th>
            <th scope="col">Type</th>
            <th scope="col">Name</th>
            <th scope="col">Generic</th>
            <th scope="col">Strength</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item) in medicineList.data" v-bind:key="item._id">
            <th scope="row"><input v-model="selected" v-bind:value="item" type="checkbox" class="form-check-input"></th>
            <td>{{item.type}}</td>
            <td>{{item.name}}</td>
            <td>{{item.generic}}</td>
            <td>{{item.strength}}</td>
            </tr>
        </tbody>
    </table>
    <Pagination :page="medicineList.page" :limit="10" :total="medicineList.total"></Pagination>
</template>

<script setup>
import { ref, computed } from 'vue'
import Pagination from '../components/Pagination.vue'
import { useRoute, useRouter } from 'vue-router';
import useMedicineStore from '../stores/medicine';
import { storeToRefs } from 'pinia';

const selected = ref([])
//const ids = ref([])
const ids = computed(() => selected.value.map(({ id }) => id))
const all = ref(false)

const select = (list) => {
    selected.value = [];
    if (!all.value)
        selected.value = list
}

const router = useRouter()
const edit = () => {
    if(selected.value.length === 1) {
        router.push(`/medicine/edit/${selected.value[0]['id']}`)
    }
}
const _delete = () => {
    
}

const medicineStore  = useMedicineStore()
const { getMedicineList } = storeToRefs(medicineStore)
const medicineList = getMedicineList

const route = useRoute()    
medicineStore.fetchMedicineList(route.params.page)

</script>