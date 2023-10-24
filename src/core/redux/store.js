import { configureStore } from "@reduxjs/toolkit";
import categoriesDataSlice from "./categoriesDataSlice";
import salesSlice from "./salesSlice";


export default configureStore ({
    reducer:{
        categoriesData:categoriesDataSlice,
        salesData:salesSlice,
    }
})