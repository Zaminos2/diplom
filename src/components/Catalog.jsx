import { useNavigate } from "react-router-dom";
import CatalogSwiper from "./CatalogSwiper";
import './styles/catalog.css';
import { useSelector } from "react-redux";
import LoadingComponent from "../UI/LoadingComponent";


function Catalog(){
 const navigate = useNavigate();
 const{statusState} =useSelector((state)=>state.categoriesData);
    return (
        <div className="catalogWrap">
        <div className="catalogListWrap">
            <h2 id="catalog">Catalog</h2>
            <button className="allCategories" onClick={()=>{navigate('/categories')}}>All categories</button>
        </div>
        {statusState==="pending"&&<LoadingComponent/>}
        <CatalogSwiper/>
        </div>
    )
}
export default Catalog;