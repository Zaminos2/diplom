import SearchComponent from "../UI/SearchComponent";
import { useMediaQuery } from "react-responsive";
import { basket, logo } from "../utils";
import "./styles/navBarStyle.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Burger from "../UI/Burger";
import CartCounter from "../UI/CartCounter";

function NavBar() {
  const navigate = useNavigate();
  const cartState = useSelector((state)=>state.shopCart.cartState);
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  return (
    <div className="navWrap">
      <div className="navContainer">
        <img src={logo} alt="logo.img" className="mainLogo" />
        <div className="navLinksWrap">
          <a href="#catalog">
            <button
              className="CatalogBtn"
              onClick={() => {
                navigate("/");
              }}
            >
              Catalog
            </button>
          </a>
          {isMobile ? (
            <Burger/>
          ) : (
            <div className="rightWrap">
              <div className="navigationBox">
                <button className="navLinks" onClick={() => navigate("/")}>
                  HomePage
                </button>
                <button
                  className="navLinks"
                  onClick={() => navigate("/allProducts")}
                >
                  All Products
                </button>
                <button
                  className="navLinks"
                  onClick={() => navigate("/allSales")}
                >
                  All Sales
                </button>
              </div>
              <div className="basketwrap">
              <img
                src={basket}
                alt="basket.Img"
                className="basket"
                onClick={() => navigate("/shopCart")}
              />
              {cartState.length>0&&<CartCounter cartState={cartState}/>}
              </div>
            </div>
          )}
        </div>
      </div>
      <SearchComponent />
    </div>
  );
}

export default NavBar;
