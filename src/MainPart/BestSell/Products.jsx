import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import loadingImg from "/Animation - 1719949818611.gif"

const ProductCard = ({ product }) => {
  const {user, loading}=useContext(AuthContext)
  const email = user?.email
  
  
  const addToCartHandler = async (menuCard) => {
    console.log(menuCard);
    try {
      const response = await axios.post(`http://localhost:5000/addToCart`, {
        email,
        menuCard
      });
      console.log('Added to cart:', response.data);
    
        alert("Products Add Successfully")
      
      
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error("Products Not added")
     
    }
  };
  if (loading) {
    return (
      <div className='flex lg:ml-96 items-center justify-center'>
        <img className='lg:h-28 lg:w-40' src={loadingImg}></img>
      </div>
    )
  }



  return (
    <div className="bg-white hover:bg-gray-200 hover:cursor-zoom-in hover:border hover:border-gray-300 hover:shadow-xl  lg:p-4 rounded shadow text-center">
      {product.isNew && (
        <span className="bg-green-600 text-start text-white py-1 px-2 lg:mr-80 rounded-2xl  top-2 left-2">
          NEW
        </span>
      )}
      {product.discount && (
        <span className="bg-red-600 text-white text-start py-1 px-2 rounded-full lg:mr-80  top-2 left-2">
          -{product.discount}%
        </span>
      )}
      <img
        src={product.imgSrc}
        alt={product.name}
        className="mx-auto border border-gray-100 p-2 rounded-lg h-64 mb-4"
      />
      <p className="divider"></p>
      <div className="font-semibold text-xl">{product.name}</div>
      <p className="text-gray-500 text-start text-sm">{product.description}</p>
      <div className="text-gray-800 mt-3 font-bold text-xs mb-2">
        {product.category}
      </div>
      <p className="divider"></p>
      {product.oldPrice && (
        <div className="text-gray-400 line-through text-sm">
          {product.oldPrice}
        </div>
      )}
      <div className="flex justify-around">
        <div className="text-green-600 font-bold text-lg">
          {product.price ? product.price : product.priceRange}
        </div>
        <button onClick={()=>addToCartHandler(product)} className="btn rounded-full  hover:cursor-zoom-in hover:bg-orange-400 btn-xs">Add to cart</button>
      </div>
      {product.rating && (
        <div className="flex justify-center mt-2">
          {Array(product.rating)
            .fill()
            .map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.5 3 2.1-6.3L2 8l6.6-.1L10 2l1.4 5.9L18 8l-4.6 3.7L15.5 18z" />
              </svg>
            ))}
        </div>
      )}
      {product.sold !== undefined && (
        <div className="mt-2">
          <div className="flex justify-between text-xs text-gray-500">
            <span>Sold: {product.sold}</span>
            <span>Available: {product.available}</span>
          </div>
          <div className="h-2 w-full bg-gray-200 rounded mt-1">
            <div
              className="h-2 bg-green-600 rounded"
              style={{
                width: `${
                  (product.sold / (product.sold + product.available)) * 100
                }%`,
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get("http://localhost:5000/bestSellers");
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching menus:", error);
      }
    };

    fetchMenus();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  console.log(products);

  return (
    <div className="bg-green-100 p-6">
      <div className="text-3xl font-semibold mb-6">Bestsellers in May:</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:p-6 lg:grid-cols-5 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
