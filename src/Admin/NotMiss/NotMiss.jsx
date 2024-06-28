import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdDelete, MdUpdate } from 'react-icons/md';

const NotMiss = () => {
    const [discounts, serDiscounts] = useState([]);
    const [status, setStatus] = useState("Pending");

    useEffect(() => {
      const fetchMenus = async () => {
        try {
          const response = await axios.get("http://localhost:5000/notMiss");
          console.log(response.data);
          serDiscounts(response.data);
        } catch (error) {
          console.error("Error fetching menus:", error);
        }
      };
  
      fetchMenus();
    }, []); // Empty dependency array ensures the effect runs only once on component mount
  
    console.log(discounts);
    

  const handleChange = (event) => {
    setStatus(event.target.value);
  }
    


    return (
        <div className="p-4">
      <table className="min-w-full bg-white border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Image</th>
            <th className="py-2 px-4 border">Title</th>
            <th className="py-2 px-4 border">Label</th>
            <th className="py-2 px-4 border">Category</th>
            <th className="py-2 px-4 border">Discount</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {discounts.map((product, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border">
                <img
                  src={product.imgSrc}
                  alt={product.title}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="py-2 px-4 border text-red-600">{product.title}</td>
              <td className="py-2 px-4 border">{product.label}</td>
              <td className="py-2 px-4 border">
                {product?.category}
              </td>
              <td className="py-2 px-4 border">
                {product?.discount}
              </td>
              
              <td className="py-2 px-4 flex gap-3  border">
                <button className="bg-orange-500 text-white px-2  btn-sm rounded-md">
                  <MdDelete />
                </button>
                <button className="bg-orange-500 text-white px-2  btn-sm rounded-md">
                  <MdUpdate />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default NotMiss;