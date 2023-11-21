import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Drawer } from "antd";
import { useNavigate } from "react-router-dom";
import { basket } from "../utils";

function Burger() {
    const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  function handleNavigate(path){
    navigate(path);
    setOpen(false);
  }
  return (
    <>
      <MenuOutlined onClick={showDrawer} />
      <Drawer onClose={onClose} open={open}>
        <div className="drawerWrap">
        <button className="navLinks" onClick={() => handleNavigate("/")}>
          HomePage
        </button>
        <button className="navLinks" onClick={() => handleNavigate("/allProducts")}>
          All Products
        </button>
        <button className="navLinks" onClick={() => handleNavigate("/allSales")}>
          All Sales
        </button>
        <img
          src={basket}
          alt="basket.Img"
          onClick={() => handleNavigate("/shopCart")}
        />

        </div>
      </Drawer>
    </>
  );
}
export default Burger;
