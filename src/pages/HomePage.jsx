import Catalog from "../components/Catalog";
import DiscountOffer from "../components/DiscountOffer";
import Welkome from "../components/Welcome";


function HomePage(){
    return(<> 
        <Welkome/>
       <Catalog/>
        <DiscountOffer/>
        </>
    )
}
export default HomePage;