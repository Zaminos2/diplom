import { createSlice } from "@reduxjs/toolkit";

const getCartData = ()=>JSON.parse(localStorage.getItem('productsInCart'));
const setCartData = (state)=>localStorage.setItem('productsInCart',JSON.stringify(state.cartState))


const cartSlice = createSlice({
    name:"shopCart",
    initialState:{
        cartState:getCartData()??[],
        totalSummState:0
    },
    reducers:{
        clearCart(state) {
            state.cartState = [];
            setCartData(state);
          },
        addToCart(state,{payload}){
            const targetProduct = state.cartState.find((product)=>product.id===payload.id);
            if(targetProduct){
                targetProduct.counter++;
            }else{
                state.cartState.push({...payload,counter:1});
            }
            setCartData(state);
        },
        increment(state,{payload}){
            const targetProduct = state.cartState.find(({id})=>id===payload);
            targetProduct.counter++;
            setCartData(state);
        },
        decrement(state,{payload}){
            const targetProduct = state.cartState.find(({id})=>id===payload);
            if(targetProduct.counter===1){
                state.cartState = state.cartState.filter(({id})=>id!==payload);
            }else{
                targetProduct.counter--;
            }
            setCartData(state);
        },
        removeProduct(state,{payload}){
            state.cartState = state.cartState.filter(({id})=>id!==payload);
            setCartData(state);
        },
        totalSumm(state){
            const totalcost = state.cartState.reduce((total,product)=>{
                if(product.discont_price){
                    total+=product.discont_price*product.counter;
                }else{
                    total+=product.price*product.counter;
                }
                return total;
            },0);
            state.totalSummState =totalcost;
        }
    }
})

export default cartSlice.reducer;
export const {addToCart,increment,decrement,removeProduct,totalSumm,clearCart} = cartSlice.actions;