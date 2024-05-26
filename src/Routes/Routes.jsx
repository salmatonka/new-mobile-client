import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../Shares/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Forms/SignUp";
import LogIn from "../Pages/Forms/LogIn";
import ProductDetails from "../Pages/Products/ProductDetails";
import DashboardLayout from "../Layouts/DashboardLayout";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import MyProduct from "../Pages/Dashboard/MyProduct/MyProduct";
import EditProduct from "../Pages/Dashboard/EditProduct/EditProduct";
import MyProductTable from "../Pages/Dashboard/MyProduct/MyProductTable";
import PrivateRoute from "./PrivateRoute";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
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
        //   {
        //     path: '/product/:category',
        //     loader:async({params})=> await fetch(`http://localhost:3000/categories/${params.category}`),
        //     element: <FilterByCategorey />
        // },
        {
            path: '/product/:id',
            loader: async({params})=> await fetch(`http://localhost:3000/product/${params.id}`),
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
                path: '/dashboard/addProduct',
                element:<AddProduct /> ,
                // loader: async({params})=> await fetch(`http://localhost:3000/product/${params.id}`),
            },
           
            {
                path: '/dashboard/myProduct',
                element: <MyProduct />

            },
            {
                path: '/dashboard/editProduct/:id',
                element: <EditProduct />,
                loader: async({params})=> await fetch(`http://localhost:3000/product/${params.id}`),
            },
            
        ]
    }
  
])