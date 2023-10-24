import { BASE_URL } from "../utils";
import "./styles/discountProductKardStyle.css"



function DiscountProductCard({img,price,discountPrice,discount,productTitle}){
return(
    <div className="productKard">
        <img src={BASE_URL+img} alt="productImg" className="productImg"/>
        <div className="priceContainer">
            <p className="discountPrice">{discountPrice}$</p>
            <p className="price">{price}$</p>
            <p className="discount">-{discount}%</p>
        </div>
        <p className="productTitle">{productTitle}</p>
    </div>
)
}
export default DiscountProductCard;