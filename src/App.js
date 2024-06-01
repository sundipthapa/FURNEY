
import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import AddToCartPage from './pages/CartPage';
import FaqPage from './pages/FaqPage';
import FavoritePage from './pages/FavoritePage';
import LandingPage from './pages/LandingPage';
import PostProduct from './pages/Postpage';
import ProductCollection from './pages/ProductCollectionPage';
import ProductDescriptionPage from './pages/ProductDescriptionPage';
export default function App() {
  return (
    <Router>

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/post' element={<PostProduct />} />
        <Route path='/productcollection' element={<ProductCollection />} />
        <Route path='/productdescription' element={<ProductDescriptionPage />} />
        <Route path='/cart' element={<AddToCartPage />} />
        <Route path='/favorite' element={<FavoritePage />} />
        <Route path='/faq' element={<FaqPage />} />

      </Routes>



    </Router>
  )
}