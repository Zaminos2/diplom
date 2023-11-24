import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Drawer } from "antd";
import { useNavigate } from "react-router-dom";
import { basket } from "../utils";
import { useSelector } from "react-redux";
import CartCounter from "./CartCounter";

function Burger() {
  const cartState = useSelector((state) => state.shopCart.cartState);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  function handleNavigate(path) {
    navigate(path);
    setOpen(false);
  }
  return (
    <>
      <div className="burgerWrap">
        <MenuOutlined onClick={showDrawer} />
        {cartState.length > 0 && <CartCounter cartState={cartState} />}
      </div>
      <Drawer onClose={onClose} open={open}>
        <div className="drawerWrap">
          <button className="navLinks" onClick={() => handleNavigate("/")}>
            HomePage
          </button>
          <button
            className="navLinks"
            onClick={() => handleNavigate("/allProducts")}
          >
            All Products
          </button>
          <button
            className="navLinks"
            onClick={() => handleNavigate("/allSales")}
          >
            All Sales
          </button>
          <div className="basketwrap">
            <img
              src={basket}
              alt="basket.Img"
              onClick={() => handleNavigate("/shopCart")}
            />
            {cartState.length>0&&<CartCounter cartState={cartState}/>}
          </div>
        </div>
      </Drawer>
    </>
  );
}
export default Burger;
