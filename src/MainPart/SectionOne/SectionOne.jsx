
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaRegEye } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import loadingImg from "/Animation - 1719949818611.gif"
import PrivateRoute from '../../Component/PrivateRoute/PrivateRoute';




const ProductCard = ({menus}) => {

  const {user, loading}=useContext(AuthContext)
  const email = user?.email
  
  
  const addToCartHandler = async (menuCard) => {
    console.log(menuCard);
    try {
      const response = await axios.post(`https://e-commerce-platform-server.vercel.app/addToCart`, {
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
        <img className='lg:h-36 lg:w-44' src={loadingImg}></img>
      </div>
    )
  }


  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 p-5'>
    {menus.map((menu) => (
      <div key={menu._id} className="bg-white rounded-lg lg:w-96 w-full hover:bg-slate-200 hover:cursor-zoom-in hover:shadow-2xl hover:border hover:border-gray-300 shadow-md p-4">
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
            className="lg:w-48 w-full h-40 rounded-xl shadow-lg mt-4"
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
            <div className='flex items-center justify-center gap-3'>
              <span className="text-xs font-bold text-red-600">OUT OF STOCK</span>
              <NavLink to={`/details/${menu._id}`}>
            <button data-tip="Details"  className='tooltip rounded-full p-2 border border-gray-300 hover:bg-orange-500'>
            <FaRegEye />
            </button>
            </NavLink>

            </div>
          ) : (
            <div className="flex items-center justify-center gap-3">
             {
              user?  <button
              className="bg-green-600 hover:bg-orange-500 text-white rounded-full px-4 py-2 text-xs"
              onClick={() => addToCartHandler(menu)} 
            >
              Add to Cart
            </button> :
            <NavLink to={'/login'}>
               <button
              className="bg-green-600 hover:bg-orange-500 text-white rounded-full px-4 py-2 text-xs"
            >
              Add to Cart
            </button>
            </NavLink>
             }
            <NavLink to={`/details/${menu._id}`}>
            <button data-tip="Details" className='tooltip rounded-full p-2 border border-gray-300 hover:bg-orange-500'>
            <FaRegEye />
            </button>
            </NavLink>
            </div>
          )}
        </div>
      </div>
    ))}
 
  </div>

  );
};
const SectionOne = () => {
    const [days, setDays] = useState(15);
    const [hours, setHours] = useState(10);
    const [minutes, setMinutes] = useState(24);
    const [seconds, setSeconds] = useState(0);

    const [menus, setMenus] = useState([]);

    useEffect(() => {
      const fetchMenus = async () => {
        try {
          const response = await axios.get("https://e-commerce-platform-server.vercel.app/allMenus");
          console.log(response.data);
          setMenus(response.data);
        } catch (error) {
          console.error("Error fetching menus:", error);
        }
      };
  
      fetchMenus();
    }, []); // Empty dependency array ensures the effect runs only once on component mount
  
    console.log(menus); 
  
    useEffect(() => {
      const interval = setInterval(() => {
        // Decrease seconds by 1
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          // Reset seconds and decrease minutes by 1
          setSeconds(59);
          if (minutes > 0) {
            setMinutes(minutes - 1);
          } else {
            // Reset minutes and decrease hours by 1
            setMinutes(59);
            if (hours > 0) {
              setHours(hours - 1);
            } else {
              // Reset hours and decrease days by 1
              setHours(23);
              if (days > 0) {
                setDays(days - 1);
              } else {
                // Countdown complete, do something (e.g., show a message)
                clearInterval(interval);
              }
            }
          }
        }
      }, 1000); // Update every second
  
      return () => clearInterval(interval); // Clean up on unmount or dependencies change
    }, [days, hours, minutes, seconds]);

  return (
    <div className="bg-green-50  py-12">
      <div className="lg:flex lg:gap-10 w-full lg:ml-5 lg:mr-5 mx-auto">
    <div>
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Big Sales of Month</h2>
        <div className="flex justify-center lg:ml-16 items-center ">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-bold text-gray-800">Ends in:</h3>
            <div className="flex gap-5">
            <div className="flex gap-5">
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": days }}>{days}</span>
        </span>
        days
      </div>
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": hours }}>{hours}</span>
        </span>
        hours
      </div>
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": minutes }}>{minutes}</span>
        </span>
        min
      </div>
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": seconds }}>{seconds}</span>
        </span>
        sec
      </div>
    </div>
</div>

          </div>
        </div>
        <div className=" items-center lg:ml-16  mb-6">
          <div className="bg-white  rounded-lg shadow-md text-center w-80">
            <h3 className="text-lg font-bold text-gray-800">We Deliver on Next Day from</h3>
            <p className="text-green-600 text-xl font-bold">10:00 AM to 08:00 PM</p>
            <img className='lg:h-96 lg:w-[450px]' src="https://www.shutterstock.com/image-photo/smiling-asian-delivery-man-orange-260nw-1689889483.jpg" alt="" />
          </div>
        </div>
    </div>
     
       
       
      <ProductCard menus={menus}/>
      </div>
    </div>
  );
};

export default SectionOne;
