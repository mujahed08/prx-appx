<template>
    <div class="ip-ctrl col-3 d-flex flex-column p-1 select">
        <label for="name-n">{{ props.label }}</label>
        <input type="text" :value="selected.value" name="name-n" id="name-n" :placeholder="[[ props.placholder ]]" @focus="hideOptions = false" @blur="onBlur(ev)" />
        <div class="selections p-1 border shadow" :class="{'hide-options' : hideOptions}">
            <ul>
                <li v-for="item in list" ><a @click="selectItem($event, item)">{{ item.name }}</a></li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';

    const hideOptions = ref(true)
    const props = defineProps({
        label: {
            type : String,
            required : true
        },
        listApi : {
            type : Function,
            required: true
        },
        placholder: {
            type : String
        },
        selected : {
            type : Object
        }
    })

    const emit = defineEmits('update:selected')

    const list = reactive([])
    const setList = (data) => {
        list.splice(0)
        list.push(...data)
    }

    onMounted(async () => {
        const data = await props.listApi(1)
        setList(data.data)
    })

    const selectItem = ($event, item) => {
        console.log(item)
        selected.value = item.name
        selected.id = item._id
        emit('update:selected', selected)
    }

    const onBlur = ($event) => {
        setTimeout(()=> {
            hideOptions.value = true
        }, 300)
    }

    const selected = reactive({
        value : ''
    })
</script>
<style>
.select {
    position: relative;
    display: inline-block;

}
.selections {
    position: absolute;
    top: 55px;
    width: 100%;
    background-color: white;
    z-index: 1;
    max-height: 150px;
    overflow-y: scroll;
}
.selections ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
.selections ul li a{
    display: block;
    padding: .5rem;
}
.selections ul li:hover {
    background-color: #ccc;
}

.hide-options {
    display: none;
}
</style>