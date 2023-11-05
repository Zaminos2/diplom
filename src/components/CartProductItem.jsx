
import { BASE_URL } from "../utils";
import { useDispatch } from "react-redux";
import { getProductId } from "../core/redux/salesSlice";
import { decrement, increment, removeProduct } from "../core/redux/cartSlice";
import { useNavigate } from "react-router-dom";


function CartProductItem({image,title,counter,price,discont_price,id}){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function handleProductDetail(productId){
        dispatch(getProductId(productId))
        navigate('/productDetails');
       }
    return(
        <div className="cartItemContainer">
        <div className="cartItemsection">
            <img src={BASE_URL+image} alt="cartImg" className="cartItemImg"  onClick={()=>{handleProductDetail(id)}}/>
        </div>
        <div className="cartTitleContainer">
            <p className="cartProductTitle">{title}</p>
            <div className="counterContainer">
                <button className="amountButton" onClick={()=>dispatch(decrement(id))}>-</button>
                <p>{counter}</p>
                <button className="amountButton" onClick={()=>dispatch(increment(id))}>+</button>
            </div>
        </div>
        <div className="cartItemsection">
            <p className={'discountPrice'}>{discont_price?discont_price:price}</p>
            {discont_price?<p className="price">{price}</p>:null}
        </div>
        <button onClick={()=>dispatch(removeProduct(id))} className="removeProduct">X</button>
    </div>
    )
}
export default CartProductItem;