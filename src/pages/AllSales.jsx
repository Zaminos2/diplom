import { useDispatch,useSelector } from "react-redux";
import { renderProducts,sortArray,productsFilter,discontFilter } from "../utils";
import { useEffect, useMemo } from "react";
import { feachSales } from "../core/redux/salesSlice";
import '../components/styles/productsInCategory.css';
import SalesFilterComponent from "../UI/SalesFilterComponent";

function AllSales(){
    const dispach = useDispatch();
    const {minPrice,maxPrice,sortStatus} = useSelector((state)=>state.categoriesData);
    const {salesState} = useSelector((state)=> state.salesData);

    useEffect(()=>{
       dispach(feachSales())
    },[dispach])
    const filteredArr = useMemo(() => {
        return sortArray(productsFilter(discontFilter(salesState, true), minPrice, maxPrice),sortStatus);
      }, [salesState, minPrice, maxPrice,sortStatus]);
    return(
        <div className="categoryProductsWrap">
            <h1 className="salesSectionTitle">All Sales</h1>
            <SalesFilterComponent/>
            <div className="productsContainer">
                {renderProducts(filteredArr)}
            </div>
        </div>
    )
}
export default AllSales;