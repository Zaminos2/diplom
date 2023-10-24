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

 export const feachProductInCategory = createAsyncThunk(
    'categories/feachProductsInCategory',async (categoryId,{rejectWithValue})=>{
        try{
            const response = await fetch(`http://localhost:3333/categories/${categoryId}`);
            const data = response.json();
            return data;
        }catch(error){
            return rejectWithValue({message:'error with feaching data.'});
        }
    }
)

const categoriesDataSlice = createSlice({
    name:'categoriesData',
    initialState:{
        categoriesState:[],
        productInCategoryState:[],
        categoryID:null,
        productStatusState:null,
        productErrorState:null,
        statusState:null,
        errorState:null,
    },
    reducers:{
        getCategoryId(state,action){
            state.categoryID = action.payload;
            localStorage.setItem('categoryId',action.payload);
        },
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
        builder.addCase(feachProductInCategory.fulfilled,(state,action)=>{
            state.productInCategoryState = action.payload;
            state.productStatusState = 'fulfilled';
            state.productErrorState = null;
        });
        builder.addCase(feachProductInCategory.pending,(state)=>{
            state.productStatusState = 'pending';
            state.productErrorState = null;
        });
        builder.addCase(feachProductInCategory.rejected,(state,action)=>{
            state.productStatusState = 'rejected';
            state.productErrorState = action.payload;
        });

    }
})

export default categoriesDataSlice.reducer;
export const selectCategoriesState = (state)=> state.categoriesData.categoriesState;
export const selectStatusState = (state)=>state.categoriesData.statusState;
export const selectErrorState = (state)=>state.categoriesData.errorState;
export const selectProductInCategoryState = (state)=> state.categoriesData.productInCategoryState;
export const selectProductStatusState = (state)=>state.categoriesData.productStatusState;
export const selectProductErrorState = (state)=>state.categoriesData.productErrorState;
export const selectCategoryId = (state)=>state.categoriesData.categoryID;
export const {getCategories} = categoriesDataSlice.actions;
export const {getCategoryId} = categoriesDataSlice.actions;
