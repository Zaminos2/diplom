import { useSelector } from "react-redux";
import SalesSlider from "../UI/SalesSlider";
import Catalog from "../components/Catalog";
import DiscountOffer from "../components/DiscountOffer";
import Welkome from "../components/Welcome";
import ModalComponent from "../UI/ModalComponent";

function HomePage() {
  const saleStatusState=useSelector((state)=>state.orderSendSlice.saleStatusState);
  return (
    <div className="mainWrap">
      <Welkome />
      <Catalog />
      <DiscountOffer />
      <SalesSlider />
      {saleStatusState?(<ModalComponent text={'Discount recived'}/>):''}
    </div>
  );
}
export default HomePage;
