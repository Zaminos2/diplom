import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode} from 'swiper/modules';
import { useDispatch, useSelector } from "react-redux"
import { feachCategories, selectCategoriesState, selectStatusState } from "../core/redux/categoriesDataSlice";
import { useEffect } from "react";



function CatalogSwiper(){
    const dispatch = useDispatch();
    const categories = useSelector(selectCategoriesState);
    console.log(categories)
    useEffect(()=>{
        dispatch(feachCategories())
    },[dispatch])
    return(
        <div className="categorySwiperWrap">
        <Swiper
        slidesPerView={4}
        spaceBetween={20}
        freeMode={true}
        modules={FreeMode}
        className="mySwiper"
        >
        {categories.map((category)=>{
            return(
                <SwiperSlide key={category.id}>
                    <div className="categoryContainer">
                        <img src={category.image} alt="categoryImg" className="categoryImg" />
                        <p>{category.title}</p>
                    </div>
                </SwiperSlide>
            )
        })}

        </Swiper>
        </div>
    )
}
export default CatalogSwiper;