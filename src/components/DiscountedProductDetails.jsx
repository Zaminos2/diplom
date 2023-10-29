import { BASE_URL, calkulateDiscount } from "../utils";
import {Button} from 'antd'

function DiscountedProductDetails({title,price,discont_price,description,productImg}){
    return(
        <div className="productDetailwrap">
                        <h2>{title}</h2>
            <div className="productContainer">
                <div className="productImgContainer">
                    <img src={BASE_URL+productImg} alt="productImg" className="productimg" />
                </div>
                <div className="productInfoContainer">
                    <div className="pricesContainer">
                        <p className="discontPrice">{discont_price}$</p>
                        <p className="price">{price}$</p>
                        <p className="discont">{calkulateDiscount(price,discont_price)}%</p>
                    </div>
                    <Button className='addToCart' size="large">To cart</Button>
                    <p className="productDescription">{description}</p>
                </div>
            </div>
        </div>
    )
}
export default DiscountedProductDetails;