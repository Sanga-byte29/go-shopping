
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Cart from './features/cart/Cart';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from './pages/CartPage';
import Navbar from './features/navbar/Navbar';
import CheckoutPage from './pages/Checkout';
import ProductDetail from './features/product-list/components/ProductDetail';
import ProductDetailPage from './pages/ProductDetailPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: <CartPage> </CartPage>,
  },
  {
    path: "/checkout",
    element: <CheckoutPage> </CheckoutPage>,
  },
  {
    path: "/product-detail",
    element: <ProductDetailPage> </ProductDetailPage>,
  },
]);



function App() {
  return (
    <div className="App">
        
          <RouterProvider router={router} />
         
    </div>
  );
}

export default App;
