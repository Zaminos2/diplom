import { configureStore } from "@reduxjs/toolkit";
import categoriesDataSlice from "./categoriesDataSlice";
import salesSlice from "./salesSlice";
import cartSlice from "./cartSlice";
import orderSendSlice from "./orderSendSlice";


export default configureStore ({
    reducer:{
        categoriesData:categoriesDataSlice,
        salesData:salesSlice,
        shopCart:cartSlice,
        orderSendSlice:orderSendSlice,
    }
})