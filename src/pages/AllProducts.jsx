import { useDispatch,useSelector } from "react-redux";
import FilterComponent from "../UI/FilterComponent";
import { renderProducts,sortArray,productsFilter,discontFilter } from "../utils";
import { useEffect, useMemo } from "react";
import { feachSales } from "../core/redux/salesSlice";
import '../components/styles/productsInCategory.css';


function AllProducts(){
    const dispach = useDispatch();
    const {minPrice,maxPrice,isDiscont,sortStatus} = useSelector((state)=>state.categoriesData);
    const {salesState} = useSelector((state)=> state.salesData);


    useEffect(()=>{
       dispach(feachSales())
    },[dispach])
    const filteredArr = useMemo(() => {
        return sortArray(productsFilter(discontFilter(salesState, isDiscont), minPrice, maxPrice),sortStatus);
      }, [salesState, minPrice, maxPrice,isDiscont,sortStatus]);
    return(
        <div className="categoryProductsWrap">
            <h1 className="salesSectionTitle">All Products</h1>
            <FilterComponent/>
            <div className="productsContainer">
                {renderProducts(filteredArr)}
            </div>
        </div>
    )
}
export default AllProducts;