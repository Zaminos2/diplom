import Catalog from "../components/Catalog";
import DiscountOffer from "../components/DiscountOffer";
import Welkome from "../components/Welkome";


function HomePage(){
    return(<> 
        <Welkome/>
       <Catalog/>
        <DiscountOffer/>
        </>
    )
}
export default HomePage;