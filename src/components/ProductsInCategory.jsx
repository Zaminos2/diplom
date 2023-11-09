import { useDispatch, useSelector } from "react-redux";
import {
  feachProductInCategory,

} from "../core/redux/categoriesDataSlice";
import { useEffect} from "react";
import {productsFilter,discontFilter, sortArray, renderProducts} from "../utils";
import './styles/productsInCategory.css';
import FilterComponent from "../UI/FilterComponent";

function ProductsInCategory() {
  const dispatch = useDispatch();

  const {categoryID,minPrice,maxPrice,productInCategoryState,isDiscont,sortStatus} = useSelector((state)=>state.categoriesData)
  const { category, data } = productInCategoryState;
  console.log(productInCategoryState);
  useEffect(() => {
    dispatch(
      feachProductInCategory(
        categoryID !== null ? categoryID : localStorage.getItem("categoryId")
      )
    );

  }, [categoryID, dispatch]);
  const filteredArr = useEffect(() => {
    return sortArray(productsFilter(discontFilter(data, isDiscont), minPrice, maxPrice),sortStatus);
  }, [data, minPrice, maxPrice,isDiscont,sortStatus]);

 
  if(category&&data){
  return (
    <section className="categoryProductsWrap">
      <h2 className="salesSectionTitle">{category.title}</h2>
      <FilterComponent/>
      <div className="productsContainer">
        {renderProducts(filteredArr)}
      </div>
    </section>
  );
    }
}
export default ProductsInCategory;
