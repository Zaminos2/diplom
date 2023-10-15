import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
 export const feachCategories = createAsyncThunk(
    'categories/feachCategories',async function (_,{rejectWithValue}){
        try{
            const responce = await fetch('http://localhost:3333/categories/all')
            const categories = await responce.json();
            return categories;
        }catch(error){
            console.error(error);
            return rejectWithValue({message:'Error feach categorys!'});
        }
    }
 )

const categoriesDataSlice = createSlice({
    name:'categoriesData',
    initialState:{
        categoriesState:[],
        statusState:null,
        errorState:null,
    },
    reducers:{
        getCategories(state,action){
            state.categoriesState=action.payload;
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(feachCategories.fulfilled,(state,action)=>{
            state.categoriesState = action.payload;
            state.statusState = 'fulfilled';
            state.errorState = null;
        });
        builder.addCase(feachCategories.pending,(state)=>{
            state.statusState = 'pending';
            state.errorState = null;
        });
        builder.addCase(feachCategories.rejected,(state,action)=>{
            state.statusState = 'rejected';
            state.errorState = action.payload;
        });

    }
})

export default categoriesDataSlice.reducer;
export const selectCategoriesState = (state)=> state.categoriesData.categoriesState;
export const selectStatusState = (state)=>state.categoriesData.statusState;
export const selectErrorState = (state)=>state.categoriesData.errorState;
export const {getCategories} = categoriesDataSlice.actions;
