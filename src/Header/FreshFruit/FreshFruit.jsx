import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { BsArrow90DegLeft } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import PrivateRoute from '../../Component/PrivateRoute/PrivateRoute';

const FreshFruit = () => {
  const [freshFruit, setFreshFruit] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user?.email;

  useEffect(() => {
    const fetchFreshFruit = async () => {
      try {
        const response = await axios.get("http://localhost:5000/freshFruit");
        console.log(response.data);
        setFreshFruit(response.data);
      } catch (error) {
        console.error('Error fetching fresh fruits:', error);
      }
    };

    fetchFreshFruit();
  }, []);

  const addToCartHandler = async (menuCard) => {
    console.log(menuCard);
    try {
      const response = await axios.post("http://localhost:5000/addToCart", {
        email,
        menuCard,
      });
      console.log('Added to cart:', response.data);
      toast.success("Product added successfully");
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error("Product not added");
    }
  };

  return (
    <div>
      {/* Breadcrumb and Categories */}
      <div className="lg:p-4 bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-green-700 mb-4">𝙵𝚛𝚎𝚜𝚑 𝙵𝚛𝚞𝚒𝚝</h1>
          <div className="lg:bg-green-200 w-full lg:flex justify-center items-center ">
            <div className="w-full lg:mx-auto lg:p-10 lg:h-96 lg:bg-green-100 rounded-lg shadow-lg lg:flex justify-around">
              <div>
                <img 
                  src="https://img.freepik.com/premium-photo/shopping-cart-full-fruits-vegetables_950347-6313.jpg?w=1380" 
                  alt="Shopping Cart with Organic Products" 
                  className="rounded-lg lg:h-64 h-full lg:w-96 w-full"
                />
              </div>
              <div className="lg:w-1/2 pl-8">
                <h2 className="text-3xl font-bold mb-4">We Love Organic Products</h2>
                <p className="text-gray-700 text-start">
                  Were you aware that non-organic items can contain substantial pesticide residues and artificial preservatives? 
                  That's why we emphasize sourcing organic items. They not only offer a more delightful taste but also contribute 
                  to maintaining healthier soils and promoting biodiversity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 p-4 bg-green-50">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Price</h2>
            <div className="flex items-center justify-between">
              <span>$0</span>
              <span>$30</span>
            </div>
            <input type="range" min="0" max="30" className="w-full mt-2" />
            <button className="mt-2 px-4 py-2 bg-gray-200 rounded">Filter</button>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold">Color</h2>
            <div className="flex flex-col">
              {['White', 'Black', 'Green', 'Red', 'Yellow'].map(color => (
                <label key={color} className="flex items-center mt-2">
                  <input type="radio" name="color" value={color.toLowerCase()} />
                  <span className="ml-2">{color}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold">Size</h2>
            <div className="flex flex-col">
              {['Big', 'Medium', 'Small'].map(size => (
                <label key={size} className="flex items-center mt-2">
                  <input type="checkbox" name="size" value={size.toLowerCase()} />
                  <span className="ml-2">{size}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Units</h2>
            <select className="w-full mt-2 px-2 py-2 bg-gray-200 rounded">
              <option>Any Units</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>

        {/* Main content */}
        <div className="w-full bg-green-50 md:w-3/4 p-4">
          <div className="flex justify-between mb-4">
            <span>Showing all 3 results</span>
            <div className="relative">
              <select className="px-2 py-1 bg-green-50 rounded">
                <option>Default sorting</option>
                {/* Add more sorting options as needed */}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Product Card */}
            {freshFruit.map((product, index) => (
              <div key={index} className="border hover:bg-slate-200 hover:cursor-zoom-in hover:shadow-2xl hover:border hover:border-gray-300 lg:w-96 p-4 rounded bg-white">
                <div className="relative">
                  <NavLink to={`/FruitsDetails/${product._id}`}>
                    <img
                      src={product?.imageUrl}
                      alt={product.name}
                      className="w-full h-56 rounded-lg object-cover"
                    />
                  </NavLink>
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {product?.discount}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">
                  {product.title}
                </h3>
                <p className="text-sm">{product.shortDescription}</p>
                <div className="mt-2">
                  <div className="flex justify-between">
                    <span className="block">
                      <strong>Category:</strong> {product.category}
                    </span>
                    <span className="block">
                      <strong>Price:</strong> {product.priceRange}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span>Sold: {product.sold}</span>
                    <span>Available: {product.available}</span>
                  </div>
                  <select className="mt-3 border border-gray-200" name="" id="">
                    {product?.options.map(item => (
                      <option key={item._id} value={item}>{item}</option>
                    ))}
                  </select>
                </div>
                {product?.outOfStock ? (
                  <button className="mt-4 w-full px-4 py-2 bg-gray-500 cursor-not-allowed text-white rounded">
                    Out Of Stock
                  </button>
                ) : (
                  user ? (
                    <button
                      onClick={() => addToCartHandler(product)}
                      className="mt-4 w-full px-4 py-2 bg-green-500 hover:bg-orange-400 text-white rounded"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    
                      <div>
                        <NavLink to={'/login'}>
                        <button
                        
                        className="mt-4 w-full px-4 py-2 bg-green-500 hover:bg-orange-400 text-white rounded"
                      >
                        Add to Cart
                      </button>
                        </NavLink>
                      </div>
                   
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreshFruit;
