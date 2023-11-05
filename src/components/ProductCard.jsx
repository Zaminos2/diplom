import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils";
import { getProductId } from "../core/redux/salesSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addToCart } from "../core/redux/cartSlice";
import { Button } from "antd";

function ProductCard({img,price,productTitle,productId,productData}) {
  const dispach = useDispatch();
  const navigate = useNavigate();
  const [isactiv,setIsActiv]=useState(false);
  
  function handleMouseOn(){
   setIsActiv(true);
  };
  function handleMouseLeve(){
   setIsActiv(false);
  };
  function handleProductDetail(productId){
   dispach(getProductId(productId))
   navigate('/productDetails');
  }
  function handleSetProductData(){
    dispach(addToCart(productData,productId));
   }
  return (
    <div className="productKard"  onMouseEnter={()=>handleMouseOn()} onMouseLeave={()=>handleMouseLeve()}>
      <img src={BASE_URL + img} alt="productImg" className="productImg" onClick={()=>{handleProductDetail(productId)}} />
      <div className="priceContainer">
        <p className="discountPrice">{price}$</p>
      </div>
      <p className="productTitle">{productTitle}</p>
      {isactiv?(<Button className="addToCart" onClick={()=>handleSetProductData()}>Add to cart</Button>):null}
    </div>
  );
}

export default ProductCard;
