import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AdminEditProduct from './pages/Admin/AdminEditPage';
import AdminDashboard from './pages/Admin/AdminPage';
import AboutUs from './pages/User/Aboutus';
import BlogPage from './pages/User/BlogPage';
import AddToCartPage from './pages/User/CartPage';
import CheckoutPage from './pages/User/CheckoutPage';
import ContactPage from './pages/User/ContactPage';
import FaqPage from './pages/User/FaqPage';
import FavoritePage from './pages/User/FavoritePage';
import ForgotPasswordReset from './pages/User/ForgotPasswordPage';
import LandingPage from './pages/User/LandingPage';
import OrderDetails from './pages/User/OrderDetails';
import EsewaFailed from './pages/User/payment/EsewaFailed';
import EsewaSuccess from './pages/User/payment/EsewaSuccess';
import PostProduct from './pages/User/Postpage';
import ProductCollection from './pages/User/ProductCollectionPage';
import ProductDescriptionPage from './pages/User/ProductDescriptionPage';
import ProfilePage from './pages/User/ProfilePage';




// Import toastify CSS

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forgot' element={<ForgotPasswordReset />} />
        <Route path='/post' element={<PostProduct />} />
        <Route path='/productcollection' element={<ProductCollection />} />
        <Route path='/product/:productId' element={<ProductDescriptionPage />} />
        <Route path='/cart' element={<AddToCartPage />} />
        <Route path='/favorite' element={<FavoritePage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/faq' element={<FaqPage />} />
        <Route path='/esewa_payment_success' element={<EsewaSuccess />} />
        <Route path='/esewa_payment_failed' element={<EsewaFailed />} />
        <Route path='/orders/:orderId' element={<OrderDetails />} />
        <Route path='/aboutus' element={<AboutUs />} />

        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/admin/edit/:id' element={<AdminEditProduct />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <ToastContainer />
    </Router>
  )
}
