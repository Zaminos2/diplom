import {Input,Space,Checkbox,Select} from 'antd'
import { useDispatch} from 'react-redux'
import { getMaxPrice, getMinPrice,getSortStatus,toggleIsDiscont} from '../core/redux/categoriesDataSlice';
import '../components/styles/filterComponent.css'

function FilterComponent(){
    const dispatch = useDispatch();
    

    return(
        <div className="filterContainer">
            <Space direction='horizontal'>
                <label htmlFor="Min">Price</label>
                <Input placeholder='min' defaultValue='' type='number' name='min' onChange={(event)=>{dispatch(getMinPrice(event.target.value))}}/>
                <Input placeholder='max' defaultValue='' type='number' name='max' onChange={(event)=>{dispatch(getMaxPrice(event.target.value))}}/>
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