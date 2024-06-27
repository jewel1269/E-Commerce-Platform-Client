import React from 'react';
import { MdDelete, MdSystemUpdateAlt } from 'react-icons/md';

const products = [
  {
    image: 'path/to/image1.jpg',
    title: 'Wood Tree Plant',
    description: 'Elementor Widgets are the most powerful, flexible and intuitive way...',
    rating: 0,
    oldPrice: '£20.00',
    newPrice: '£15.00',
  },
  {
    image: 'path/to/image2.jpg',
    title: 'Wood Potted Plant Tree',
    description: 'Wood Potted Plant Tree is a premium WordPress plugin that...',
    rating: 4,
    price: '£22.00',
  },
  {
    image: 'path/to/image3.jpg',
    title: 'Potted Plant',
    description: 'Elementor Widget - Potted Plant is a PHP/JS plugin for...',
    rating: 0,
    oldPrice: '£20.00',
    newPrice: '£18.00',
  },
  {
    image: 'path/to/image4.jpg',
    title: 'Tree Plant Potted',
    description: 'This plant widget will help you to create a visual...',
    rating: 0,
    price: '£30.00',
  },
  {
    image: 'path/to/image5.jpg',
    title: 'Plam Tree Plant',
    description: 'Elementor Widget - Plam Tree Plant is a widget/module/shortcode that...',
    rating: 0,
    oldPrice: '£23.00',
    newPrice: '£20.00',
  },
  {
    image: 'path/to/image6.jpg',
    title: 'Monstera Tree Plant',
    description: 'The Elementor Widget - Monstera Tree Plant is a simple...',
    rating: 0,
    oldPrice: '£22.00',
    newPrice: '£18.00',
  },
];

const StarRating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.112 3.429a1 1 0 00.95.691h3.6c.969 0 1.372 1.24.588 1.81l-2.918 2.118a1 1 0 00-.364 1.118l1.112 3.429c.3.921-.755 1.688-1.54 1.118L10 13.011l-2.918 2.118c-.785.57-1.84-.197-1.54-1.118l1.112-3.429a1 1 0 00-.364-1.118L3.372 8.857c-.784-.57-.381-1.81.588-1.81h3.6a1 1 0 00.95-.691l1.112-3.429z" />
        </svg>
      ))}
    </div>
  );
};

const Cart = () => {
  return (
    <div className="p-4">
      <table className="min-w-full bg-white border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Image</th>
            <th className="py-2 px-4 border">Title</th>
            <th className="py-2 px-4 border">Description</th>
            <th className="py-2 px-4 border">Rating</th>
            <th className="py-2 px-4 border">Price</th>
            <th className="py-2 px-4 border">Confirm Order</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border">
                <img src={product.image} alt={product.title} className="w-16 h-16 object-cover" />
              </td>
              <td className="py-2 px-4 border text-red-600">{product.title}</td>
              <td className="py-2 px-4 border">{product.description}</td>
              <td className="py-2 px-4 border">
                <StarRating rating={product.rating} />
              </td>
              <td className="py-2 px-4 border">
                {product.oldPrice && (
                  <span className="line-through text-gray-500 mr-2">{product.oldPrice}</span>
                )}
                <span>{product.newPrice || product.price}</span>
              </td>
              <td className="py-2 px-4 border">
                <button className="bg-red-500 text-white px-4 btn-sm rounded-md">Order</button>
              </td>
              <td className="py-2 px-4 flex  gap-2  border">
                <button className="bg-orange-500 text-white px-2  btn-sm rounded-md"><MdDelete /></button>
                <button className="bg-green-500 text-white px-2 btn-sm rounded-md"><MdSystemUpdateAlt /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
