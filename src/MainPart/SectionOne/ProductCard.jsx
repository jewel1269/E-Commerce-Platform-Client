import axios from "axios";
import { useEffect, useState } from "react";


const ProductCard = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/allMenus")
      .then((res) => {
        console.log(res.data);
        setMenus(res.data);
      })
      .catch((error) => {
        console.error("Error fetching menus:", error);
      });
  }, []);

  console.log(menus);

  return (
    <div>
      {menus.map((menu) => (
        <div key={menu.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col">
          <div className="flex justify-between items-center">
            {menu.isNew && (
              <span className="bg-green-100 text-green-600 rounded-full px-2 py-1 text-xs font-bold">
                NEW
              </span>
            )}
            {menu.discount && (
              <span className="bg-red-100 text-red-600 rounded-full px-2 py-1 text-xs font-bold">
                {menu.discount}
              </span>
            )}
          </div>
          <div className="flex-grow">
            <img
              src={menu.imageUrl}
              alt={menu.title}
              className="w-full h-40 rounded-xl shadow-lg mt-4"
            />
            <div className="flex justify-between items-center my-2">
              <div className="text-xs font-bold">Sold: {menu.sold}</div>
              <div className="text-xs font-bold">Available: {menu.available}</div>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{menu.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{menu.description}</p>
            <div className="text-xs text-gray-500 mb-2">{menu.category}</div>
            {menu.options && (
              <select className="bg-gray-100 border border-gray-300 rounded-md p-1 text-xs mb-4">
                {menu.options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold text-green-600">{menu.priceRange}</div>
            {menu.outOfStock ? (
              <span className="text-xs font-bold text-red-600">OUT OF STOCK</span>
            ) : (
              <button className="bg-green-600 text-white rounded-full px-4 py-2 text-xs">
                Add to Cart
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
