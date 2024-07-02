import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import loadingImg from "/Animation - 1719949818611.gif"

const ProductCard = ({ title, description, price, oldPrice, image, discount, buttonText }) => {
  return (
   <div>
    
     <div className="max-w-sm  rounded overflow-hidden shadow-lg">
      
      <div className="px-6 py-4">
        {discount && (
          <div className="bg-green-500 text-white font-bold rounded-full px-3 py-1 text-xs mb-2">
            -{discount}%
          </div>
        )}
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-2">{description}</p>
        {price && (
          <div className="flex items-center mb-2">
            <span className="text-gray-500 text-lg mr-2">
              {oldPrice && <span className="line-through text-gray-400">${oldPrice}</span>}
            </span>
            <span className="font-bold text-lg">${price}</span>
          </div>
        )}
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {buttonText}
        </button>
      </div>
      <img className="w-full lg:h-72" src={image} alt={title} />
    </div>
   </div>
  );
};

const LastSwiper = () => {
  const [products, setProducts] = useState([]);
  const {loading}=useContext(AuthContext)

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get("http://localhost:5000/specialItem");
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching menus:", error);
      }
    };

    fetchMenus();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  if (loading) {
    return (
      <div className='flex lg:ml-96 items-center justify-center'>
        <img className='lg:h-28 lg:w-40' src={loadingImg}></img>
      </div>
    )
  }

  return (
   <div className='p-5'>
     <h1 className='text-2xl ml-5 mb-4 font-bold'>Special Offers</h1>
     <p className='divider'></p>
    <Marquee
    pauseOnHover={true}
    
    >
    <div className="flex flex-wrap gap-4">
      
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
    </Marquee>
    
   </div>
  );
};

export default LastSwiper;