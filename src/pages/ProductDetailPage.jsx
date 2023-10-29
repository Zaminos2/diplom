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
    console.log(productState[0],productIdState)

    if (Array.isArray(productState) && productState.length > 0) {
        const product = productState[0];
        if(product.discont_price){
            return(
                <DiscountedProductDetails
                title={productState[0].title}
                price={productState[0].price}
                discont_price={productState[0].discont_price}
                description={productState[0].description}
                productImg={productState[0].image}
                />
            )
        }else{
            return(
                <ProductDetails
                title={productState[0].title}
                price={productState[0].price}
                description={productState[0].description}
                productImg={productState[0].image}
                />
            )
        }
    
    }

}
export default ProductDetailsPage;