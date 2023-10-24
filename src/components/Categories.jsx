import { useDispatch, useSelector } from "react-redux";
import { feachCategories, feachProductInCategory, getCategoryId, selectCategoriesState } from "../core/redux/categoriesDataSlice";
import { BASE_URL } from "../utils";
import { useEffect } from "react";
import './styles/categories.css';
import { useNavigate } from "react-router-dom";


function Categories(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const categories = useSelector(selectCategoriesState);
    useEffect(()=>{
        dispatch(feachCategories())
    },[dispatch]);
     function handlerProductsInCategory(id) {
        dispatch(getCategoryId(id));
        dispatch(feachProductInCategory(id))
        .then(()=>{navigate('/categoryProducts')});
    }
    return(
        <div className="categoriesWrap">
            {categories.map((category)=>{
                return(
                    <div key={category.id} className="categoryContainer" onClick={()=>{handlerProductsInCategory(category.id)}}>
                    <img src={ BASE_URL+category.image} alt="categoryImg" className="categoryImg" />
                    <p className="categoryTitle">{category.title}</p>
                </div>
                )
            })}
        </div>
    )
}
export default Categories;