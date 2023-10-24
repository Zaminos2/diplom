import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { feachSales, selectSalesState } from "../core/redux/salesSlice";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import DiscountProductCard from "../components/DiscountProductKard";
import { calkulateDiscount } from "../utils";
import "../components/styles/salesSection.css"

function SalesSlider() {
  const dispach = useDispatch();
  const sales = useSelector(selectSalesState);
  console.log(sales);
  useEffect(() => {
    dispach(feachSales());
  }, [dispach]);
  return (
    <section className="salesSection">
        <h2 className="salesSectionTitle">Sale</h2>
    <Swiper
      slidesPerView={4}
     slidesPerGroup={4}
      pagination={{ clickable: true }}
      spaceBetween={20}
      modules={[ Pagination]}
      className="mySwiper"
    >
      {sales.map((product) => {
        
        if(product.discont_price!=null){
        return(
         <SwiperSlide key={product.id}>
            <DiscountProductCard
             img={product.image}
              price={product.price}
               discountPrice={product.discont_price}
                discount={calkulateDiscount(product.price,product.discont_price)}
                productTitle={product.title}/>
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