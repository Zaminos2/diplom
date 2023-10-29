import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import './styles/categorySwiperStyles.css'
import { FreeMode} from 'swiper/modules';
import { useDispatch, useSelector } from "react-redux"
import { feachCategories,getCategoryId} from "../core/redux/categoriesDataSlice";
import { useEffect } from "react";
import { BASE_URL } from "../utils";
import { useNavigate } from "react-router-dom";



function CatalogSwiper(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {categoriesState} = useSelector((state)=>state.categoriesData)
  
    function handlerProductsInCategory(id) {
        dispatch(getCategoryId(id));
        navigate('/categoryProducts');
    }
   
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
        {categoriesState.map((category)=>{
            return(
                <SwiperSlide key={category.id}>
                    <div className="categoryContainer" onClick={()=>{handlerProductsInCategory(category.id)}}>
                        <img src={ BASE_URL+category.image} alt="categoryImg" className="categoryImg" />
                        <p className="categoryTitle">{category.title}</p>
                    </div>
                </SwiperSlide>
            )
        })}

        </Swiper>
        </div>
    )
}
export default CatalogSwiper;