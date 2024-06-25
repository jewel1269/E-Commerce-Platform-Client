import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../../Header/Home/Home";
import Login from "../../Identity/Login";
import SignUp from "../../Identity/SignUp";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: '/login',
          element: <Login/>
    },
        {
          path: '/SignUp',
          element: <SignUp/>
    },
      ],
    },
  ]);