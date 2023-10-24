import { useDispatch, useSelector } from "react-redux";
import {
  feachProductInCategory,
  selectCategoryId,
  selectProductInCategoryState,
} from "../core/redux/categoriesDataSlice";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import {calkulateDiscount } from "../utils";
import DiscountProductCard from "./DiscountProductKard";
import './styles/productsInCategory.css';
import FilterComponent from "../UI/FilterComponent";

function ProductsInCategory() {
  const dispatch = useDispatch();
  const categoryId = useSelector(selectCategoryId);
  const proucts = useSelector(selectProductInCategoryState);
  const { category, data } = proucts;
  const [minPrice,setMinPrice]=useState('');
  useEffect(() => {
    dispatch(
      feachProductInCategory(
        categoryId !== null ? categoryId : localStorage.getItem("categoryId")
      )
    );
  }, [categoryId, dispatch]);
  console.log(data);
  if(category&&data){
  return (
    <section className="categoryProductsWrap">
      <h2 className="salesSectionTitle">{category.title}</h2>
      <FilterComponent/>
      <div className="productsContainer">
        {data.map((product) => {
         return product.discont_price === null ? (
            <ProductCard
            key={product.id}
              img={product.image}
              price={product.price}
              productTitle={product.title}
            />
          ) : (
            <DiscountProductCard
            key={product.id}
            img={product.image}
            price={product.price}
            productTitle={product.title}
            discountPrice={product.discont_price}
            discount={calkulateDiscount(product.price,product.discont_price)}
            />
          );
        })}
      </div>
    </section>
  );
    }
}
export default ProductsInCategory;
