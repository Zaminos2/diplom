import { useDispatch, useSelector } from "react-redux";
import CartProductItem from "../components/CartProductItem";
import "../components/styles/cartPage.css";
import { useEffect } from "react";
import { totalSumm } from "../core/redux/cartSlice";
import OrderFormComponent from "../components/OrderFormComponent";

function CartPage() {
  const { cartState, totalSummState } = useSelector((state) => state.shopCart);
  const dispatch = useDispatch();
  console.log(cartState)
  

  useEffect(() => {
    dispatch(totalSumm());
  }, [dispatch, cartState]);
  return (
    <div className="cartWrap">
      <h1 className="salesSectionTitle">Shopping Cart</h1>
      <div className="cartContainer">
        <div className="cartlist">
        <div className="returnContainer">
          <p>Back to the Store</p>
        </div>
          {cartState.map((product) => {
            return (
              <div key={product.id}>
                <CartProductItem {...product} />
              </div>
            );
          })}
        </div>
        <div className="orderFormWrap">
          <OrderFormComponent totalPrice={totalSummState.toFixed(2)}/>
        </div>
      </div>
    </div>
  );
}
export default CartPage;
