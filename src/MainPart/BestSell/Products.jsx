import React from 'react';

const products = [
  {
    id: 1,
    name: "Spring Onions 1 Bunch",
    description: "Go for spring onions with firm, unblemished bulbs and bright green, perky leaves.",
    category: "Leafy Green",
    price: "$10.00",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ5hVZboYqW8dQygpvLRvNdaJDT2P7w0HqAA&s",
    isNew: true,
  },
  {
    id: 2,
    name: "Red Radish 1 Pack",
    description: "The color of a radish is a strong indicator of its taste. Pick the ones that are a rich, full red.",
    category: "Root",
    price: "$20.00",
    imgSrc: "https://images.othoba.com/images/thumbs/0488243_red-radish-seeds-01gm-intact-pack.jpeg",
    isNew: true,
  },
  {
    id: 3,
    name: "Avocados 2 Units",
    description: "Avocados are a rich source of vitamins C, E, K, and B-6.",
    category: "Tropical & Exotic",
    price: "$60.00",
    imgSrc: "https://m.media-amazon.com/images/I/71uqwKJtNeL.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Oyster Mushroom 500 Gr",
    description: "Oyster Mushrooms are a healthy choice since they are very nutritious and low in calories.",
    category: "Mushrooms",
    price: "$12.00",
    oldPrice: "$15.00",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2MJoMJmn70hRva96LSCl22Ljc1oc9kjD-Kw&s",
    discount: 25,
    sold: 40,
    available: 134,
    inStock: true,
  },
  {
    id: 5,
    name: "Carrots 1 Kg",
    description: "Carrots can be stored in the refrigerator for up to a month if stored properly.",
    category: "Root",
    price: "$10.00",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb9vFsCFKzJOIQqNMW5_-8zQKtOhkdxW0_OQ&s",
    isNew: true,
  },
  {
    id: 6,
    name: "Basil",
    description: "To keep basil fresh, trim the stems and place them in a glass or jar of water.",
    category: "Leafy Green",
    price: "$8.00",
    oldPrice: "$10.00",
    imgSrc: "https://m.media-amazon.com/images/I/51W8xfdp-iL._AC_UF1000,1000_QL80_.jpg",
    discount: 20,
    sold: 32,
    available: 9,
    inStock: true,
  },
  {
    id: 7,
    name: "Organic Carrot Juice 750ml",
    description: "James White Organic Carrot Juice is carrot juice at its best using only the best organic carrots.",
    category: "Juice",
    price: "$35.00",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToDKyYeQ1cb5hVT7FCCW4swNPwQSUCD-Hwdg&s",
  },
  {
    id: 8,
    name: "Mint",
    description: "The mint plant is a herbaceous perennial that is widely known.",
    category: "Leafy Green",
    priceRange: "$13.00 - $22.00",
    imgSrc: "https://www.allrecipes.com/thmb/mFIOXhegBWSBUHh7tF0RCbME5vU=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/43399-mint-jelly-ddmfs-Beauty-3x4-3e3da039edfe44fa9853b017d0a81d59.jpg",
    discount: 13,
    sold: 25,
    available: 21,
    inStock: true,
  },
];


const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded shadow text-center">
      {product.isNew && <span className="bg-green-600 text-start text-white py-1 px-2 rounded-full  top-2 left-2">NEW</span>}
      {product.discount && (
        <span className="bg-red-600 text-white text-start py-1 px-2 rounded-full  top-2 left-2">
          -{product.discount}%
        </span>
      )}
      <img src={product.imgSrc} alt={product.name} className="mx-auto h-64 mb-4" />
      <div className="font-semibold">{product.name}</div>
      <p className="text-gray-500 text-sm">{product.description}</p>
      <div className="text-gray-400 text-xs mb-2">{product.category}</div>
      {product.oldPrice && (
        <div className="text-gray-400 line-through text-sm">{product.oldPrice}</div>
      )}
      <div className="flex justify-around">
      <div className="text-green-600 font-bold text-lg">{product.price ? product.price : product.priceRange}</div>
      <button className="btn rounded-full btn-xs">Add to cart</button>
      </div>
      {product.rating && (
        <div className="flex justify-center mt-2">
          {Array(product.rating)
            .fill()
            .map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.5 3 2.1-6.3L2 8l6.6-.1L10 2l1.4 5.9L18 8l-4.6 3.7L15.5 18z" />
              </svg>
            ))}
        </div>
      )}
      {product.sold !== undefined && (
        <div className="mt-2">
          <div className="flex justify-between text-xs text-gray-500">
            <span>Sold: {product.sold}</span>
            <span>Available: {product.available}</span>
          </div>
          <div className="h-2 w-full bg-gray-200 rounded mt-1">
            <div
              className="h-2 bg-green-600 rounded"
              style={{ width: `${(product.sold / (product.sold + product.available)) * 100}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

const Products = () => {
  return (
    <div className="bg-green-100 p-6">
      <div className="text-2xl font-semibold mb-6">Bestsellers in December</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
