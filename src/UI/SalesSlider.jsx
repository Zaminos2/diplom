import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { feachSales} from "../core/redux/salesSlice";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import DiscountProductCard from "../components/DiscountProductKard";
import { calkulateDiscount } from "../utils";
import "../components/styles/salesSection.css"
import LoadingComponent from "./LoadingComponent";
import ServerError from "./ServerError";

function SalesSlider() {
  const dispach = useDispatch();
  const {salesState,statusState} = useSelector((state)=> state.salesData);


  useEffect(() => {
    dispach(feachSales());
  }, [dispach]);
  return (
    <section className="salesSection">
        <h2 id="SalesSection" className="salesSectionTitle">Sale</h2>
        {statusState==='pending'&&<LoadingComponent/>}
            {statusState==='rejected'&&<ServerError/>}
    <Swiper
      slidesPerView={4}
     slidesPerGroup={4}
      pagination={{ clickable: true }}
      spaceBetween={20}
      modules={[ Pagination]}
      className="mySwiper"
      breakpoints={{
        400: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        768:{
          slidesPerView: 4,
          slidesPerGroup: 4,
        }
      }}
    >
      {salesState.map((product) => {
        
        if(product.discont_price!=null){
        return(
         <SwiperSlide key={product.id}>
            <DiscountProductCard
            productId={product.id}
             img={product.image}
              price={product.price}
               discountPrice={product.discont_price}
                discount={calkulateDiscount(product.price,product.discont_price)}
                productTitle={product.title}
                productData={product}/>
        </SwiperSlide>
        )
        }
        return null;
      })}
    </Swiper>
    </section>
  );
}
export default SalesSlider;
