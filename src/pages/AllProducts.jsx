import { useDispatch,useSelector } from "react-redux";
import FilterComponent from "../UI/FilterComponent";
import { renderProducts,sortArray,productsFilter,discontFilter } from "../utils";
import { useEffect} from "react";
import { feachSales } from "../core/redux/salesSlice";
import '../components/styles/productsInCategory.css';
import LoadingComponent from "../UI/LoadingComponent";
import ServerError from "../UI/ServerError";


function AllProducts(){
    const dispach = useDispatch();
    const {minPrice,maxPrice,isDiscont,sortStatus} = useSelector((state)=>state.categoriesData);
    const {salesState,statusState} = useSelector((state)=> state.salesData);
    

    useEffect(()=>{
       dispach(feachSales())
    },[dispach, minPrice, maxPrice,isDiscont,sortStatus])

    return(
        <div className="categoryProductsWrap">
            <h1 className="salesSectionTitle">All Products</h1>
            <FilterComponent/>
            {statusState==='pending'&&<LoadingComponent/>}
            {statusState==='rejected'&&<ServerError/>}
            <div className="productsContainer">
            
                {renderProducts(sortArray(productsFilter(discontFilter(salesState, isDiscont), minPrice, maxPrice),sortStatus))}
            </div>
        </div>
    )
}
export default AllProducts;