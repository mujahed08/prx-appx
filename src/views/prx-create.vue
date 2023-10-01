<template>
    <div class="my-3 font-monospace card rounded-0">
        <h3 class="text-start card-header">{{ name }}</h3>
        <div class="card-body">
            <div class="d-flex">
                <div class="col-8 d-flex flex-wrap my-1 border-end">
                    <div class="ip-ctrl col-4 d-flex flex-column p-1">
                        <label for="name">Patient Name</label>
                        <input type="text" name="name" id="name" placeholder="" />
                    </div>
                    <div class="ip-ctr col-3 d-flex justify-content-evenly p-1">
                        <input type="radio" name="gender" id="male" />
                        <label for="male" class="align-self-center">Male</label>
                        <input type="radio" name="gender" id="female" />
                        <label for="female" class="align-self-center">Female</label>
                    </div>
                    <div class="ip-ctrl col-1 d-flex flex-column p-1">
                        <label for="name">Age</label>
                        <input type="number" name="age" id="age" placeholder="" />
                    </div>
                    <div class="ip-ctrl col-2 d-flex flex-column p-1">
                        <label for="agein">Age In</label>
                        <select name="agein" id="agein">
                            <option value=""></option>
                            <option value="Days">Days</option>
                            <option value="Months">Months</option>
                            <option value="Years">Years</option>
                        </select>
                    </div>
                    <div class="ip-ctrl col-4 d-flex flex-column p-1">
                        <label for="address">Age</label>
                        <textarea name="address" id="address" placeholder=""></textarea>
                    </div>
                    <div class="ip-ctrl col-3 d-flex flex-column p-1">
                        <label for="mobileNo">Mobile No</label>
                        <input type="text" name="mobileNo" id="mobileNo" placeholder="" />
                    </div>
                    <div class="col-12 d-flex pt-3">
                        <div class="col-5 d-flex flex-column">
                            <div class="ip-ctrl col-12 d-flex flex-column p-1">
                                <label for="history">History</label>
                                <textarea name="history" id="history" placeholder=""></textarea>
                            </div>
                            <div class="ip-ctrl col-12 d-flex flex-column p-1">
                                <label for="diagnosis">Diagnosis</label>
                                <textarea name="diagnosis" id="diagnosis" placeholder=""></textarea>
                            </div>
                            <div class="ip-ctrl col-12 d-flex flex-column p-1">
                                <label for="invistAdvised">Invistigation Advised</label>
                                <textarea name="invistAdvised" id="invistAdvised" placeholder=""></textarea>
                            </div>
                        </div>
                        <div class="col-7 d-flex flex-column p-3">
                            <table class="oe-table">
                                <tbody>
                                    <tr>
                                        <td>O/E</td>
                                        <td class="oe-td"><textarea rows="1" class="oe-inputs"></textarea></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>L/E</td>
                                        <td class="oe-td"><textarea ng-model="data.le" rows="1" class="oe-inputs"></textarea></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>PR</td>
                                        <td class="oe-td"><input type="text" ng-model="data.pr" rows="1" class="oe-inputs"></td>
                                        <td>/min</td>
                                    </tr>
                                    <tr>
                                        <td>BP</td>
                                        <td class="oe-td"><input type="text" ng-model="data.bp" rows="1" class="oe-inputs"></td>
                                        <td>mm Hg</td>
                                    </tr>
                                    <tr>
                                        <td>CVS</td>
                                        <td class="oe-td"><textarea ng-model="data.cvs" rows="1" class="oe-inputs"></textarea></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>RS</td>
                                        <td class="oe-td"><textarea ng-model="data.rs" rows="1" class="oe-inputs"></textarea></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>PA</td>
                                        <td class="oe-td"><textarea ng-model="data.pa" rows="1" class="oe-inputs"></textarea></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>CNS</td>
                                        <td class="oe-td"><textarea ng-model="data.cns" rows="1" class="oe-inputs"></textarea></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-12 pt-3">
                        <div class="d-flex flex-wrap">
                            <div class="ip-ctrl col-3 d-flex flex-column p-1">
                                <label for="name-n">Medicine</label>
                                <input type="text" name="name-n" id="name-n" placeholder="Tab. Calpol" />
                            </div>
                            <div class="ip-ctrl col-1 d-flex flex-column p-1">
                                <label for="strength-n">Strength</label>
                                <input type="text" name="strength-n" id="strength-n" placeholder="" />
                            </div>
                            <div class="ip-ctrl col-2 d-flex flex-column p-1">
                                <label for="generic-n">Generic</label>
                                <input type="text" name="generic-n" id="generic-n" placeholder="" />
                            </div>
                            <div class="ip-ctrl col-1 d-flex flex-column p-1">
                                <label for="sakadi-n">Sakadi</label>
                                <input type="text" name="sakadi-n" id="sakadi-n" placeholder="" />
                            </div>
                            <div class="ip-ctrl col-1 d-flex flex-column p-1">
                                <label for="dupari-n">Dupari</label>
                                <input type="text" name="dupari-n" id="dupari-n" placeholder="" />
                            </div>
                            <div class="ip-ctrl col-1 d-flex flex-column p-1">
                                <label for="ratri-n">Ratri</label>
                                <input type="text" name="ratri-n" id="ratri-n" placeholder="" />
                            </div>
                            <div class="ip-ctrl col-1 d-flex flex-column p-1">
                                <label for="qty-n">Qty.</label>
                                <input type="number" name="qty-n" id="qty-n" placeholder="" />
                            </div>
                            <div class="ip-ctrl col-1 d-flex align-items-end p-1">
                                <input type="button" name="qty-n" id="qty-n" value="+" />
                            </div>
                            <div class="ip-ctrl col-3 d-flex flex-column p-1">
                                <input type="text" name="splRemarks-n" id="splRemarks-n" placeholder="Spl. Remarks" />
                            </div>
                        </div>
                    </div>
                    <div class="col-12 pt-3">
                        <div class="d-flex flex-wrap">
                            <Select v-model:selected="state.selectedMedicine" label="Medicine" :listApi=fetchMedicineList placholder="Tab."></Select>
                        </div>
                    </div>
                    <button @click="logState" class="btn btn-primary">Test</button>
                </div>
                <div class="col-4 my-1 ps-3">
                    <div class="col">
                        <div class="ip-ctrl col d-flex flex-column p-1">
                            <label for="name">Search Patient Name or ID</label>
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, watch } from 'vue';
import Select from '../components/Select.vue';
import useMedicineStore from '../stores/medicine';

    const name = 'Prescription'
    const medicineStore  = useMedicineStore()
    const {fetchMedicineList} = medicineStore

    const state = reactive({
        selectedMedicine: {
            name : ''
        }
    })

    watch(state, (newState, oldState) => {
            const stet = {...newState}
            console.log(stet.selectedMedicine.value)
            console.log(oldState.selectedMedicine?.id)
        }
    )

    const logState = (ev) => {
        console.log(state)
    }
</script>