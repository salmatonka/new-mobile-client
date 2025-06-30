import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../Shares/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Forms/SignUp";
import LogIn from "../Pages/Forms/LogIn";
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
import FilterByCategorey from "../Pages/Category/FilterByCategorey";
import Products from "../Pages/Products/Products";
import Blog from "../Others/Blog/Blog";
import Offers from "../Others/Offers/Offers";
import HomeProducts from "../Pages/HomePages/HomeProducts";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
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
        path: '/signUp',
        element: <SignUp />
      },
      {
        path: '/logIn',
        element: <LogIn />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/offers',
        element: <Offers />
      },
      {
        path: '/aboutUs',
        element: <AboutUs />
      },
      {
        path: '/contactUs',
        element: <ContactUs />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/usedMobile/:categorey',
        loader: async ({ params }) => await fetch(`https://repair-mobile-market.onrender.com/usedMobile/${params.categorey}`),
        element: <FilterByCategorey></FilterByCategorey>
      },
      {
        // https://repair-mobile-market.onrender.com
        path: '/homeProducts',
        loader: async () => await fetch(`https://repair-mobile-market.onrender.com/usedMobile`),
        element: <HomeProducts />
      },

      {
        path: '/mobile/:id',
        loader: async ({ params }) => await fetch(`https://repair-mobile-market.onrender.com/mobile/${params?.id}`),
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
        element: <AddProducts />,
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
        loader: async ({ params }) => await fetch(`https://repair-mobile-market.onrender.com/myProducts/${params.id}`),
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