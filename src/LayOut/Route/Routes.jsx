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
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
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

    ]
  }
]);
