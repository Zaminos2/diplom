import { BASE_URL } from "../utils";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../core/redux/cartSlice";
import { useNavigate } from "react-router-dom";

function ProductDetails({ productData}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleToCart(){
      dispatch(addToCart(productData,productData.id));
      navigate('/shopCart');
  };
  return (
    <div className="productDetailwrap">
      <h2>{productData.title}</h2>
      <div className="productContainer">
        <div className="productImgContainer">
          <img
            src={BASE_URL + productData.image}
            alt="productImg"
            className="productimg"
          />
        </div>
        <div className="productInfoContainer">
          <div className="pricesContainer">
            <p className="discountPrice">{productData.price}</p>
          </div>
          <Button className="orderButton" size="large" style={{width:'40%'}} onClick={()=>handleToCart()}>
            To cart
          </Button>
          <p className="productDescription">{productData.description}</p>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
