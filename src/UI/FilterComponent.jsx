import {Input,Space} from 'antd'

function FilterComponent({setMin,setMax,setIsCheked,setSortState}){
    return(
        <div className="filterContainer">
            <Space direction='horizontal'>
                <Input placeholder='min' value='' onChange={(event)=>{setMin(event.target.value)}}/>
                <Input placeholder='max' value='' onChange={(event)=>{setMax(event.target.value)}}/>
            </Space>
        </div>
    )
}
export default FilterComponent;