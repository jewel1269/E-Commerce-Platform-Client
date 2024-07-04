import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BsArrow90DegLeft } from "react-icons/bs";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const ProductList = () => {
  const [vegitables, setVegitables] = useState([]);
  const {user}=useContext(AuthContext)
     

      const addToCartHandler = async (menuCard) => {
        console.log(menuCard);
        try {
          const response = await axios.post("https://e-commerce-platform-server.vercel.app/addToCart", {
            email: user?.email,
            menuCard,
          });
          console.log('Added to cart:', response.data);
          toast.success("Product added successfully");
        } catch (error) {
          console.error('Error adding to cart:', error);
          toast.error("Product not added");
        }
      };

  useEffect(() => {
    axios.get("https://e-commerce-platform-server.vercel.app/vegitables").then((res) => {
      console.log(res.data);
      setVegitables(res.data);
    });
  }, []);


 

  console.log(vegitables);
  return (
    <div className="mb-5">
      {/* Breadcrumb and Categories */}
      <div className="p-4 bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-green-700 mb-4">
            𝚅𝚎𝚐𝚎𝚝𝚊𝚋𝚕𝚎𝚜
          </h1>
          <div className="flex flex-wrap justify-center items-center space-x-4">
            <div className="p-4 rounded bg-gray-100">
              <a href="#" className="flex items-center justify-center">
                <BsArrow90DegLeft />
              </a>
              <p className="text-green-500 mt-2">Vegetables</p>
            </div>
            {[
              {
                name: "Leafy Green",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLb4-6UK-mbEX_1A-qgRuNBPydBBExvIBIDA&s",
              },
              {
                name: "Mushrooms",
                image:
                  "https://rrcultivation.com/cdn/shop/files/R_RCultivation-Shadows_21_900x.png?v=1694707764",
              },
              {
                name: "Root",
                image:
                  "https://img.freepik.com/premium-photo/ingredients-cooking-garlic-sauce-white-wooden-background_185193-76535.jpg?w=1380",
              },
            ].map((category, index) => (
              <div key={index} className="p-4">
                <a href="#" className="block">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-16 h-16 object-cover mx-auto"
                  />
                </a>
                <p className="mt-2 text-gray-700">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="flex  flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 p-4 bg-gray-100">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Price</h2>
            <div className="flex items-center justify-between">
              <span>$0</span>
              <span>$30</span>
            </div>
            <input type="range" min="0" max="30" className="w-full mt-2" />
            <button className="mt-2 px-4 py-2 bg-gray-200 rounded">
              Filter
            </button>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold">Color</h2>
            <div className="flex flex-col">
              {["White", "Black", "Green", "Red", "Yellow"].map((color) => (
                <label key={color} className="flex items-center mt-2">
                  <input
                    type="radio"
                    name="color"
                    value={color.toLowerCase()}
                  />
                  <span className="ml-2">{color}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold">Size</h2>
            <div className="flex flex-col">
              {["Big", "Medium", "Small"].map((size) => (
                <label key={size} className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    name="size"
                    value={size.toLowerCase()}
                  />
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
        <div className="w-full md:w-3/4 p-4">
          <div className="flex justify-between mb-4">
            <span>Showing all {vegitables.length} results</span>
            <div className="relative">
              <select className="px-2 py-1 bg-gray-200 rounded">
                <option>Default sorting</option>
                {/* Add more sorting options as needed */}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {vegitables.map((vegitable, index) => (
              <div key={index} className="border lg:w-96 p-4 hover:bg-slate-200 hover:cursor-zoom-in hover:shadow-2xl hover:border hover:border-gray-300 rounded bg-white">
                <div className="relative">
                 <NavLink to={`/VagiDetails/${vegitable._id}`}>
                 <img
                    src={vegitable?.imageUrl}
                    alt={vegitable.name}
                    className="w-full h-56 rounded-lg object-cover"
                  />
                 </NavLink>
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    {vegitable?.discount}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">
                  {vegitable.title}
                </h3>
                <p className="text-sm">{vegitable.description}</p>
                <div className="mt-2">
                  <div className="flex justify-between">
                    <span className="block">
                      <strong>Category:</strong> {vegitable.category}
                    </span>
                    <span className="block">
                      <strong>Price:</strong> {vegitable.priceRange}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span>Sold: {vegitable.sold}</span>
                    <span>Available: {vegitable.available}</span>
                  </div>
                  <select className="mt-3 border border-gray-200" name="" id="">
                  {
                    vegitable?.options.map(item=><option key={item._id} value={item}>{item}</option>)
                  }
                  </select>
                  
                </div>
                {vegitable?.outOfStock ? (
                  <button className="mt-4 w-full px-4  bg-gray-500 cursor-not-allowed text-white rounded">
                    Out Of Stock
                  </button>
                ) : (
                  user ? (
                    <button
                      onClick={() => addToCartHandler(vegitable)}
                      className="mt-4 w-full px-4  bg-green-500 hover:bg-orange-400 text-white rounded"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    
                      <div>
                        <NavLink to={'/login'}>
                        <button
                        
                        className="mt-4 w-full px-4  bg-green-500 hover:bg-orange-400 text-white rounded"
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

export default ProductList;
