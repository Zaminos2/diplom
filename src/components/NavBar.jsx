import { basket, logo } from "../utils";
import "./styles/navBarStyle.css"
import {useNavigate} from 'react-router-dom'

function NavBar(){
  const navigate = useNavigate();
    return(
      <div className="navContainer">
        <img src={logo} alt="logo.img" className="mainLogo" />
        <div className="navLinksWrap">
            <button className="CatalogBtn">Catalog</button>
            <div className="rightWrap">
            <div className="navigationBox">
                <button className="navLinks" onClick={()=>navigate('/')}>HomePage</button>
                <button className="navLinks" onClick={()=>navigate('/products')}>All Products</button>
                <button className="navLinks" onClick={()=>navigate('/sales')}>All Sales</button>
            </div>
            <img src={basket} alt="basket.Img" className="basket" />
            </div>
        </div>
      </div>
    )
}

export default NavBar;