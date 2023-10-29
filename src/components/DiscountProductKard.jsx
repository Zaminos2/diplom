import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils";
import "./styles/discountProductKardStyle.css"
import { getProductId } from "../core/redux/salesSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { useState } from "react";



function DiscountProductCard({img,price,discountPrice,discount,productTitle,productId,productData}){
   const dispach = useDispatch();
   const navigate = useNavigate();
   const {productCounterState} = useSelector((state)=> state.salesData)
   const [isactiv,setIsActiv]=useState(false);
  
   function handleMouseOn(){
    setIsActiv(true);
   };
   function handleMouseLeve(){
    setIsActiv(false);
   };
   function handleProductDetail(productId){
    dispach(getProductId(productId));
    navigate('/productDetails');
   }
   function handleSetProductData(){
   const udatedProduct = {...productData,productCounterState}
    localStorage.setItem('productsInCart',JSON.stringify(udatedProduct))
    
   }
return(
    <div className="productKard"  onMouseEnter={()=>handleMouseOn()} onMouseLeave={()=>handleMouseLeve()}>
        <img src={BASE_URL+img} alt="productImg" className="productImg" onClick={()=>{handleProductDetail(productId)}}/>
        <div className="priceContainer">
            <p className="discountPrice">{discountPrice}$</p>
            <p className="price">{price}$</p>
            <p className="discount">-{discount}%</p>
        </div>
        <p className="productTitle">{productTitle}</p>
        {isactiv?(<Button className="addToCart" onClick={()=>handleSetProductData()}>Add to cart</Button>):null}
    </div>
)
}
export default DiscountProductCard;