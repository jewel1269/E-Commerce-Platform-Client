import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';



const OrderTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState(new Date('2021-03-01'));
  const [endDate, setEndDate] = useState(new Date('2021-04-30'));
  const [selectedTab, setSelectedTab] = useState(0);
  const {user}= useContext(AuthContext)

  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    const fetchCartProducts = async () => {
      if (user?.email) {
        try {
          const res = await axios.get(`http://localhost:5000/order/${user.email}`);
          // console.log(res.data);
          setOrders(res.data);
        } catch (err) {
          console.error("Error fetching user cart:", err);
        }
      }
    };

    fetchCartProducts();
  }, [user?.email]);
 console.log(orders);






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

  const displayedOrders = filteredByStatus(['All', 'Complete', 'Pending', 'Canceled'][selectedTab]).slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `http://localhost:5000/orderDelete/${id}`;
        axios.delete(url)
          .then((response) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          })
          .catch((error) => {
            console.error("Error deleting item:", error);
            Swal.fire({
              title: "Error!",
              text: "There was a problem deleting your file.",
              icon: "error"
            });
          });
      }
    });
};

  return (
    <div className="p-4">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold">Order <span className="text-gray-600">{filteredOrders.length} Orders found</span></h1>
        <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
          <TabList className="flex space-x-4 mt-2 w-full">
            <Tab className="text-blue-500">All orders</Tab>
            <Tab className="text-gray-500">Completed</Tab>
            <Tab className="text-gray-500">Pending</Tab>
            <Tab className="text-gray-500">Canceled</Tab>
          </TabList>
          {[ 'All', 'Complete', 'Pending', 'Canceled'].map((status, index) => (
            <TabPanel key={index}>
              <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-2 items-center">
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
              <div className="overflow-x-hidden">
                <table className="min-w-full bg-white">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-2 px-3">#</th>
                      <th className="py-2 px-3">Order ID</th>
                      <th className="py-2 px-3">Product Name</th>
                      
                      <th className="py-2 px-3">Date</th>
                      <th className="py-2 px-3">Price</th>
                      <th className="py-2 px-3">Status</th>
                      <th className="py-2 px-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayedOrders.map((order, index) => (
                      <tr key={index} className="border-t">
                        <td className="py-2 px-4">{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                        <td className="py-2 px-4">{order._id}</td>
                        <td className="py-2 px-4">{order.orderProduct.menuCard?.title}</td>
                        
                        <td className="py-2 px-4">{order.Date}</td>
                        <td className="py-2 px-4">{order.orderProduct.menuCard?.priceRange}</td>
                        <td className="py-2 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${order.status === 'Complete' ? 'bg-green-100 text-green-700' : order.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Payment</button>
                  <button onClick={()=>handleDelete(order._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
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

export default OrderTable;
