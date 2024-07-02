import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar
} from 'recharts';

const data = [
  { name: 'Mon', lastWeek: 4000, thisWeek: 2400 },
  { name: 'Tue', lastWeek: 3000, thisWeek: 1398 },
  { name: 'Wed', lastWeek: 2000, thisWeek: 9800 },
  { name: 'Thu', lastWeek: 2780, thisWeek: 3908 },
  { name: 'Fri', lastWeek: 1890, thisWeek: 4800 },
  { name: 'Sat', lastWeek: 2390, thisWeek: 3800 },
  { name: 'Sun', lastWeek: 3490, thisWeek: 4300 },
];

const pieData = [
  { name: 'Organic', value: 60 },
  { name: 'Direct', value: 25 },
  { name: 'Social Media', value: 15 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const barData = [
  { name: 'Pantry, Wine and Beer', percentage: 48 },
  { name: 'Electronics & Computers', percentage: 10 },
  { name: 'Toys & Games', percentage: 24 },
];

const DashboardPart = () => {
  return (
    <div className="lg:p-6 w-full bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white lg:p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">$995,600</h2>
          <p className="text-gray-600">GMV</p>
          <p className="text-green-500 mt-2">18% from prev. month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">86.9%</h2>
          <p className="text-gray-600">April GMV</p>
          <p className="text-gray-600 mt-2">$900,000 of Monthly Target</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">1.8%</h2>
          <p className="text-gray-600">Session Conversion</p>
          <p className="text-green-500 mt-2">4% from prev. week</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">120</h2>
          <p className="text-gray-600">Daily Subscription Opt In</p>
          <p className="text-green-500 mt-2">12% from prev. week</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
          <h2 className="text-xl font-semibold">Revenue</h2>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-semibold">$846,500</p>
              <p className="text-gray-600">GMV</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-2xl font-semibold">3,090</p>
              <p className="text-gray-600">Orders</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-2xl font-semibold">1.8%</p>
              <p className="text-gray-600">Session Conversion</p>
            </div>
          </div>
          <div className="mt-6">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={data}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="lastWeek" stroke="#8884d8" />
                <Line type="monotone" dataKey="thisWeek" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Traffic Sources</h2>
          <div className="mt-4">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {
                    pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                  }
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
          <h2 className="text-xl font-semibold">Recent Orders</h2>
          <div className="mt-4">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left text-gray-600">PRODUCT</th>
                  <th className="text-left text-gray-600">CATEGORY</th>
                  <th className="text-left text-gray-600">PRICE</th>
                  <th className="text-left text-gray-600">STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Noble Handcrafted Tonic 01...</td>
                  <td>Men</td>
                  <td>$360</td>
                  <td className="text-purple-500">Pending</td>
                </tr>
                <tr>
                  <td>Noble Handcrafted Tonic 01...</td>
                  <td>Home & Living</td>
                  <td>$425</td>
                  <td className="text-orange-500">Processing</td>
                </tr>
                <tr>
                  <td>Noble Handcrafted Tonic 01...</td>
                  <td>Stationery & Office</td>
                  <td>$20</td>
                  <td className="text-yellow-500">On Hold</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Sessions by User Type</h2>
          <div className="mt-4">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={[
                  { name: 'New', sessions: 2600 },
                  { name: 'Returning', sessions: 3556 }
                ]}
                margin={{
                  top: 5, right: 30, bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sessions" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Top 3 Sales by Category</h2>
          <div className="mt-4">
            <ResponsiveContainer width="100%" height={150}>
              <BarChart
                data={barData}
                layout="vertical"
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="percentage" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPart;
