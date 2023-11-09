import { discount } from "../utils";
import {Button, Input,Select,Space} from "antd"
import './styles/discountOffer.css'
import { feachSale, setSaleStatusState } from "../core/redux/orderSendSlice";
import { useDispatch,useSelector } from "react-redux";
import { getPhoneData } from "../core/redux/orderSendSlice";



function DiscountOffer(){
    const options = [
        {
            label:'+49',
            value:'+49'
        },
        {
            label:"+380",
            value:"+380"
        }
    ]
    const dispatch = useDispatch();
    const{userPhoneState} = useSelector((state)=>state.orderSendSlice);
    function handleDiscount(data){
        dispatch(feachSale(data));
        setTimeout(()=>dispatch(setSaleStatusState()),2000);
    }
    return(
        <div className="discountWrapper">
            <div className="discountImgWrap">
            <img src={discount} alt="discountImg" className="discountImg" />
            </div>
            <div className="inputWrap">
                <h2 className="dicountTitle">5% off</h2>
                <h3 className="discountCondition">on the first order</h3>
                <Space direction="vertical" size='large'>
                    <Space.Compact size="large" style={{width:'65%'}}>
                        <Select defaultValue='+49' options={options}/>
                        <Input type="text" 
                        className="phoneInput"
                        onChange={(event)=>{dispatch(getPhoneData(event.target.value))}}
                        defaultValue=''
                        />
                    </Space.Compact>
                </Space>
                <Button className="getDiscount" size="large" style={{width:'65%'}} onClick={()=>{handleDiscount(userPhoneState)}}>Get a discount</Button>
            </div>
        </div>
    )
}
export default DiscountOffer;