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
        sortStatus:'price',
        minPrice:0,
        maxPrice:15000,
        categoryID:null,
        isDiscont:false,
        productStatusState:null,
        productErrorState:null,
        statusState:null,
        errorState:null,
    },
    reducers:{
        getSortStatus(state,action){
            state.sortStatus = action.payload
        },
        getMinPrice(state,action){
            state.minPrice =action.payload;
        },
        getMaxPrice(state,action){
            state.maxPrice =action.payload;
        },
        getCategoryId(state,action){
            state.categoryID = action.payload;
            localStorage.setItem('categoryId',action.payload);
        },
        getCategories(state,action){
            state.categoriesState=action.payload;
        },
        toggleIsDiscont(state){
            state.isDiscont = !state.isDiscont;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(feachCategories.fulfilled,(state,action)=>{
            state.categoriesState = action.payload;
            state.statusState = 'fulfilled';
            state.errorState = null;
        }).addCase(feachCategories.pending,(state)=>{
            state.statusState = 'pending';
            state.errorState = null;
        }).addCase(feachCategories.rejected,(state,action)=>{
            state.statusState = 'rejected';
            state.errorState = action.payload;
        }).addCase(feachProductInCategory.fulfilled,(state,action)=>{
            state.productInCategoryState = action.payload;
            state.productStatusState = 'fulfilled';
            state.productErrorState = null;
        }).addCase(feachProductInCategory.pending,(state)=>{
            state.productStatusState = 'pending';
            state.productErrorState = null;
        }).addCase(feachProductInCategory.rejected,(state,action)=>{
            state.productStatusState = 'rejected';
            state.productErrorState = action.payload;
        });

    }
})

export default categoriesDataSlice.reducer;

export const {getCategories,getCategoryId,getMinPrice,getMaxPrice,toggleIsDiscont,getSortStatus} = categoriesDataSlice.actions;
