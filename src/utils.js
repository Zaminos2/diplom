 import logoSvg from "./asets/icons/image_logo.svg"
 import basketImg from './asets/icons/icons8-shopping_bag1.svg'
 import welcomeImg from './asets/images/image2.svg'
 import discountImg from './asets/images/image 3.svg'

 export function showingPath(pathname){
    if(pathname === '/')document.title = 'Home Page';
    if(pathname === '/allProducts')document.title = 'All products';
    if(pathname === '/allSales')document.title = 'All sales';
  }

 export const logo = logoSvg;
 export const basket = basketImg;
 export const bannerImg = welcomeImg;
 export const discount = discountImg;

 export const BASE_URL = 'http://localhost:3333'
