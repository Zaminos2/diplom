import {Input,Space,Checkbox,Select} from 'antd'
import { useDispatch} from 'react-redux'
import { debounce } from 'debounce';
import { getMaxPrice, getMinPrice,getSortStatus,toggleIsDiscont} from '../core/redux/categoriesDataSlice';
import '../components/styles/filterComponent.css'

function FilterComponent(){
    const dispatch = useDispatch();
    const debounceMin = debounce((event)=>dispatch(getMinPrice(event.target.value)),1000);
    const debounceMax =debounce((event)=>dispatch(getMaxPrice(event.target.value)),1000);
    return(
        <div className="filterContainer">
            <Space direction='horizontal'>
                <label htmlFor="Min">Price</label>
                <Input placeholder='min' defaultValue='' type='number' name='min' onChange={debounceMin}/>
                <Input placeholder='max' defaultValue='' type='number' name='max' onChange={debounceMax}/>
            </Space>
            <><label htmlFor="checkBox">Discounted products</label></>
            <Checkbox onChange={()=>{dispatch(toggleIsDiscont())}} name='checkBox'></Checkbox>
            <span>Sorted</span>
            <Select
            defaultValue='price'
            onChange={(selectedValue)=>{
                dispatch(getSortStatus(selectedValue))
            }}
            options={[
                {
                    value:'title',
                    label:'sort by Name'
                },
                {
                    value:'price',
                    label:'sort by Price'
                },
            ]}
            />
        </div>
    )
}
export default FilterComponent;