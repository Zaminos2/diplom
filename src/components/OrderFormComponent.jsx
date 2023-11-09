import {Input,Button} from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { feachOrder, getPhoneData, setOrderStatusState } from '../core/redux/orderSendSlice';
import { clearCart } from '../core/redux/cartSlice';

function OrderFormComponent({totalPrice}){
    const dispatch = useDispatch();
    const{userPhoneState} = useSelector((state)=>state.orderSendSlice);
    console.log(userPhoneState);

    function handleOrder(data){
        dispatch(feachOrder(data));
        dispatch(clearCart())
        setTimeout(()=>dispatch(setOrderStatusState()),2000);
    }

    return(
        <div className="formWrap">
            <h2 className="orderTitle">Order Details</h2>
            <div className="orderInfo">
                <p className="total">Total</p>
                <p className="orderPrice">{totalPrice}</p>
            </div>
            <Input type='text'
             placeholder='Phone numder'
            name='phone_number'
             onChange={(event)=>{dispatch(getPhoneData(event.target.value))}}
             defaultValue=''
             />
            <Button className='orderButton' size='large' onClick={()=>{handleOrder(userPhoneState)}}>Order</Button>
        </div>
    )
}
export default OrderFormComponent;