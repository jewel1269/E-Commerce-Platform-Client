import axios from 'axios';
import React, { useEffect, useState } from 'react';


const DiscountCard = ({ discount }) => {
  return (
    <div className="bg-white rounded-2xl shadow relative">
      <img src={discount.imgSrc} alt={discount.title} className="w-full h-56 rounded-t" />
      <div className="absolute top-2 p-2 left-2 bg-white text-green-600 py-1 px-2 rounded-full text-xs">
        {discount.label}
      </div>
      {discount.discount && (
        <div className="absolute top-2 p-2 right-2 bg-green-600 text-white py-1 px-2 rounded-full text-xs">
          {discount.discount}
        </div>
      )}
      {discount.category && (
        <div className="absolute bottom-2 p-2 right-2 bg-white text-green-600 py-1 px-2 rounded-full text-xs">
          {discount.category}
        </div>
      )}
      <div className="mt-4 p-2 font-semibold">{discount.title}</div>
      <div className="text-gray-500 p-2 text-sm">{discount.date}</div>
    </div>
  );
};

const DontMiss = () => {

  const [discounts, serDiscounts] = useState([]);

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

  return (
    <div className="bg-green-100 p-6">
      <div className="text-2xl font-semibold mb-6">Don't Miss our Discounts</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        {discounts.map((discount) => (
          <DiscountCard key={discount.id} discount={discount} />
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="border border-green-600 text-green-600 py-2 px-4 rounded-full">
          Show All
        </button>
      </div>
    </div>
  );
};

export default DontMiss;
