import { BASE_URL} from "../utils";
import {Button} from 'antd';

function ProductDetails({title,price,description,productImg}){
    return(
        <div className="productDetailwrap">
        <h2>{title}</h2>
<div className="productContainer">
<div className="productImgContainer">
    <img src={BASE_URL+productImg} alt="productImg" className="productimg" />
</div>
<div className="productInfoContainer">
    <div className="pricesContainer">
        <p className="discontPrice">{price}</p>
    </div>
    <Button className='addToCart' size="large">To cart</Button>
    <p className="productDescription">{description}</p>
</div>
</div>
</div>
    )
}
export default ProductDetails;