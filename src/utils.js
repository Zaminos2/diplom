 import logoSvg from "./asets/icons/image_logo.svg"
 import basketImg from './asets/icons/icons8-shopping_bag1.svg'
 import welcomeImg from './asets/images/image2.svg'
 import discountImg from './asets/images/image 3.svg'



 export function showingPath(pathname){
    if(pathname === '/')document.title = 'Home Page';
    if(pathname === '/allProducts')document.title = 'All products';
    if(pathname === '/allSales')document.title = 'All sales';
    if(pathname === '/categories')document.title = 'Categories';
  }
  export function calkulateDiscount(price,discountPrice){
    if(price <=0 || discountPrice <=0){
      return 0;
    }
    const discount = ((price-discountPrice)/price)*100;
    return Math.round(discount*10)/10;
  }



 export const logo = logoSvg;
 export const basket = basketImg;
 export const bannerImg = welcomeImg;
 export const discount = discountImg;
 export const phoneNumber = '+49 999 999 99 99'
 export const address = 'Linkstraße 2, 8 OG, 10785, Berlin, Deutschland'

 export const BASE_URL = 'http://localhost:3333'
