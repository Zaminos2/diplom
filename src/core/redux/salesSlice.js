import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
 export const feachSales = createAsyncThunk(
    'sales/feachSales',async function (_,{rejectWithValue}){
        try{
            const responce = await fetch('http://localhost:3333/products/all')
            const sales = await responce.json()
            const salesArray = Array.isArray(sales)?sales:[sales];
            return salesArray;
        }catch(error){
            console.error(error);
            return rejectWithValue({message:'Error feach categorys!'});
        }
    }
 )

const salesSlice = createSlice({
    name:'salesData',
    initialState:{
        salesState:[],
        statusState:null,
        errorState:null,
    },
    reducers:{
        getSales(state,action){
            state.salesState=action.payload;
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(feachSales.fulfilled,(state,action)=>{
            state.salesState = action.payload;
            state.statusState = 'fulfilled';
            state.errorState = null;
        });
        builder.addCase(feachSales.pending,(state)=>{
            state.statusState = 'pending';
            state.errorState = null;
        });
        builder.addCase(feachSales.rejected,(state,action)=>{
            state.statusState = 'rejected';
            state.errorState = action.payload;
        });

    }
})
export default salesSlice.reducer;
export const selectSalesState = (state)=> state.salesData.salesState;
export const selectSalesStatusState = (state)=>state.salesData.statusState;
export const selectSalesErrorState = (state)=>state.salesData.errorState;
export const {getSales} = salesSlice.actions;
