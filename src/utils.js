 import logoSvg from "./asets/icons/image_logo.svg";
 import basketImg from './asets/icons/icons8-shopping_bag1.svg';
 import welcomeImg from './asets/images/image2.svg';
 import discountImg from './asets/images/image3.svg';
 import errorImg from './asets/images/image12.svg'
 import ProductCard from "./components/ProductCard";
 import DiscountProductCard from "./components/DiscountProductKard";


 export function showingPath(pathname){
    if(pathname === '/')document.title = 'Home Page';
    if(pathname === '/allProducts')document.title = 'All products';
    if(pathname === '/allSales')document.title = 'All sales';
    if(pathname === '/categories')document.title = 'Categories';
    if(pathname === '/categoryProducts')document.title = 'Products in category';
    if(pathname === '/productDetails')document.title = 'Product Details';
    if(pathname === '/shopCart')document.title = 'Shop Cart';
    if(pathname === '*')document.title = '404 Not Found';
  }
  export function calkulateDiscount(price,discountPrice){
    if(price <=0 || discountPrice <=0){
      return 0;
    }
    const discount = ((price-discountPrice)/price)*100;
    return Math.round(discount*10)/10;
  }
  export function discontFilter(arr,isDiscont){
    if(!Array.isArray(arr)){
      return[];
    }else{
      if(isDiscont){
      return arr.filter((product)=>product.discont_price!==null);
      }else{
        return arr;
      }
    }
  }
  export function productsFilter(arr, minPrice, maxPrice) {
    if (!Array.isArray(arr)) {
      return [];
    } else {
      const filterProducts = arr.filter((product) => {
        const productPrice = product.discont_price!==null ? product.discont_price : product.price;
        const minPriceFloat = parseFloat(minPrice);
        const maxPriceFloat = parseFloat(maxPrice);
        if (isNaN(minPriceFloat) && isNaN(maxPriceFloat)) {
          return true; 
        }
        if (!isNaN(minPriceFloat) && !isNaN(maxPriceFloat)) {
          return productPrice >= minPriceFloat && productPrice <= maxPriceFloat;
        }
        if (!isNaN(minPriceFloat)) {
          return productPrice >= minPriceFloat;
        }  
        if (!isNaN(maxPriceFloat)) {
          return productPrice <= maxPriceFloat;
        }
        return true;
      });
      return filterProducts;
    }
  }
  export function sortArray(arr, sortBy) {
    const validSortOptions = ['title', 'price', 'discont_price'];
    if (validSortOptions.includes(sortBy)) {
      arr.sort((a, b) => {
        if (sortBy === 'price' && a.discont_price !== null && b.discont_price !== null) {
          return a.discont_price - b.discont_price;
        } else if (a[sortBy] < b[sortBy]) {
          return -1;
        } else if (a[sortBy] > b[sortBy]) {
          return 1;
        }
        return 0;
      });
    } else {
      console.error('Incorrect sort option');
    }
    return arr;
  }
  export function renderProducts(arr){
   return arr.map((product) => {
      return product.discont_price === null ? (
         <ProductCard
         productId={product.id}
         key={product.id}
           img={product.image}
           price={product.price}
           productTitle={product.title}
           productData={product}
         />
       ) : (
         <DiscountProductCard
         productId={product.id}
         key={product.id}
         img={product.image}
         price={product.price}
         productTitle={product.title}
         discountPrice={product.discont_price}
         discount={calkulateDiscount(product.price,product.discont_price)}
         productData={product}
         />
       );
     })

  }
  
  export function isLoading(state,statusState,errorState){
    return {
      ...state,
      [statusState]: 'pending',
      [errorState] : null
    }
  }
  export function isError(state,statusState,errorState,payload){
    return {
      ...state,
      [statusState]: 'rejected',
      [errorState]: payload
    }

  }
  export function isFulfiled( state,statusState,errorState,payload,data){
    return{
      ...state,
     [data]:payload,
      [statusState]: 'fulfilled',
      [errorState]: null
    }
  }
 export const logo = logoSvg;
 export const basket = basketImg;
 export const bannerImg = welcomeImg;
 export const discount = discountImg;
 export const errorPage = errorImg;
 export const phoneNumber = '+49 999 999 99 99'
 export const address = 'Linkstraße 2, 8 OG, 10785, Berlin, Deutschland'

 export const BASE_URL = 'http://localhost:3333'
