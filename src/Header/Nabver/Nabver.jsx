import React, { useContext, useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { GiBreakingChain, GiDrinkMe, GiFishCooked, GiFruitBowl, GiFruitTree, GiMeat, GiShoppingCart, GiShorts } from 'react-icons/gi';
import { PiBowlFoodBold, PiBowlFoodLight } from 'react-icons/pi';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Nabvar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [about, setAbout] = useState();
  const [products, setProducts] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fetchCartProducts = async () => {
      if (user?.email) {
        try {
          const res = await axios.get(`https://e-commerce-platform-server.vercel.app/myCart/${user.email}`);
          setProducts(res.data);
        } catch (err) {
          console.error("Error fetching user cart:", err);
        }
      }
    };

    fetchCartProducts();
  }, [user?.email]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://e-commerce-platform-server.vercel.app/userInfo/${user?.email}`)
        .then((res) => {
          setAbout(res.data);
        })
        .catch((err) => {
          console.error("Error fetching user info:", err);
        });
    }
  }, [user?.email]);

  const handleLogOut = () => {
    logOut()
      .then((res) => {
        console.log(res.user);
      })
  }

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-green-900 text-white text-sm py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className='text-md'>
            Delivery on Next Day from 10:00 AM to 08:00 PM
          </div>
          <div className="flex space-x-4">
            <a href="tel:+1900777525" className="hover:text-gray-300">+1 900 777525</a>
            <a href="#" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaWhatsapp />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      {/* Main Navbar */}
      <div className="bg-white  text-green-900 border-b">
        <div className=" mx-auto flex justify-between items-center py-4 px-4">
          <a href="/" className="flex items-center space-x-2">
            <div className="text-3xl font-bold text-green-500">Tasty</div>
            <a href="#" className="hover:text-green-700 flex items-center space-x-1">
              <PiBowlFoodBold className='w-8 h-8 mt-2' />
            </a>
            <div className="text-3xl font-bold">Daily</div>
          </a>
          <div className="hidden lg:flex text-xl space-x-8">
            <a href="/" className="hover:text-green-700 flex items-center space-x-1">
              <GiShorts className="w-8 h-8" />
              <span className='font-semibold text-black'>Shop</span>
            </a>
            <a href="vegitableShop" className="hover:text-green-700 flex items-center space-x-1">
              <GiFruitTree className="w-8 h-8" />
              <span className='font-semibold text-black'>Vegetables</span>
            </a>
            <a href="freshFruit" className="hover:text-green-700 flex items-center space-x-1">
              <GiFruitBowl className="w-8 h-8" />
              <span className='font-semibold text-black'>Fresh Fruit</span>
            </a>
            <a href="meat" className="hover:text-green-700 flex items-center space-x-1">
              <GiMeat className="w-8 h-8" />
              <span className='font-semibold text-black'>Meat</span>
            </a>
            <a href="seaFood" className="hover:text-green-700 flex items-center space-x-1">
              <GiFishCooked className="w-8 h-8" />
              <span className='font-semibold text-black'>Seafood</span>
            </a>
            <a href="drinks" className="hover:text-green-700 flex items-center space-x-1">
              <GiDrinkMe className="w-8 h-8" />
              <span className='font-semibold text-black'>Drinks</span>
            </a>
            <a href="#" className="hover:text-green-700 flex items-center space-x-1">
              <GiShoppingCart className="w-8 h-8" />
              <span className='font-semibold text-black'>Other</span>
            </a>
          </div>
          <div className="flex items-center text-xl space-x-4">
            <a href="#" className="hover:text-green-700">🔍</a>
            <a href="#" className="hover:text-green-700 flex items-center">
              🛒
              <span className="ml-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">{products.length}</span>
            </a>
            {user ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    {user ? (
                      <img
                        alt="User Avatar"
                        src={user?.photoURL || about?.image}
                      />
                    ) : (
                      <img
                        alt="Default Avatar"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      />
                    )}
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  {about?.role === 'admin' && (
                    <li>
                      <a href='dashboard/adminPart' className="justify-between">
                        Dashboard
                      </a>
                    </li>
                  )}
                  {about?.role === 'user' && (
                    <li>
                      <a href='dashboard/userPart' className="justify-between">
                        Dashboard
                      </a>
                    </li>
                  )}
                  <li><a onClick={handleLogOut}>Logout</a></li>
                </ul>
              </div>
            ) : (
              <a href="/Login" className="hover:text-green-700">👤</a>
            )}
          </div>
          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-green-700 focus:outline-none">
              {menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden">
          <div className="flex flex-col space-y-2 px-4 py-2">
            <a href="/" className="hover:text-green-700 flex items-center space-x-1">
              <GiShorts className="w-6 h-6" />
              <span className='font-semibold text-black'>Shop</span>
            </a>
            <a href="vegitableShop" className="hover:text-green-700 flex items-center space-x-1">
              <GiFruitTree className="w-6 h-6" />
              <span className='font-semibold text-black'>Vegetables</span>
            </a>
            <a href="freshFruit" className="hover:text-green-700 flex items-center space-x-1">
              <GiFruitBowl className="w-6 h-6" />
              <span className='font-semibold text-black'>Fresh Fruit</span>
            </a>
            <a href="meat" className="hover:text-green-700 flex items-center space-x-1">
              <GiMeat className="w-6 h-6" />
              <span className='font-semibold text-black'>Meat</span>
            </a>
            <a href="seaFood" className="hover:text-green-700 flex items-center space-x-1">
              <GiFishCooked className="w-6 h-6" />
              <span className='font-semibold text-black'>Seafood</span>
            </a>
            <a href="drinks" className="hover:text-green-700 flex items-center space-x-1">
              <GiDrinkMe className="w-6 h-6" />
              <span className='font-semibold text-black'>Drinks</span>
            </a>
            <a href="#" className="hover:text-green-700 flex items-center space-x-1">
              <GiShoppingCart className="w-6 h-6" />
              <span className='font-semibold text-black'>Other</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nabvar;
