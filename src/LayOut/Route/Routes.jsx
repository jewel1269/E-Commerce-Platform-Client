import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../../Header/Home/Home";
import Login from "../../Identity/Login";
import SignUp from "../../Identity/SignUp";
import Dashboard from "../Dashboard/Dashboard";
import DashboardPart from "../../User/DashboardPart/DashboardPart";
import OrderTable from "../../User/OrderTable/OrderTable";
import Payment from "../../User/Payment/Payment";
import AboutMe from "../../User/AboutMe/AboutMe";
import Cart from "../../User/MyCart/Cart";
import AdminDashboardPart from "../../Admin/AdminDashboardPart/AdminDashboardPart";
import AllOrders from "../../Admin/AllOrders/AllOrders";
import AllPayment from "../../Admin/AllPayment/AllPayment";
import BigSlae from "../../Admin/BigSale/BigSlae";
import NotMiss from "../../Admin/NotMiss/NotMiss";
import AddProductForm from "../../Admin/AddProductForm/AddProductForm";
import AllUser from "../../Admin/AllUser/AllUser";
import SectionOne from "../../MainPart/SectionOne/SectionOne";
import Details from ".././../MainPart/SectionOne/Details";
import VegitableShop from "../../Header/VagitableShop/VegitableShop";
import FreshFruit from "../../Header/FreshFruit/FreshFruit";
import Meat from "../../Header/Meat/Meat";
import Seafood from "../../Header/Seafood/Seafood";
import Drinks from "../../Header/Drinks/Drinks";
import PaymentPage from "../../PaymentPage/PaymentPage";
import FruitsDetails from "../../Header/FreshFruit/FruitsDetails";
import SuccessPayment from "../../PaymentInformation/PaymentSuccess/SuccessPayment";
import PrivateRoute from "../../Component/PrivateRoute/PrivateRoute";
import VagiDetails from "../../Header/VagitableShop/VagiDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <ErrorPage />, // Uncomment this line if you have an ErrorPage component
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/SignUp",
        element: <SignUp />
      },
      {
        path: "/details/:id",
        element: <Details />
      },
      {
        path: "vegitableShop",
        element: <VegitableShop />
      },
     
      {
        path: "freshFruit",
        element: <FreshFruit />
      },
      {
        path: "meat",
        element: <Meat />
      },
      {
        path: "seaFood",
        element: <Seafood />
      },
      {
        path: "drinks",
        element: <Drinks />
      },
      {
        path: "/PaymentPage/:id",
        element: <PaymentPage />
      },
      {
        path: "/FruitsDetails/:id",
        element: <FruitsDetails />
      },
      {
        path: "/VagiDetails/:id",
        element: <VagiDetails />
      },
      
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [

      //user part
      {
        path: 'userPart',
        element: <DashboardPart/>
      },
      {
        path: "OrderTable",
        element: <OrderTable/>
      },
      {
        path: "payment",
        element: <Payment/>
      },
      {
        path: "profile",
        element: <AboutMe/>
      },
      {
        path: "myCart",
        element: <Cart/>
      },

      //Admin Part
      {
        path: 'adminPart',
        element: <AdminDashboardPart/>
      },
      {
        path: 'AllOrders',
        element: <AllOrders/>
      },
      {
        path: 'AllPayment',
        element: <AllPayment/>
      },
      {
        path: 'BigSlae',
        element: <BigSlae/>
      },
      {
        path: 'NotMiss',
        element: <NotMiss/>
      },
      {
        path: 'AddProductForm',
        element: <AddProductForm/>
      },
      {
        path: 'AllUser',
        element: <AllUser/>
      },

    ]
  }
]);
