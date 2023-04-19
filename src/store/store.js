import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";


const store = configureStore({
    reducer: {
        product: dataSlice
    }
})

export { store }