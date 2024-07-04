import axios from 'axios';
import React, { useEffect, useState } from 'react';

const BigSlae = () => {
    const [productDatas, setProductDatas] = useState([]);

    useEffect(() => {
        const fetchMenus = async () => {
            try {
                const response = await axios.get("https://e-commerce-platform-server.vercel.app/allMenus");
                console.log(response.data);
                setProductDatas(response.data);
            } catch (error) {
                console.error("Error fetching menus:", error);
            }
        };

        fetchMenus();
    }, []); // Empty dependency array ensures the effect runs only once on component mount

    console.log(productDatas); // Corrected variable name

    return (
        <div>
            {productDatas.map(productData => (
                <div key={productData._id} className="container mx-auto lg:p-4">
                    <table className="table-auto w-full border-collapse border border-gray-200">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Attribute</th>
                                <th className="border border-gray-300 px-4 py-2">Value</th>
                                <th className="border border-gray-300 px-4 py-2">Update item</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Discount</td>
                                <td className="border border-gray-300 px-4 py-2">{productData?.discount}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Sold</td>
                                <td className="border border-gray-300 px-4 py-2">{productData.sold}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Available</td>
                                <td className="border border-gray-300 px-4 py-2">{productData.available}</td>
                            </tr>
                            
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Title</td>
                                <td className="border border-gray-300 px-4 py-2">{productData.title}</td>
                                
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Description</td>
                                <td className="border border-gray-300 px-4 py-2">{productData.description}</td>
                                <tr >
                                <button className="btn lg:ml-20 btn-sm btn-error text-white">Update</button>
                            </tr>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Category</td>
                                <td className="border border-gray-300 px-4 py-2">{productData.category}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Options</td>
                                <td className="border border-gray-300 px-4 py-2">{productData.options}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Price Range</td>
                                <td className="border border-gray-300 px-4 py-2">{productData.priceRange}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Image</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <img src={productData.imageUrl} alt={productData.title} className="w-32 h-32 object-cover" />
                                </td>
                               
                                
                            </tr>
                            
                            
                        </tbody>
                        
                    </table>
                    
                </div>
            ))}
        </div>
    );
};

export default BigSlae;
