import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Details = () => {
  const { id } = useParams();
  console.log(id);
  const [menus, setMenus] = useState([]);
  const [about, setAbout] = useState();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get("https://e-commerce-platform-server.vercel.app/allMenus");
        setMenus(response.data);
      } catch (error) {
        console.error("Error fetching menus:", error);
      }
    };

    fetchMenus();
  }, []);

  const items = menus.find((item) => item?._id === id);
  console.log(items);

  console.log(menus);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://e-commerce-platform-server.vercel.app/userInfo/${user?.email}`)
        .then((res) => {
          console.log(res.data);
          setAbout(res.data);
        })
        .catch((err) => {
          console.error("Error fetching user info:", err);
        });
    }
  }, [user?.email]);

  console.log(about);

  

  return (
    <div className="flex justify-center items-center min-h-screen border border-gray-500 p-5 ">
      <div className="bg-white border border-gray-200  shadow-lg rounded-lg p-6 w-full max-w-5xl flex">
        <div className="flex-1">
          <h1 className="text-4xl font-bold">{items?.title}</h1>

          <h1 className="text-1xl mt-2 font-bold">
            Category: {items?.category}
          </h1>
          <p className="text-2xl font-semibold m-3">
            Description: <span className="text-xl">{items?.description}</span>
          </p>
          <div className="flex items-center lg:w-80 mt-4">
            <img
              src={about?.image}
              alt="Author"
              className="w-10 h-10 rounded-full"
            />
            <span className="ml-2 text-gray-600">By: {about?.username}</span>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center relative">
          <div className="absolute rounded-full bg-yellow-500 h-64 w-64 -z-10"></div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={items?.imageUrl}
              alt="Room"
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <div className="flex  justify-between">
                <div className="  mb-2">Price: {items?.priceRange}</div>
                <div className=" ">{items?.discount}</div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="  mb-2">available {items?.available}</div>
                  <div className="mb-4">Sold: {items?.sold}</div>
                </div>
                <div>
                  <select name="inStock" id="inStock">
                    <option value="">In Stock</option>
                    {items?.options.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
             {items?.outOfStock ?  <button className="bg-gray-500 cursor-not-allowed btn-sm text-white w-full py-2 rounded-lg flex justify-center items-center">
               Out Of Stock
              </button> :
             
            <NavLink to={`/PaymentPage/${items?._id}`}>
               <button
             
             className="bg-green-500 hover:bg-orange-500 text-white w-full py-2 rounded-lg flex justify-center items-center"
           >
             Pay Now
           </button>
            </NavLink>
              
             }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
