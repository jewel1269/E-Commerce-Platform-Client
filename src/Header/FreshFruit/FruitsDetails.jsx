import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { FaLeftLong } from 'react-icons/fa6';

const FruitsDetails = () => {
    const { id } = useParams();
    const [menus, setMenus] = useState([]);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchMenus = async () => {
            try {
                const response = await axios.get("http://localhost:5000/freshFruit");
                setMenus(response.data);
            } catch (error) {
                console.error("Error fetching menus:", error);
            }
        };

        fetchMenus();
    }, []);

    const items = menus.find((item) => item?._id === id);

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrease = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    return (
        <div className="lg:flex justify-center items-center  bg-green-100">
            <div className="bg-green-100 lg:mr-12 lg:ml-64  lg:mt-5 lg:mb-5 shadow-lg rounded-lg overflow-hidden ">
                <div className="">
                    <img
                        src={items?.imageUrl}
                        alt={items?.title}
                        className="w-full lg:h-[400px] lg:w-[550px] lg:ml-36 rounded-lg shadow-xl h-full "
                    />
                </div>
                <div className="p-6 ">
                    <h2 className="text-2xl font-bold text-pink-600">{items?.title}</h2>
                    <p className="text-gray-500">OR PITAYA FRUIT</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">Price: {items?.price}</p>
                    <div className="flex items-center mt-2">
                        <span className="text-yellow-500 text-lg">★★★★☆</span>
                        <span className="text-gray-600 ml-2">(4.3)</span>
                    </div>
                    <p className="text-gray-600 mt-4">
                        {items?.descriptions}
                    </p>
                    <div className="flex items-center mt-4">
                        <span className="text-gray-700 mr-2">QUANTITY:</span>
                        <div className="flex items-center border rounded-lg px-2 py-1">
                            <button onClick={handleDecrease} className="text-gray-700 px-2">-</button>
                            <span className="px-2">{quantity}</span>
                            <button onClick={handleIncrease} className="text-gray-700 px-2">+</button>
                        </div>
                    </div>
                    <div className="flex items-center mt-6">
                        <button className="bg-pink-600 text-white rounded-full px-6 py-2 hover:bg-orange-400 shadow-md">ADD TO CART</button>
                       <NavLink to={-1}>
                       <p className="ml-4 flex items-center justify-center border border-gray-300 p-2 rounded-lg hover:bg-orange-400 hover:text-white text-gray-600"><FaLeftLong />back</p>
                       </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FruitsDetails;
