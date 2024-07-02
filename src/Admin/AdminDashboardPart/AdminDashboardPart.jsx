// src/AdminDashboardPart.js
import React from 'react';
import CustomLineChart from './CustomLineChart/CustomLineChart';
import CustomPieChart from './CustomPieChart/CustomPieChart';

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Product Visits',
      data: [12, 19, 3, 5, 2, 3, 10],
      borderColor: '#6B46C1',
      backgroundColor: 'rgba(107, 70, 193, 0.2)',
      pointBackgroundColor: '#6B46C1',
      pointBorderColor: '#fff',
    },
  ],
};

const AdminDashboardPart = () => {
  return (
    <div className="lg:p-8 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white lg:p-6 rounded-lg shadow">
          <h2 className="text-gray-500 text-lg font-semibold mb-2">Customers</h2>
          <p className="text-3xl font-bold">45,679</p>
          <p className="text-green-500">Increase by 20%</p>
        </div>
        <div className="bg-white lg:p-6 rounded-lg shadow">
          <h2 className="text-gray-500 text-lg font-semibold mb-2">Orders</h2>
          <p className="text-3xl font-bold">80,927</p>
          <p className="text-green-500">Increase by 60%</p>
        </div>
        <div className="bg-white lg:p-6 rounded-lg shadow">
          <h2 className="text-gray-500 text-lg font-semibold mb-2">Delivery</h2>
          <p className="text-3xl font-bold">22,339</p>
          <p className="text-red-500">Decrease by 2%</p>
        </div>
        <div className="bg-white lg:p-6 rounded-lg shadow">
          <h2 className="text-gray-500 text-lg font-semibold mb-2">Users</h2>
          <p className="text-3xl font-bold">+1,900</p>
          <p className="text-gray-500">Steady growth</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white lg:p-6 rounded-lg shadow">
          <h2 className="text-gray-500 text-lg font-semibold mb-2">Product Categories</h2>
          <div className="lg:h-96 lg:w-96">
            <CustomPieChart />
          </div>
        </div>
        <div className="bg-white lg:p-6 rounded-lg shadow">
          <h2 className="text-gray-500 text-lg font-semibold mb-2">Product Visits</h2>
          <CustomLineChart data={data} />
        </div>
      </div>

      <div className="bg-white lg:p-6 rounded-lg shadow mb-6">
        <h2 className="text-gray-500 text-lg font-semibold mb-2">Revenue</h2>
        <p className="text-3xl font-bold">36,568</p>
        <div className="flex space-x-4">
          <p className="text-green-500">+40% Growth</p>
          <p className="text-red-500">2.5% Refund</p>
          <p className="text-purple-500">+23.6% Online</p>
        </div>
        <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</p>
      </div>

      {/* Add more components as needed */}
    </div>
  );
};

export default AdminDashboardPart;
