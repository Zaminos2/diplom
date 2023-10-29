import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import AllProducts from './pages/AllProducts';
import AllSales from './pages/AllSales';
import Footer from './components/Footer';
import AllCategories from './pages/AllCategories';
import ProductsInCategory from './components/ProductsInCategory';
import ErrorPage from './pages/ErrorPage';
import ProductDetailsPage from './pages/ProductDetailPage';

function App() {
  return (
    <Router>
      <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/categories' element={<AllCategories/>}/>
      <Route path='/allProducts' element={<AllProducts/>}/>
      <Route path='/categoryProducts' element={<ProductsInCategory/>}/>
      <Route path='/Allsales' element={<AllSales/>}/>
      <Route path='/productDetails' element={<ProductDetailsPage/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
