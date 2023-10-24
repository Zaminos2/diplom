import { useNavigate } from "react-router-dom";
import CatalogSwiper from "./CatalogSwiper";
import './styles/catalog.css';


function Catalog(){
 const navigate = useNavigate();
    return (
        <div className="catalogWrap">
        <div className="catalogListWrap">
            <h2>Catalog</h2>
            <button className="allCategories" onClick={()=>{navigate('/categories')}}>All categories</button>
        </div>
        <CatalogSwiper/>
        </div>
    )
}
export default Catalog;