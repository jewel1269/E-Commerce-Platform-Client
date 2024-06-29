import React from 'react';
import { BsArrow90DegLeft } from 'react-icons/bs';

const FreshFruit = () => {
    return (
        <div>
        {/* Breadcrumb and Categories */}
        <div className="p-4 bg-white">
         
  
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-green-700 mb-4">𝙵𝚛𝚎𝚜𝚑 𝙵𝚛𝚞𝚒𝚝</h1>
            <div className="flex flex-wrap justify-center items-center space-x-4">
              <div className="p-4 rounded bg-gray-100">
                <a href="#" className="flex items-center justify-center">
                  <BsArrow90DegLeft />
                </a>
                <p className="text-green-500 mt-2">Fresh Fruit</p>
              </div>
              {[
                { name: 'Leafy Green', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLb4-6UK-mbEX_1A-qgRuNBPydBBExvIBIDA&s' },
                { name: 'Mushrooms', image: 'https://rrcultivation.com/cdn/shop/files/R_RCultivation-Shadows_21_900x.png?v=1694707764' },
                { name: 'Root', image: 'https://img.freepik.com/premium-photo/ingredients-cooking-garlic-sauce-white-wooden-background_185193-76535.jpg?w=1380' },
              ].map((category, index) => (
                <div key={index} className="p-4">
                  <a href="#" className="block">
                    <img src={category.image} alt={category.name} className="w-16 h-16 object-cover mx-auto" />
                  </a>
                  <p className="mt-2 text-gray-700">{category.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Product List */}
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 p-4 bg-gray-100">
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
          <div className="w-full md:w-3/4 p-4">
            <div className="flex justify-between mb-4">
              <span>Showing all 3 results</span>
              <div className="relative">
                <select className="px-2 py-1 bg-gray-200 rounded">
                  <option>Default sorting</option>
                  {/* Add more sorting options as needed */}
                </select>
              </div>
            </div>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Product Card */}
              {[
                {
                  name: 'Spring Onions 1 Bunch',
                  description: 'Go for spring onions with firm, unblemished bulbs and bright green, perky leaves.',
                  price: '$10.00',
                  sold: 26,
                  available: 21,
                  image: 'path/to/onions.jpg', // Replace with actual image path
                },
                {
                  name: 'Mint',
                  description: 'The mint plant is a herbaceous perennial that is widely known.',
                  price: '$13.00 - $22.00',
                  sold: 37,
                  available: 4,
                  image: 'path/to/mint.jpg', // Replace with actual image path
                },
                {
                  name: 'Basil',
                  description: 'To keep basil fresh, trim the stems and place them in a glass or jar of water.',
                  price: '$10.00 $8.00',
                  sold: 37,
                  available: 4,
                  image: 'path/to/basil.jpg', // Replace with actual image path
                },
              ].map((product, index) => (
                <div key={index} className="border p-4 rounded bg-white">
                  <div className="relative">
                    <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">NEW</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
                  <p className="text-sm">{product.description}</p>
                  <div className="mt-2">
                    <span className="block text-green-500 font-semibold">{product.price}</span>
                    <div className="flex justify-between text-sm mt-1">
                      <span>Sold: {product.sold}</span>
                      <span>Available: {product.available}</span>
                    </div>
                  </div>
                  <button className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded">Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default FreshFruit;