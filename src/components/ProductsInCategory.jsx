import { useDispatch, useSelector } from "react-redux";
import {
  feachProductInCategory,

} from "../core/redux/categoriesDataSlice";
import { useEffect} from "react";
import {productsFilter,discontFilter, sortArray, renderProducts} from "../utils";
import './styles/productsInCategory.css';
import FilterComponent from "../UI/FilterComponent";
import LoadingComponent from "../UI/LoadingComponent";

function ProductsInCategory() {
  const dispatch = useDispatch();

  const {categoryID,minPrice,maxPrice,productInCategoryState,isDiscont,sortStatus,productStatusState} = useSelector((state)=>state.categoriesData)
  const { category, data } = productInCategoryState;
  useEffect(() => {
    dispatch(
      feachProductInCategory(
        categoryID !== null ? categoryID : localStorage.getItem("categoryId")
      )
    );

  }, [categoryID, dispatch,minPrice,maxPrice,isDiscont,sortStatus]);


 
  if(category&&data){
  return (
    <section className="categoryProductsWrap">
      <h2 className="salesSectionTitle">{category.title}</h2>
      <FilterComponent/>
      
      <div className="productsContainer">
        {renderProducts(sortArray(productsFilter(discontFilter(data, isDiscont), minPrice, maxPrice),sortStatus))}
      </div>
    </section>
  );
    }
    return(
    <>
    {productStatusState==='pending'&&<LoadingComponent/>}
    </>
    )
}
export default ProductsInCategory;
