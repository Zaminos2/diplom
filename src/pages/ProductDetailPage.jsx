import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { feachProduct } from "../core/redux/salesSlice";
import DiscountedProductDetails from "../components/DiscountedProductDetails";
import ProductDetails from "../components/ProductDetails";



function ProductDetailsPage(){
    const dispach = useDispatch();
    const {productState,productIdState} = useSelector((state)=>state.salesData);

    useEffect(()=>{
        dispach(feachProduct(productIdState?productIdState:localStorage.getItem('productId')))
    },[dispach,productIdState]);

    if (Array.isArray(productState) && productState.length > 0) {
        const product = productState[0];
        if(product.discont_price){
            return(
                <DiscountedProductDetails
                productData ={product}
                />
            )
        }else{
            return(
                <ProductDetails
                productData ={product}
                />
            )
        }
    
    }

}
export default ProductDetailsPage;