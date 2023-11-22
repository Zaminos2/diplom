import { useDispatch, useSelector } from "react-redux";
import { feachCategories,getCategoryId } from "../core/redux/categoriesDataSlice";
import { BASE_URL } from "../utils";
import { useEffect } from "react";
import './styles/categories.css';
import { useNavigate } from "react-router-dom";


function Categories(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const categoriesState = useSelector((state)=>state.categoriesData.categoriesState)
    useEffect(()=>{
        dispatch(feachCategories())
    },[dispatch]);
     function handlerProductsInCategory(id) {
        dispatch(getCategoryId(id));
        navigate('/categoryProducts');
    }
    return(
        <div className="categoriesWrap">
            {categoriesState.map((category)=>{
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