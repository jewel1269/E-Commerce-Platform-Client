import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';
import PrivateRoute from '../Component/PrivateRoute/PrivateRoute';

const PaymentPage = () => {
  const { id } = useParams();
  console.log(id);
  const [menus, setMenus] = useState([]);
  const { user } = useContext(AuthContext);
  const [about, setAbout] = useState('');

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get("https://e-commerce-platform-server.vercel.app/allMenus");
        setMenus(response.data);
      } catch (error) {
        console.error("Error fetching menus:", error);
      }
    };

    fetchMenus();
  }, []);

  const items = menus.find((item) => item?._id === id);
  console.log(items);

  const handlePayment = () => {
    // SSLCommerz payment integration
    const paymentInfo = {
      total_amount: items?.price || items?.priceRange,
      currency: 'EUR',
      tran_id: '123456',
      success_url: 'https://your-website.com/success',
      fail_url: 'https://your-website.com/fail',
      cancel_url: 'https://your-website.com/cancel',
      cus_name: user?.name || 'Customer Name',
      cus_email: user?.email || 'customer@example.com',
      cus_add1: 'Address Line 1',
      cus_phone: '0123456789',
      product_name: items?.title,
    };

    // Assuming SSLCommerz is integrated using an SDK or API call
    // You would replace this with actual SSLCommerz API call
    fetch('https://sandbox.sslcommerz.com/gwprocess/v4/api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentInfo),
    })
      .then(response => response.json())
      .then(data => {
        // Handle payment response
        console.log('Payment successful', data);
      })
      .catch(error => {
        console.error('Payment error', error);
      });
  };

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://e-commerce-platform-server.vercel.app/userInfo/${user?.email}`)
        .then((res) => {
          console.log(res.data);
          setAbout(res.data);
        })
        .catch((err) => {
          console.error("Error fetching user info:", err);
        });
    }
  }, [user?.email]);

  console.log(about);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-3xl">
        <div className="flex justify-between items-center mb-6">
          <div className="text-3xl font-semibold text-gray-700">Tasty Daily Ltd.</div>
          <img src="https://img.freepik.com/free-vector/restaurant-tasty-food-logo-design_460848-10307.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1719360000&semt=ais_user" alt="My Store Logo" className="h-12 rounded-full" />
        </div>
        <NavLink to={-1}>
          <p className="text-blue-500 mb-6 block">&lt; Back to merchant's site</p>
        </NavLink>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">How would you like to pay?</h2>
          <div className="grid grid-cols-3 gap-4">
            <img src="https://static.vecteezy.com/system/resources/previews/020/336/493/non_2x/visa-logo-visa-icon-free-free-vector.jpg" alt="Visa" className="h-20" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MasterCard" className="h-10 mt-5" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/1200px-PayPal_logo.svg.png" alt="PayPal" className="h-6 mt-5" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsqGj93kYqXfzX_5CIP4008mWtVqqldCb5Gw&s" alt="Giropay" className="h-12" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGII_JP57CNYTFsRnGzDIp-IOLnGigv7_fOA&s" alt="iDEAL" className="h-16" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/JCB-Logo.jpg" alt="JCB" className="h-12" />
            <img src="https://tds-images.thedailystar.net/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/images/2022/12/14/sslcommerz.png" alt="SSLCommerz" className="h-24" />
          </div>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <img src={items?.imageUrl} alt={items?.title} className="h-24 w-24" />
          <ul className="mb-4 flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <li className="flex justify-between mb-2">
                <span>Order reference: <strong>{items?._id}</strong></span>
              </li>
              <li className="flex justify-between mb-2">
                <span><strong>Title: </strong> {items?.title}</span>
              </li>
              <li className="flex justify-between mb-2">
                <span><strong>Description:</strong> {items?.description}</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>Discount: {items?.discount}</span>
              </li>
            </div>
            <div className="border-l border-gray-200 md:w-1/2 md:pl-4">
              <li className="flex justify-between mb-2">
                <span><strong>Customer Info.</strong></span>
              </li>
              <li className="flex justify-between mb-2">
                <span>{about?.username}</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>{about?.email}</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>{about?.phoneNumber}</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>{about?.address}</span>
              </li>
            </div>
          </ul>
          <div className="flex justify-between font-semibold text-lg mb-4">
            <span>Total</span>
            <span>€{items?.price || items?.priceRange}</span>
          </div>
          {
            user? <button
            onClick={handlePayment}
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700"
          >
            Continue to secure payment
          </button>
          :
         <PrivateRoute>
           <button
            
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700"
          >
            Continue to secure payment
          </button>
         </PrivateRoute>
          }
          <button className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 mt-4">
            Cancel payment
          </button>
        </div>
      </div>
      <div className="text-center mt-4 text-gray-600">
        Payment processed by <a href="https://ingenico.com" className="text-blue-500">Ingenico</a>
      </div>
      <div className="text-center text-gray-600 text-sm mt-2">
        <a href="https://ingenico.com/about" className="text-blue-500">About Ingenico</a> |
        <a href="https://ingenico.com/privacy" className="text-blue-500">Privacy policy</a> |
        <a href="https://ingenico.com/security" className="text-blue-500">Security</a> |
        <a href="https://ingenico.com/legal" className="text-blue-500">Legal info</a>
      </div>
    </div>
  );
};

export default PaymentPage;
