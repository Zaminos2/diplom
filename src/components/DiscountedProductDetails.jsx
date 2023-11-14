import { BASE_URL, calkulateDiscount } from "../utils";
import {Button} from 'antd'
import '../components/styles/productDetails.css'
import { useDispatch } from "react-redux";
import { addToCart } from "../core/redux/cartSlice";
import { useNavigate } from "react-router-dom";

function DiscountedProductDetails({productData}){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function handleToCart(){
        dispatch(addToCart(productData,productData.id));
        navigate('/shopCart');
    };
    return(
        <div className="productDetailwrap">
                        <h2 className="detailTitle">{productData.title}</h2>
            <div className="productContainer">
                <div className="productImgContainer">
                    <img src={BASE_URL+productData.image} alt="productImg" className="productimg" />
                </div>
                <div className="productInfoContainer">
                    <div className="pricesContainer">
                        <p className="discountPrice">{productData.discont_price}$</p>
                        <p className="price">{productData.price}$</p>
                        <p className="discount">{calkulateDiscount(productData.price,productData.discont_price)}%</p>
                    </div>
                    <Button className='orderButton'style={{width:'40%'}} onClick={()=>handleToCart()} size="large">To cart</Button>
                    <p className="productDescription">{productData.description}</p>
                </div>
            </div>
        </div>
    )
}
export default DiscountedProductDetails;