import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../Shares/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Forms/SignUp";
import LogIn from "../Pages/Forms/LogIn";
import ProductDetails from "../Pages/Products/ProductDetails";
import DashboardLayout from "../Layouts/DashboardLayout";
import EditProduct from "../Pages/Dashboard/EditProduct/EditProduct";
import PrivateRoute from "./PrivateRoute";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AllProducts from "../Pages/Products/AllProducts";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import UserProfile from "../Pages/Dashboard/UserProfile/UserProfile";
import Carts from "../Pages/Carts/Carts";
import AddProducts from "../Pages/Dashboard/AddProducts/AddProducts";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import ContactUs from "../Pages/ContactUs/ContactUs";
// import FilterByCategorey from "../Pages/FilterByCategorey/FilterByCategorey";
export const routes = createBrowserRouter([
    {
     path: '/',
     element: <Main />,
     errorElement: <ErrorPage />,
     children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path:'/signUp',
            element: <SignUp />
          },
          {
            path:'/login',
            element: <LogIn />
          },
          {
            path:'/aboutUs',
            element: <AboutUs />
          },
          {
            path:'/contactUs',
            element: <ContactUs />
          },
          {
            // https://repair-mobile-market.onrender.com
            path:'/allProducts',
            loader: async()=> await fetch(`https://repair-mobile-market.onrender.com/usedMobile`),
            element: <AllProducts />
          },
       
        {
            path: '/mobile/:id',
            loader: async({params})=> await fetch(`https://repair-mobile-market.onrender.com/mobile/${params.id}`),
            element: <ProductDetails />
        },
     ]
    },
    {
        path: '/dashboard',
        errorElement: <ErrorPage />,
        element: <PrivateRoute> <DashboardLayout /></PrivateRoute>,
        children: [
            {
                index: true,
                element: <DashboardHome />,
              },
            
            {
                path: '/dashboard/addProducts',
                element:<AddProducts /> ,
                // loader: async({params})=> await fetch(`https://repair-mobile-market.onrender.com/product/${params.id}`),
            },
            {
              path: '/dashboard/cart',
              element: <Carts />
          },
            {
                path: '/dashboard/myProducts',
                element: <MyProducts />

            },
            {
                path: '/dashboard/myOrders',
                element: <MyOrders />

            },
            {
                path: '/dashboard/editProduct/:id',
                element: <EditProduct />,
                loader: async({params})=> await fetch(`https://repair-mobile-market.onrender.com/myProducts/${params.id}`),
            },
            {
                path: '/dashboard/allUsers',
                element: <AllUsers />

            },
            {
                path: '/dashboard/userProfile',
                element: <UserProfile />

            },
            
        ]
    }
  
])