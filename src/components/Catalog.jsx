import CatalogSwiper from "./CatalogSwiper";
import './styles/catalog.css'


function Catalog(){




    return (
        <div className="catalogWrap">
        <div className="catalogListWrap">
            <h2>Catalog</h2>
            <button className="allCategories">All categories</button>
        </div>
        <CatalogSwiper/>
        </div>
    )
}
export default Catalog;