import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
 export const feachSales = createAsyncThunk(
    'sales/feachSales',async function (_,{rejectWithValue}){
        try{
            const responce = await fetch('http://localhost:3333/products/all');
            const sales = await responce.json();
            const salesArray = Array.isArray(sales)?sales:[sales];
            return salesArray;
        }catch(error){
            console.error(error);
            return rejectWithValue({message:'Error feach categorys!'});
        }
    }
 )
export const feachProduct = createAsyncThunk(
    'sales/feachProduct',async function(productid,{rejectWithValue}){
        try{
            const responce = await fetch(`http://localhost:3333/products/${productid}`);
            const product = await responce.json();
            return product;
        }catch(error){
            console.error(error);
            return rejectWithValue({message:'Error feach product!'});
        }
    }
)
const salesSlice = createSlice({
    name:'salesData',
    initialState:{
        salesState:[],
        productState:{},
        statusState:null,
        errorState:null,
        productIdState:null,
        productStatusState:null,
        productErrorState:null
    },
    reducers:{
        getSales(state,action){
            state.salesState=action.payload;
        },
        getProductId(state,action){
            state.productIdState = action.payload;
            localStorage.setItem('productId',action.payload);
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(feachSales.fulfilled,(state,action)=>{
            state.salesState = action.payload;
            state.statusState = 'fulfilled';
            state.errorState = null;
        }).addCase(feachSales.pending,(state)=>{
            state.statusState = 'pending';
            state.errorState = null;
        }).addCase(feachSales.rejected,(state,action)=>{
            state.statusState = 'rejected';
            state.errorState = action.payload;
        }).addCase(feachProduct.fulfilled,(state,action)=>{
            state.productState = action.payload;
            state.productStatusState = 'fulfilled';
            state.productErrorState = null;
        }).addCase(feachProduct.pending,(state)=>{
            state.productStatusState = 'pending';
            state.productErrorState = null;
        }).addCase(feachProduct.rejected,(state,action)=>{
            state.productStatusState = 'rejected';
            state.productErrorState = action.payload;
        });

    }
})
export default salesSlice.reducer;

export const {getSales,getProductId} = salesSlice.actions;
