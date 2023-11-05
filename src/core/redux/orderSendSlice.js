import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils";

export const feachOrder = createAsyncThunk(
    'orders/feachOrder',async function(phoneData,{rejectWithValue}){
        try{
             await fetch(`${BASE_URL}/order/send`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(phoneData)
            });
            
        }catch(error){
            console.error(error);
            return rejectWithValue({message:'Error feach order!'});
        }
    }
);
export const feachSale = createAsyncThunk(
    'orders/feachSale',async function(phoneData,{rejectWithValue}){
        try{
             await fetch(`${BASE_URL}/order/send`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(phoneData)
            });
            
        }catch(error){
            console.error(error);
            return rejectWithValue({message:'Error feach order!'});
        }
    }
);
const orderSendSlice =createSlice({
    name:'orderSendSlice',
    initialState:{
        userPhoneState:'',
        orderStatusState:null,
        orderErrorState:null,
        saleStatusState:null,
        saleErrorState:null,
    },
    reducers:{
        getPhoneData(state,{payload}){
            state.userPhoneState = payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(feachOrder.fulfilled,(state)=>{
            state.orderStatusState = 'fulfilled';
            state.orderErrorState = null;
        }).addCase(feachOrder.pending,(state)=>{
            state.orderStatusState = 'pending';
            state.orderErrorState = null;
        }).addCase(feachOrder.rejected,(state,action)=>{
            state.orderStatusState = 'rejected';
            state.orderErrorState = action.payload;
        }).addCase(feachSale.fulfilled,(state)=>{
            state.saleStatusState = 'fulfilled';
            state.saleErrorState = null;
        }).addCase(feachSale.pending,(state)=>{
            state.saleStatusState = 'pending';
            state.saleErrorState = null;
        }).addCase(feachSale.rejected,(state,action)=>{
            state.saleStatusState = 'rejected';
            state.saleErrorState = action.payload;
        })
    }
});

export default orderSendSlice.reducer;
export const {getPhoneData} = orderSendSlice.actions;