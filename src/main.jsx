import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './LayOut/Route/Routes.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import MessengerCustomerChat from 'react-messenger-customer-chat';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
    <MessengerCustomerChat
      pageId="YOUR_PAGE_ID"
      appId="876045617696408"
      htmlRef="YOUR_REF_STRING"
    />
  </React.StrictMode>,
)
