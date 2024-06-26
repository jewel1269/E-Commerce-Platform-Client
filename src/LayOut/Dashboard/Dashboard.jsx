import React from 'react';
import { FaSearch, FaTachometerAlt, FaUser, FaTicketAlt, FaCog } from 'react-icons/fa';
import { PiBowlFoodBold } from 'react-icons/pi';
import { Outlet, Link } from 'react-router-dom';
import DashboardPart from '../../User/DashboardPart/DashboardPart';
import Nabvar from '../../Header/Nabver/Nabver';

const Dashboard = () => {
  return (
    <div>
      <Nabvar />
      <div className="flex flex-col md:flex-row">
        <aside className="flex flex-col w-full md:w-64 lg:w-80 h-screen px-4 overflow-y-auto bg-gray-50 border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
          <div className="relative mt-6">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaSearch className="w-5 h-5 text-gray-400" />
            </span>
            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              placeholder="Search"
            />
          </div>

          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <Link
                className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
                to="userPart"
              >
                <FaTachometerAlt className="w-5 h-5" />
                <span className="mx-4 font-medium">Dashboard</span>
              </Link>

              <Link
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                to="OrderTable"
              >
                <FaUser className="w-5 h-5" />
                <span className="mx-4 font-medium">Orders</span>
              </Link>

              <Link
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                to="payment"
              >
                <FaTicketAlt className="w-5 h-5" />
                <span className="mx-4 font-medium">Payment History</span>
              </Link>

              <Link
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                to="/products"
              >
                <FaCog className="w-5 h-5" />
                <span className="mx-4 font-medium">Products</span>
              </Link>

              <hr className="my-6 border-gray-200 dark:border-gray-600" />

              <Link
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                to="/profile"
              >
                <FaCog className="w-5 h-5" />
                <span className="mx-4 font-medium">Profile</span>
              </Link>
            </nav>

           
          </div>
        </aside>
        <main className="flex-1 p-6">
          <Outlet />
          {/* <DashboardPart /> */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
