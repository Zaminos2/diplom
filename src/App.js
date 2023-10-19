import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import AllProducts from './pages/AllProducts';
import AllSales from './pages/AllSales';

function App() {
  return (
    <Router>
      <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/allProducts' element={<AllProducts/>}/>
      <Route path='/Allsales' element={<AllSales/>}/>
    </Routes>
    </Router>
  );
}

export default App;
