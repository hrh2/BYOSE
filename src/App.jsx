import './assets/styles/App.css'
import HomePage from './pages/HomePage/HomePage'
import ProductPage from './pages/ProductPage/ProductPage'
import ContactusPage from './pages/Contactus/ContactusPage'
import BlogPage from './pages/Blog/BlogPage'
import AccountUpdate from './pages/AcountPages/AccountUpdate'
import RegisterPage from './pages/AcountPages/RegisterPage'
import LoginPage from './pages/AcountPages/LoginPage'
import ErrorPage from './pages/ErrorPages/404'
import CartPage from './pages/CartPages/CartPage'
import Index from './pages/Index/Index'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StockPage from "./pages/StockPages/StockPage.jsx";
import VendorStockPage from "./pages/StockPages/VendorStockPage.jsx";
import VendorPages from "./pages/Dashboard/VendorPages.jsx";
import Inventory from "./pages/Dashboard/Inventory.jsx";
import NewProduct from "./pages/ProductPage/NewProduct.jsx";
import VendorOrders from "./pages/OrderPages/VendorOrders.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Test from "./components/Badge/Test.jsx";
import CustomersPage from "./pages/CustomerPages/CustomersPage.jsx";
import SupportedCategories from "./pages/Categories/SupportedCategories.jsx";
import EditProduct from "./pages/ProductPage/EditProduct.jsx";
import ProductGrid from "./pages/ProductPage/ProductGrid.jsx";
import CategoryProducts from "./pages/ProductPage/CategoryProducts.jsx";
import StoreProducts from "./pages/ProductPage/StoreProducts.jsx";
import PopupDisplay from "./components/Popups/PopupDisplay.jsx";
import Accessibility from "./pages/HelpPages/Accessibility.jsx";


function App() {

  return (
    <div className='w-[100vw] relative'>
      <PopupDisplay/>
      <Router>
        <Routes>
            <Route exact path='/' element={<Index/>}>
              <Route index element={<HomePage/>}/>
              {/* Account related */}
              <Route exact path='/login' element={<LoginPage/>}/>
              <Route exact path='/register' element={<RegisterPage/>}/>
              <Route exact path='/account' element={<AccountUpdate/>}/>
              {/* Product */}
              <Route exact path='/products' element={<ProductGrid topRated ={false}/>}/>
              <Route exact path='/topRated' element={<ProductGrid topRated ={true}/>}/>
              <Route exact path='/products/:productID' element={<ProductPage/>}/>
              <Route exact path='/categories' element={<SupportedCategories/>}/>
              <Route exact path='/categories/:category' element={<CategoryProducts/>}/>
              <Route exact path='/cart' element={<CartPage/>}/>
              {/*Stock Management*/}
              <Route exact path='/shops' element={<StockPage/>}/>
              <Route exact path='/stores/:vendorID' element={<StoreProducts/>}/>
              <Route exact path='/shops/:vendorID' element={<VendorStockPage/>}/>
              {/* Contact us */}
              <Route exact path='/contacts' element={<ContactusPage/>}/>
              <Route exact path='/accessibility' element={<Accessibility/>}/>
              {/* Blog and news */}
              <Route exact path='/blog' element={<BlogPage/>}/>
              {/* Page not found */}
              <Route exact path='/message' element={<ErrorPage/>}/>
            </Route>
          <Route exact path='/dashboard' element={<VendorPages/>}>
            <Route index element={<Dashboard/>}/>
            <Route exact path='/dashboard/inventory' element={<Inventory/>}/>
            <Route exact path='/dashboard/product/new' element={<NewProduct/>}/>
            <Route exact path='/dashboard/product/edit/:productID' element={<EditProduct/>}/>
            <Route exact path='/dashboard/orders' element={<VendorOrders/>}/>
            <Route exact path='/dashboard/customers' element={<CustomersPage/>}/>
            <Route exact path='/dashboard/test' element={<Test/>}/>
          </Route>
          <Route exact path='*' element={<Navigate to={`/message`}/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
