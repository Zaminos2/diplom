import { BASE_URL, calkulateDiscount } from "../utils";
import {Button} from 'antd'
import '../components/styles/productDetails.css'

function DiscountedProductDetails({title,price,discont_price,description,productImg}){
    return(
        <div className="productDetailwrap">
                        <h2 className="detailTitle">{title}</h2>
            <div className="productContainer">
                <div className="productImgContainer">
                    <img src={BASE_URL+productImg} alt="productImg" className="productimg" />
                </div>
                <div className="productInfoContainer">
                    <div className="pricesContainer">
                        <p className="discountPrice">{discont_price}$</p>
                        <p className="price">{price}$</p>
                        <p className="discount">{calkulateDiscount(price,discont_price)}%</p>
                    </div>
                    <Button className='orderButton'style={{width:'40%'}} size="large">To cart</Button>
                    <p className="productDescription">{description}</p>
                </div>
            </div>
        </div>
    )
}
export default DiscountedProductDetails;