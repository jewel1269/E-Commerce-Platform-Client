import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
// import "./App.css";
import Modal from 'react-modal';
import { MdDelete } from "react-icons/md";

Modal.setAppElement('#root');

function Payment() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios.get(`https://e-commerce-platform-server.vercel.app/paidItem/${user?.email}`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, [user?.email]);

  console.log(data);
  const ITEMS_PER_PAGE = 12;

  const totalPurchases = data.reduce((total, item) => total + item.price, 0);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  return (
    <div className="lg:p-4 overflow-x-auto">
      <h1 className="text-xl font-bold">Payment History: </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Trx-Id</th>
              <th className="py-2 px-4 border-b">Product NAME</th>
              <th className="py-2 px-4 border-b">PRICE</th>
              <th className="py-2 px-4 border-b">EMAIL</th>
              <th className="py-2 px-4 border-b">PAYMENT RECEIVED</th>
              <th className="py-2 px-4 border-b">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{item.paymentId}</td>
                <td className="py-2 px-4 border-b">
                  {item.details.orderProduct.menuCard.title}
                </td>
                <td className="py-2 px-4 border-b">
                  TK{item.details.orderProduct.menuCard.priceRange || item.details.orderProduct.menuCard.price}
                </td>
                <td className="py-2 px-4 border-b">
                  {item.Customer_info.email}
                </td>
                <td className="py-2 px-4 border-b">
                  {item.Date} 
                </td>
                <td className="py-2 px-4 border-b">
                {
                  item.status === 'success'? <div className="flex  items-center ">
                  <button
                    className="bg-green-500  text-white font-bold py-1 px-4 rounded"
                    onClick={openModal}
                  >
                    Invoice
                  </button>
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Invoice Modal"
                    className="flex justify-center items-center h-screen"
                    overlayClassName="fixed inset-0 bg-green-100 bg-opacity-50 flex justify-center items-center"
                  >
                    <div className="bg-white p-6 rounded-lg shadow-lg lg:w-[700px]">
                      <div className="flex justify-between items-center">
                      <div className="flex gap-1 items-center mb-4">
                        <img src={item.Invoice?.logo} alt="Programming Hero" className="w-24" />
                        <h1 className="text-3xl font-semibold">{item.Invoice?.title}</h1>
                      </div>
                        <div className="mt-10">
                        <span className="text-green-500 font-bold text-xl">PAID</span>
                      <p className="text-sm ">Order ID: {item?.paymentId}</p>
                      <p className="text-sm mb-4">Date of purchase: {item?.Date?.slice(0, 10)}</p>
            
                        </div>
                      </div>
                      <div className="flex justify-between">
                      <div className="mb-4">
                      <h1 className="text-xl font-bold">{item.Invoice?.title}</h1>
                        <p className="text-sm">{item.Invoice?.address}</p>
                        <p className="text-sm">Dhaka</p>
                        <p className="text-sm">tasty-daily2330@gmail.com</p>
                        <p className="text-sm">01322810882</p>
                      </div>
                      <div className="mb-4">
                        <p className="font-bold">Customer Mail</p>
                        <p className="text-sm">{item.Customer_info.email}</p>
                        <p className="text-sm">+8801575456856</p>
                      </div>
                      </div>
                      <div className="mb-4">
                        <p className="font-bold">Payment Method</p>
                        <p className="text-sm"> {item.Invoice?.PaymentMethod}</p>
                        <p className="text-sm">Payment ID #: {item?.paymentId}</p>
                        
                      </div>
                      <div className="mb-4">
                        <p className="font-bold">Item</p>
                        <p className="text-sm">Name: {item.details.orderProduct.menuCard.title}</p>
                        <p className="text-sm">Price: {item.details.orderProduct.menuCard.priceRange || item.details.orderProduct.menuCard.price }</p>
                      </div>
                      <div className="border-t pt-4">
                        <p className="text-sm">Subtotal: {item.details.orderProduct.menuCard.priceRange || item.details.orderProduct.menuCard.price} </p>
                        <p className="text-sm">Discount: 0 $</p>
                        <p className="text-sm font-bold">Total: {item.details.orderProduct.menuCard.priceRange || item.details.orderProduct.menuCard.price } </p>
                      </div>
                      <button
                        className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>
                  </Modal>
                </div> 
                :
               
                <button
                    className="bg-orange-500 text-white font-bold py-1 px-4 rounded"
                   
                  >
                    Cancelled
                  </button>
                   
                }
                
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <p>
          Displaying {startIndex + 1}-{Math.min(endIndex, data.length)} out of{" "}
          {data.length} records
        </p>
        <div>
          <button
            className="px-2 py-1 border"
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          >
            {"<<"}
          </button>
          <button
            className="px-2 py-1 border"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {"<"}
          </button>
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page + 1}
              className={`px-2 py-1 border ${
                currentPage === page + 1 ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handlePageChange(page + 1)}
            >
              {page + 1}
            </button>
          ))}
          <button
            className="px-2 py-1 border"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            {">"}
          </button>
          <button
            className="px-2 py-1 border"
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            {">>"}
          </button>
        </div>
        <div>
          <label htmlFor="jumpToPage">Jump to page:</label>
          <input
            id="jumpToPage"
            className="ml-2 border px-2 py-1"
            type="number"
            min="1"
            max={totalPages}
            value={currentPage}
            onChange={(e) => handlePageChange(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}

export default Payment;
