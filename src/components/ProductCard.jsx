import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils";
import { getProductId } from "../core/redux/salesSlice";
import { useNavigate } from "react-router-dom";

function ProductCard({img,price,productTitle,productId}) {
  const dispach = useDispatch();
  const navigate = useNavigate();
  function handleProductDetail(productId){
   dispach(getProductId(productId))
   
   navigate('/productDetails');
  }
  return (
    <div className="productKard" >
      <img src={BASE_URL + img} alt="productImg" className="productImg" onClick={()=>{handleProductDetail(productId)}} />
      <div className="priceContainer">
        <p className="discountPrice">{price}$</p>
      </div>
      <p className="productTitle">{productTitle}</p>
    </div>
  );
}

export default ProductCard;
