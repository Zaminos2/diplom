import { configureStore } from "@reduxjs/toolkit";
import categoriesDataSlice from "./categoriesDataSlice";


export default configureStore ({
    reducer:{
        categoriesData:categoriesDataSlice,
    }
})