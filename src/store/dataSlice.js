import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
const initialValue = {
    id: 'e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836',
    productName: 'John',
    productCategory: 'Doe',
    imageFiles: 'Doe',
    productPrice: 'Doe',
    productBranches: 'Doe',
    addDescrip: 'Doe',
}

export const dataSlice = createSlice({
    name: 'products',
    initialState: {
        product: [initialValue]
    },
    reducers: {
        hapusData: (state, action) => {
            if (window.confirm('Apakah anda yakin akan menghapus ?')) {
                state.product = state.product.filter((tod) => {
                    return tod.id !== action.payload.id
                })
            }
        },
        tambahData: (state, action) => {
            const onSubmit = {
                ...action.payload.data,
                id: uuidv4(),
            }
            state.product = [...state.product, onSubmit]
        },
        editData: (state, action) => {
            state.product.map((prod) => {
                if (prod.id === action.payload.id) {
                    prod.productName = action.payload.productName
                    prod.productCategory = action.payload.productCategory
                    prod.productBranches = action.payload.productBranches
                    prod.productPrice = action.payload.productPrice
                    prod.addDescrip = action.payload.addDescrip
                }
            })
        }
    },
})

export const { hapusData, tambahData, editData } = dataSlice.actions
export default dataSlice.reducer