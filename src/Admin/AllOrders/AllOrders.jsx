import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete, MdSystemUpdateAlt } from "react-icons/md";




const AllOrders = () => {
  const [products, setProducts]= useState([])

  useEffect(()=>{
    axios.get('http://localhost:5000/allOrders')
    .then(res=>{
      console.log(res.data);
      setProducts(res.data)
    })
  },[])

  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  return (
    <div className="lg:p-4 overflow-x-auto">
      <table className="min-w-full bg-white border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Image</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Address</th>
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">Product Des.</th>
      
            <th className="py-2 px-4 border">Price</th>
            <th className="py-2 px-4 border">Confirm Order</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="py-2 px-4 border text-red-600">{product.orderProduct?.email}</td>
              <td className="py-2 px-4 border text-red-600">{product.address}</td>
              <td className="py-2 px-4 border">{product.Date}</td>
              <td className="py-2 px-4 border">{product.orderProduct.menuCard?.description}</td>
              
              <td className="py-2 px-4 border">
                {product.oldPrice && (
                  <span className="line-through text-gray-500 mr-2">
                    {product.oldPrice}
                  </span>
                )}
                <span>{product.orderProduct.menuCard?.priceRange}</span>
              </td>
              <td className="py-2 px-4 border">
                <select
                  value={product?.status}
                  onChange={handleChange}
                  className={`bg-${
                    status === "Accepted"
                      ? "green"
                      : status === "Rejected"
                      ? "red"
                      : "yellow"
                  }-500 text-white px-4 btn-sm rounded-md`}
                >
                  <option value="Pending">Pending</option>
                  <option value="Accepted">Accepted</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </td>
              <td className="py-2 px-4   border">
                <button className="bg-orange-500 text-white px-2  btn-sm rounded-md">
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllOrders;
