import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';




const orders = [
    { id: '#78522135', product: 'Smart watch', address: '351 Shearwood Forest Drive', date: '2021-03-20', price: '$376.00', status: 'Complete' },
    { id: '#78522135', product: 'Headphones', address: '6391 Elgin St. Celina', date: '2021-03-21', price: '$276.00', status: 'Complete' },
    { id: '#78522135', product: 'Iphone Pro', address: '8502 Preston Rd. Inglewood', date: '2021-04-01', price: '$300.00', status: 'Complete' },
    // Add more orders here
    { id: '#78522135', product: 'Smart watch', address: '351 Shearwood Forest Drive', date: '2021-03-20', price: '$376.00', status: 'Complete' },
    { id: '#78522135', product: 'Headphones', address: '6391 Elgin St. Celina', date: '2021-03-21', price: '$276.00', status: 'Complete' },
    { id: '#78522135', product: 'Iphone Pro', address: '8502 Preston Rd. Inglewood', date: '2021-04-01', price: '$300.00', status: 'Complete' },
    // Add more orders here
    { id: '#78522135', product: 'Smart watch', address: '351 Shearwood Forest Drive', date: '2021-03-20', price: '$376.00', status: 'Complete' },
    { id: '#78522135', product: 'Headphones', address: '6391 Elgin St. Celina', date: '2021-03-21', price: '$276.00', status: 'Complete' },
    { id: '#78522135', product: 'Iphone Pro', address: '8502 Preston Rd. Inglewood', date: '2021-04-01', price: '$300.00', status: 'Complete' },
    // Add more orders here
    { id: '#78522135', product: 'Smart watch', address: '351 Shearwood Forest Drive', date: '2021-03-20', price: '$376.00', status: 'Complete' },
    { id: '#78522135', product: 'Headphones', address: '6391 Elgin St. Celina', date: '2021-03-21', price: '$276.00', status: 'Complete' },
    { id: '#78522135', product: 'Iphone Pro', address: '8502 Preston Rd. Inglewood', date: '2021-04-01', price: '$300.00', status: 'Complete' },
    // Add more orders here
    { id: '#78522135', product: 'Smart watch', address: '351 Shearwood Forest Drive', date: '2021-03-20', price: '$376.00', status: 'Complete' },
    { id: '#78522135', product: 'Headphones', address: '6391 Elgin St. Celina', date: '2021-03-21', price: '$276.00', status: 'Complete' },
    { id: '#78522135', product: 'Iphone Pro', address: '8502 Preston Rd. Inglewood', date: '2021-04-01', price: '$300.00', status: 'Complete' },
    // Add more orders here
    { id: '#78522135', product: 'Smart watch', address: '351 Shearwood Forest Drive', date: '2021-03-20', price: '$376.00', status: 'Complete' },
    { id: '#78522135', product: 'Headphones', address: '6391 Elgin St. Celina', date: '2021-03-21', price: '$276.00', status: 'Complete' },
    { id: '#78522135', product: 'Iphone Pro', address: '8502 Preston Rd. Inglewood', date: '2021-04-01', price: '$300.00', status: 'Complete' },
    // Add more orders here
    { id: '#78522135', product: 'Smart watch', address: '351 Shearwood Forest Drive', date: '2021-03-20', price: '$376.00', status: 'Complete' },
    { id: '#78522135', product: 'Headphones', address: '6391 Elgin St. Celina', date: '2021-03-21', price: '$276.00', status: 'Complete' },
    { id: '#78522135', product: 'Iphone Pro', address: '8502 Preston Rd. Inglewood', date: '2021-04-01', price: '$300.00', status: 'Complete' },
    // Add more orders here
  ];

  
const AllPayment = () => {
    const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState(new Date('2021-03-01'));
  const [endDate, setEndDate] = useState(new Date('2021-04-30'));
  const [selectedTab, setSelectedTab] = useState(0);

  const itemsPerPage = 13;

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };

  const filteredOrders = orders.filter(order => {
    const orderDate = new Date(order.date);
    return orderDate >= startDate && orderDate <= endDate;
  });

  const filteredByStatus = (status) => {
    if (status === 'All') return orders;
    return orders.filter(order => order.status === status);
  };

  const getTotalPages = (filteredArray) => {
    return Math.ceil(filteredArray.length / itemsPerPage);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const displayedOrders = filteredByStatus(['All', 'Complete', 'Complete', 'Complete'][selectedTab]).slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
    return (
        <div className="lg:p-4">
        <div className="mb-4">
          <h1 className="text-2xl font-semibold">Order <span className="text-gray-600">{filteredOrders.length} Orders found</span></h1>
          <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
            <TabList className="flex space-x-4 font-bold mt-2 w-full">
              <Tab className="text-red-500">All Payment</Tab>
              <Tab className="text-red-500">Completed</Tab>
              <Tab className="text-red-500">Pending</Tab>
              <Tab className="text-red-500">Rejected</Tab>
            </TabList>
            {[ 'All', 'Complete', 'Complete', 'Complete'].map((status, index) => (
              <TabPanel key={index}>
                <div className="lg:flex justify-between items-center mb-4">
                  <div className="lg:flex space-x-2 items-center">
                    <label className="mr-2">Start Date:</label>
                    <input
                      type="date"
                      value={startDate.toISOString().split('T')[0]}
                      onChange={(e) => setStartDate(new Date(e.target.value))}
                    />
                    <label className="ml-4 mr-2">End Date:</label>
                    <input
                      type="date"
                      value={endDate.toISOString().split('T')[0]}
                      onChange={(e) => setEndDate(new Date(e.target.value))}
                    />
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-2 px-3">#</th>
                        <th className="py-2 px-3">Payment ID</th>
                        <th className="py-2 px-3">Customer Name</th>
                        <th className="py-2 px-3">Email</th>
                        <th className="py-2 px-3">Date</th>
                        <th className="py-2 px-3">Total Payment</th>
                        <th className="py-2 px-3">Status</th>
                        <th className="py-2 px-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {displayedOrders.map((order, index) => (
                        <tr key={index} className="border-t">
                          <td className="py-2 px-4">{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                          <td className="py-2 px-4">{order.id}</td>
                          <td className="py-2 px-4">{order.product}</td>
                          <td className="py-2 px-4">{order.address}</td>
                          <td className="py-2 px-4">{order.date}</td>
                          <td className="py-2 px-4">{order.price}</td>
                          <td className="py-2 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${order.status === 'Complete' ? 'bg-green-100 text-green-700' : order.status === 'Complete' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="py-2 px-4 border-b">
                    
                    <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                  </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-gray-600">Showing {currentPage} of {getTotalPages(filteredByStatus(status))} pages</span>
                  <div className="flex space-x-1">
                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="px-3 py-1 border rounded">Previous</button>
                    {[...Array(getTotalPages(filteredByStatus(status)))].map((_, pageIndex) => (
                      <button key={pageIndex} onClick={() => handlePageChange(pageIndex + 1)} className={`px-3 py-1 border rounded ${currentPage === pageIndex + 1 ? 'bg-blue-500 text-white' : ''}`}>
                        {pageIndex + 1}
                      </button>
                    ))}
                    <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === getTotalPages(filteredByStatus(status))} className="px-3 py-1 border rounded">Next</button>
                  </div>
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    );
};

export default AllPayment;