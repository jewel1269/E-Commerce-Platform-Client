import React, { useState } from "react";
// import "./App.css";

const data = [
  { order: "#030179", name: "Burke, Minnie", price: 12.94, email: "minnie.burke63@example.com", date: "12/12/2016", time: "09:48 PM" },
  { order: "#090543", name: "Carlson, Jimmy", price: 35.23, email: "jimmy.carlson85@example.com", date: "24/09/2016", time: "12:16 AM" },
  { order: "#100679", name: "Castillo, Ross", price: 98.53, email: "ross.castillo73@example.com", date: "22/10/2016", time: "09:48 PM" },
  { order: "#070241", name: "Garcia, Calvin", price: 89.20, email: "calvin.garcia41@example.com", date: "11/03/2016", time: "12:16 AM" },
  { order: "#080772", name: "Knight, Mario", price: 34.99, email: "mario.knight80@example.com", date: "19/02/2016", time: "09:48 PM" },
  { order: "#030581", name: "Lewis, Marion", price: 65.11, email: "marion.lewis91@example.com", date: "01/11/2016", time: "12:16 AM" },
  { order: "#120480", name: "Martin, Jessica", price: 104.53, email: "jessica.martin13@example.com", date: "14/10/2016", time: "09:48 PM" },
  { order: "#040974", name: "Meyer, Derek", price: 51.16, email: "derek.meyer81@example.com", date: "05/04/2016", time: "12:16 AM" },
  { order: "#030375", name: "Murphy, Ethan", price: 295.62, email: "ethan.murphy64@example.com", date: "10/04/2016", time: "12:16 AM" },
  { order: "#070785", name: "Owens, Hailey", price: 30.90, email: "hailey.owens56@example.com", date: "03/06/2016", time: "12:16 AM" },
  { order: "#050778", name: "Pierce, Jeremiah", price: 10.99, email: "jeremiah.pierce87@example.com", date: "17/07/2016", time: "12:16 AM" },
  { order: "#110374", name: "Romero, Anthony", price: 21.95, email: "anthony.romero10@example.com", date: "14/02/2016", time: "12:16 AM" },
  { order: "#030179", name: "Burke, Minnie", price: 12.94, email: "minnie.burke63@example.com", date: "12/12/2016", time: "09:48 PM" },
  { order: "#090543", name: "Carlson, Jimmy", price: 35.23, email: "jimmy.carlson85@example.com", date: "24/09/2016", time: "12:16 AM" },
  { order: "#100679", name: "Castillo, Ross", price: 98.53, email: "ross.castillo73@example.com", date: "22/10/2016", time: "09:48 PM" },
  
];

const ITEMS_PER_PAGE = 12;

const totalPurchases = data.reduce((total, item) => total + item.price, 0);

function Payment() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  return (
    <div className="p-4">
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="bg-blue-500 text-white p-4 rounded">
          <p className="text-lg">User Activity</p>
          <p className="text-xl">Users logins: 103</p>
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded">
          <p className="text-lg">Open Tickets</p>
          <p className="text-xl">Issues this week: 11</p>
        </div>
        <div className="bg-pink-500 text-white p-4 rounded">
          <p className="text-lg">Purchases</p>
          <p className="text-xl">Today: 26</p>
          <p className="text-lg">Total: ${totalPurchases.toFixed(2)}</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded">
          <p className="text-lg">Web Status</p>
          <p className="text-xl">Downtime today: 0 mins</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ORDER</th>
              <th className="py-2 px-4 border-b">NAME</th>
              <th className="py-2 px-4 border-b">PRICE</th>
              <th className="py-2 px-4 border-b">EMAIL</th>
              <th className="py-2 px-4 border-b">PAYMENT RECEIVED</th>
              <th className="py-2 px-4 border-b">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{item.order}</td>
                <td className="py-2 px-4 border-b">{item.name}</td>
                <td className="py-2 px-4 border-b">${item.price.toFixed(2)}</td>
                <td className="py-2 px-4 border-b">{item.email}</td>
                <td className="py-2 px-4 border-b">
                  {item.date} <br /> {item.time}
                </td>
                <td className="py-2 px-4 border-b">
                  
                  <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <p>
          Displaying {startIndex + 1}-{Math.min(endIndex, data.length)} out of {data.length} records
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
              className={`px-2 py-1 border ${currentPage === page + 1 ? "bg-blue-500 text-white" : ""}`}
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
