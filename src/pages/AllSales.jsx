import { useDispatch,useSelector } from "react-redux";
import { renderProducts,sortArray,productsFilter,discontFilter } from "../utils";
import { useEffect } from "react";
import { feachSales } from "../core/redux/salesSlice";
import '../components/styles/productsInCategory.css';
import SalesFilterComponent from "../UI/SalesFilterComponent";
import LoadingComponent from "../UI/LoadingComponent";

function AllSales(){
    const dispach = useDispatch();
    const {minPrice,maxPrice,sortStatus} = useSelector((state)=>state.categoriesData);
    const {salesState,statusState} = useSelector((state)=> state.salesData);

    useEffect(()=>{
       dispach(feachSales())
    },[dispach, minPrice, maxPrice,sortStatus])

    return(
        <div className="categoryProductsWrap">
            <h1 className="salesSectionTitle">All Sales</h1>
            <SalesFilterComponent/>
            {statusState==='pending'&&<LoadingComponent/>}
            <div className="productsContainer">
                {renderProducts(sortArray(productsFilter(discontFilter(salesState, true), minPrice, maxPrice),sortStatus))}
            </div>
        </div>
    )
}
export default AllSales;