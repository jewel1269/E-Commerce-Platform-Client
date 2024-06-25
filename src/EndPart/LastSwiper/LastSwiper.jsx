import React from 'react';

const ProductCard = ({ title, description, price, oldPrice, image, discount, buttonText }) => {
  return (
    <div className="max-w-sm  rounded overflow-hidden shadow-lg">
      
      <div className="px-6 py-4">
        {discount && (
          <div className="bg-green-500 text-white font-bold rounded-full px-3 py-1 text-xs mb-2">
            -{discount}%
          </div>
        )}
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-2">{description}</p>
        {price && (
          <div className="flex items-center mb-2">
            <span className="text-gray-500 text-lg mr-2">
              {oldPrice && <span className="line-through text-gray-400">${oldPrice}</span>}
            </span>
            <span className="font-bold text-lg">${price}</span>
          </div>
        )}
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {buttonText}
        </button>
      </div>
      <img className="w-full" src={image} alt={title} />
    </div>
  );
};

const LastSwiper = () => {
  const products = [
    {
      title: '-20%',
      description: 'Every Friday - Every Week!',
      image: 'https://img.freepik.com/premium-photo/vibrant-energetic-overhead-shot-fresh-fruits-arranged-white-background-generated-by-ai_1038983-12982.jpg?w=740', 
      buttonText: 'Shop Now',
    },
    {
      title: 'Fresh Fruits',
      description: 'Sweet and juicy fruits only from us!',
      image: 'https://www.bestworkwear.co.uk/media/catalog/product/cache/2/image/434x502/9df78eab33525d08d6e5fb8d27136e95/q/d/qd23.jpg',
      discount: 10,
      buttonText: 'Shop Now',
    },
    {
      title: '$9.99',
      description: '1 kg for Watermelon from South Africa',
      image: 'https://img.freepik.com/premium-photo/juicy-whole-watermelon-with-slice-isolated-white-background_1021632-83.jpg?w=1380',
      price: 9.99,
      oldPrice: 15.99,
      buttonText: 'Shop Now',
    },
    {
      title: 'Vegetables',
      description: 'From the farm straight to our store',
      image: 'https://img.freepik.com/premium-photo/2_873925-133453.jpg?w=740',
      buttonText: 'Shop Now',
    },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default LastSwiper;