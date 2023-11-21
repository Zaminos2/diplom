import { Badge, Card } from "antd";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid"
import { getCategoryId } from "../core/redux/categoriesDataSlice";
import { getProductId } from "../core/redux/salesSlice";
import { useNavigate } from "react-router-dom";

function SearchListRender({arr,setState}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handlerProductsInCategory(id) {
    dispatch(getCategoryId(id));
    setState('');
    navigate('/categoryProducts');
}
function handleProductDetail(productId){
  dispatch(getProductId(productId));
  setState('');
  navigate('/productDetails');
 }
  return (
    <div className="listContainer">
         {arr.map((product) => {
    if (product.description) {
      return (
        <Badge.Ribbon text="products" color="green" key={uuid()}>
          <Card title={product.title} onClick={()=>handleProductDetail(product.id)}>
          {product.description}
          </Card>
        </Badge.Ribbon>
      );
    } else {
      return (
        <Badge.Ribbon text="categories" color="orange" key={uuid()}>
          <Card title={product.title} onClick={()=>handlerProductsInCategory(product.id)}></Card>
        </Badge.Ribbon>
      );
    }
  })};
    </div>
  )
    
}
export default SearchListRender;
