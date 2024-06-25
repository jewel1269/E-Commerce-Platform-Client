import React from 'react';

const ProductCard = ({ title, description, buttonLabel, imageUrl }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 flex items-center">
      <div className="flex-1">
        <h3 className="text-3xl font-bold text-green-600 mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition duration-300">
          {buttonLabel}
        </button>
      </div>
      <div className="w-1/3 ml-4">
        <img src={imageUrl} alt={title} className="w-full h-auto lg:w-96 lg:h-80 object-contain rounded-lg" />
      </div>
    </div>
  );
};

const ProductSection = () => {
  return (
    <div className="bg-green-50 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <ProductCard
          title="Tasty Honey From Farm Sellers"
          description="100% natural honey and bee products expertly crafted to nourish your skin and boost your health."
          buttonLabel="Shop Now"
          imageUrl="https://img.freepik.com/premium-photo/honey-jar-with-wooden-dipper-cutout_988198-836.jpg?w=740"
        />
        <ProductCard
          title="Kiwi Jam"
          description="For health conscious families. Spoon it on a crisp toast, roll in parathas, or just scoop it over vanilla ice."
          buttonLabel="Shop Now"
          imageUrl="https://5.imimg.com/data5/SELLER/Default/2023/7/329895838/ZF/GA/WV/612527/kiwi-jam.jpg"
        />
        <ProductCard
          title="Spices Set"
          description="Give a unique flavor to your food!"
          buttonLabel="Shop Now"
          imageUrl="https://m.media-amazon.com/images/I/81I56NyvcDL.jpg"
        />
        <ProductCard
          title="Italian Pasta from Florence"
          description="Authentic pasta is always the best choice. Non-GMO. Absolutely Nature!"
          buttonLabel="Shop Now"
          imageUrl="https://m.media-amazon.com/images/I/91WWV6z5OZL._AC_UF1000,1000_QL80_.jpg"
        />
      </div>
    </div>
  );
};

export default ProductSection;
