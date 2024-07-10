import React,{ useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Home/Navbar';
import Hero from './Pages/Home/Hero';
import Content from './Pages/Home/Content';
import Collections from './Pages/Home/Collections';
import Products from './Pages/Home/Products';
import OneProduct from './Pages/Home/OneProduct';
import Footer from './Pages/Footer';
import ProductDetail from './Pages/Products/ProductDetail';
import ScrollToTop from './ScrollToTop';
import Cart from './Pages/Cart/Cart';
import Wishlist from './Pages/Wishlist/Wishlist';
import NewArrival from './Pages/Home/NewArrival';
import NewArrivalPage from './Pages/New Arrival/NewArrivalPage';
import Whatsapp from './Pages/Whatsapp';
import Login from './Pages/Auth/login';
import Register from './Pages/Auth/Register';
import Return from './Pages/Return/Return';
import AllProducts from './Pages/Products/AllProducts';
import User from './Pages/User/User';
import HotDeals from './Pages/Hot Deals/HotDeals';
import AboutUs from './Pages/Footer pages/AboutUs';
import TnC from './Pages/Footer pages/TnC';
import ReturnPolicy from './Pages/Footer pages/ReturnPolicy';
import ForgotPassword from './Pages/Auth/ForgotPassword';
import Checkout from './Pages/Cart/Checkout';
import AdminSign from './Pages/Auth/AdminSign';
import NavAfterLog from './Pages/NavAfterLog';
import AdminFooter from './Pages/AdminFooter';
import Sidebar from './Pages/Sidebar';
import AdminLogin from './Pages/Auth/AdminLogin';
import Home from './Dashboard/Home';
import AddCategoryList from './Dashboard/Category/AddCategoryList';
import CategoryList from './Dashboard/Category/CategoryList';
import NewCategory from './Dashboard/Category/NewCategory';
import OrderDetails from './Dashboard/Orders/OrderDetails';
import OrderList from './Dashboard/Orders/OrderList';
import AddProductList from './Dashboard/Product/AddProductList';
import AddtoProduct from './Dashboard/Product/AddtoProduct';
import ProductList from './Dashboard/Product/ProductList';
import AddReview from './Dashboard/Reviews/AddReview';
import Review from './Dashboard/Reviews/Review';
import AddUser from './Dashboard/User/AddUser';
import Userlist from './Dashboard/User/UserList';
import ProtectedRoute from './ProtectedRoute';
import Cap from './Pages/Sub Categories/Cap';
import Gloves from './Pages/Sub Categories/Gloves';
import Collection from './Dashboard/Category/Collection';
import AddBanner from './Dashboard/Category/AddBanner';
import AddNewArrival from './Dashboard/Product/AddNewArrival';
import AddNewArrivalBanner from './Dashboard/Product/AddNewArrivalBanner';
import AddOneProduct from './Dashboard/Product/AddOneProduct';
import SafetyProducts from './Pages/Display Category/SafetyProducts';
import SearchRescue from './Pages/Display Category/SearchRescue';
import SilicaGel from './Pages/Display Category/SilicaGel';
import CivilLab from './Pages/Display Category/CivilLab';
import MyOrders from './Pages/User/myOrders/MyOrders';
import FootStep from './Pages/Display Category/FootStep';
import SafetyShoes from './Pages/Display Category/SafetyShoes';
import IndustryScientific from './Pages/Display Category/IndustryScientific';
import FencingProducts from './Pages/Display Category/FencingProducts';
import CollectionList from './Dashboard/Category/CollectionList';
function App() {
  const [countcart, setCountcart] = useState(0);
  const [countwish, setCountwish] = useState(0);
  const [selectedcartItems, setSelectedcartItems] = useState([]);
  const [selectedwishItems, setSelectedwishItems] = useState([]);

  const addtocart = (item) =>{
    setCountcart(countcart+1);
    setSelectedcartItems([...selectedcartItems,item]);
  }
  const removecart = (itemToRemove) =>{
    setCountcart(countcart-1);
    const updatedItems = selectedcartItems.filter((item) => item !== itemToRemove);
    setSelectedcartItems(updatedItems);
  }

  const addwish = (item) =>{
    setCountwish(countwish+1);
    setSelectedwishItems([...selectedwishItems,item]);
  }
  const removewish = (itemToRemove) =>{
    const updatedItems = selectedwishItems.filter((item) => item!== itemToRemove);
    setSelectedwishItems(updatedItems);
    setCountwish(countwish-1);
  }
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <Hero/>
            <Whatsapp/>
            <Content addwish={addwish}/>
            <Collections/>
            <Products addwish={addwish}/>
            <OneProduct addtocart={addtocart} addwish={addwish}/>
            <NewArrival/>
            <Footer/>
          </>
        }/>
        <Route path='/product/:id' element={
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <ProductDetail addtocart={addtocart} addwish={addwish}/>
            <Footer/>
          </>
        }/>
        <Route path='/cart' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <Cart selectedItems={selectedcartItems} removecart={removecart}/>
            <Footer/>
          </>
        }/>
        <Route path='/checkout' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <Checkout selectedItems={selectedcartItems}/>
            <Footer/>
          </>
        }/>
        <Route path='/wish' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <Wishlist selectedItems={selectedwishItems} removewish={removewish}/>
            <Footer/>
          </>
        }/>
        <Route path='/cap' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <Cap/>
            <Footer/>
          </>
        }/>
        <Route path='/gloves' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <Gloves/>
            <Footer/>
          </>
        }/>
        <Route path='/newarrival' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <NewArrivalPage/>
            <Footer/>
          </>
        }/>
        {/*Dashboard*/}
         {/*Admin Login*/}
         <Route path='/AdminLogin' element = {
          <>
            <NavAfterLog/>
            <AdminLogin/>
            <AdminFooter/>
          </>
        }/>
         {/*Admin Sign*/}
         <Route path='/AdminSign' element = {
          <>
            
            <AdminSign/>
            <AdminFooter/>
          </>
        }/>
      
        <Route path='/addproduct' element = {
        <>
        <ProtectedRoute requiredRole={['Products', 'Main']}>
          <NavAfterLog/>
          <AddtoProduct/>
          <AdminFooter/>
          </ProtectedRoute>
        </>
      }/>
       <Route path='/addoneproduct' element = {
        <>
        <ProtectedRoute requiredRole={['Products', 'Main']}>
          <NavAfterLog/>
          <AddOneProduct/>
          <AdminFooter/>
          </ProtectedRoute>
        </>
      }/>
      <Route path='/productlist' element = {
        <>
          <ProtectedRoute requiredRole={['Products', 'Main']}>
          <NavAfterLog/>
          <ProductList/>
          <AdminFooter/>
          </ProtectedRoute>
        </>
      }/>
      <Route path='/addnewarrival' element = {
        <>
        <ProtectedRoute requiredRole={['Products', 'Main']}>
          <NavAfterLog/>
          <AddNewArrival/>
          <AdminFooter/>
          </ProtectedRoute>
        </>
      }/>
       <Route path='/addnewarrivalbanner' element = {
        <>
        <ProtectedRoute requiredRole={['Products', 'Main']}>
          <NavAfterLog/>
          <AddNewArrivalBanner/>
          <AdminFooter/>
          </ProtectedRoute>
        </>
      }/>
      <Route path='/NavAfterLog' element = {
        <>
          <NavAfterLog/>
          <Home/>
          <AdminFooter/>
        </>
      }/>
      <Route path='/newcategory' element = {
        <>
        <ProtectedRoute requiredRole={['Category', 'Main']}>
          <NavAfterLog/>
          <NewCategory/>
          <AdminFooter/>
          </ProtectedRoute>
        </>
      }/>
      <Route path='/collectionlist' element = {
        <>
        <ProtectedRoute requiredRole={['Category', 'Main']}>
          <NavAfterLog/>
          <CollectionList/>
          <AdminFooter/>
          </ProtectedRoute>
        </>
      }/>
      <Route path='/addbanner' element = {
        <>
        <ProtectedRoute requiredRole={['Category', 'Main']}>
          <NavAfterLog/>
          <AddBanner/>
          <AdminFooter/>
          </ProtectedRoute>
        </>
      }/>
      <Route path='/categorylist' element = {
        <>
         <ProtectedRoute requiredRole={['Category', 'Main']}>
          <NavAfterLog/>
          <CategoryList/>
          <AdminFooter/>
          </ProtectedRoute>
        </>
      }/>
      <Route path='/collection' element = {
        <>
         <ProtectedRoute requiredRole={['Category', 'Main']}>
          <NavAfterLog/>
          <Collection/>
          <AdminFooter/>
          </ProtectedRoute>
        </>
      }/>
      <Route path='/orderlist' element = {
        <>
         <ProtectedRoute requiredRole='Main'>
          <NavAfterLog/>
          <OrderList/>
          <AdminFooter/>
          </ProtectedRoute>
        </>
      }/>
       <Route path='/orderdetails' element = {
        <>
         <ProtectedRoute requiredRole='Main'>
          <NavAfterLog/>
          <OrderDetails/>
          <AdminFooter/>
          </ProtectedRoute>
        </>
      }/>
       <Route path='/review' element = {
        <>
        
        <ProtectedRoute requiredRole={['reviews_rating', 'Main']}>
          <NavAfterLog/>
          <Review/>
          <AdminFooter/>
          </ProtectedRoute>
        </>
      }/>
       <Route path='/addreview' element = {
        <>
         
        <ProtectedRoute requiredRole={['reviews_rating', 'Main']}>
          <NavAfterLog/>
          <AddReview/>
          <AdminFooter/>
          </ProtectedRoute>
        </>
      }/>
      <Route path='/userlist' element = {
        <>
       <ProtectedRoute requiredRole={['Userlist', 'Main']}>
          <NavAfterLog/>
          <Userlist/>
          <AdminFooter/>
          </ProtectedRoute>
        </>
      }/>
        <Route path='/adduser' element = {
        <>
        <ProtectedRoute requiredRole={['Userlist', 'Main']}>
          <NavAfterLog/>
          <AddUser/>
          <AdminFooter/>
          </ProtectedRoute>
        </>
      }/>
        
        <Route path='/login' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <Login/>
            <Footer/>
          </>
        }/>
        <Route path='/register' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <Register/>
            <Footer/>
          </>
        }/>
        <Route path='/return' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <Return/>
            <Footer/>
          </>
        }/>
        <Route path='/allproduct' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <AllProducts/>
            <Footer/>
          </>
        }/>
        <Route path='/myorders' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <MyOrders/>
            <Footer/>
          </>
        }/>
        <Route path='/Safety Products' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <SafetyProducts/>
            <Footer/>
          </>
        }/>
        <Route path='/Fencing Products' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <FencingProducts/>
            <Footer/>
          </>
        }/>
        <Route path='/Search & Rescue' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <SearchRescue/>
            <Footer/>
          </>
        }/>
        <Route path='/Foot Step' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <FootStep/>
            <Footer/>
          </>
        }/>
        <Route path='/Safety Shoes' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <SafetyShoes/>
            <Footer/>
          </>
        }/>
        <Route path='/Industry & Scientific' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <IndustryScientific/>
            <Footer/>
          </>
        }/>
        <Route path='/Silica Gel' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <SilicaGel/>
            <Footer/>
          </>
        }/> 
        <Route path='/Civil Lab Equipments' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <CivilLab/>
            <Footer/>
          </>
        }/>
        <Route path='/user' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <User/>
            <Footer/>
          </>
        }/>
        <Route path='/hotdeals' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <HotDeals/>
            <Footer/>
          </>
        }/>
        <Route path='/about' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <AboutUs/>
            <Footer/>
          </>
        }/>
        <Route path='/terms' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <TnC/>
            <Footer/>
          </>
        }/>
        <Route path='/returnpolicy' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <ReturnPolicy/>
            <Footer/>
          </>
        }/>
        <Route path='/forgotpassword' element = {
          <>
            <Navbar countcart={countcart} countwish={countwish}/>
            <ForgotPassword/>
            <Footer/>
          </>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
