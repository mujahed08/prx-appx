import fetch_helper from "./fetch-helper";
import { MEDICINE_ENDPOINT } from './constants'

export function fetchMedicinApi(id) {
    return fetch_helper.get(`${MEDICINE_ENDPOINT}/medicine/${id}`)
}

export const getMedicinList = (page_number, limit) => {
    return fetch_helper.get(`${MEDICINE_ENDPOINT}/medicine?page_number=${page_number}&limit=${limit}`)
}

export const createMedicineApi = (payload) => {
    return fetch_helper.post(`${MEDICINE_ENDPOINT}/medicine`, payload)
}

export const editMedicineApi = (id, payload) => {
    return fetch_helper.put(`${MEDICINE_ENDPOINT}/medicine/${id}`, payload)
}

export const _deleteMedicin = (id) => {
    return fetch_helper.delete(`${MEDICINE_ENDPOINT}/medicine/${id}`)
}