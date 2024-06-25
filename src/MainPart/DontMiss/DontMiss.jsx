import React from 'react';

const discounts = [
  {
    id: 1,
    label: "Discount",
    title: "Fresh Deals Await: Shop Now!",
    date: "From 1 May 2023 00:00 AM",
    imgSrc: "https://img.freepik.com/premium-photo/fresh-fruits-apples-bananas-oranges-lemons-eco-friendly-bags-border_186260-1263.jpg?w=1380",
    discount: "-15%",
    category: "Fresh Deals",
  },
  {
    id: 2,
    label: "Free",
    title: "Natural Fresh Drinks in Our Market",
    date: "From 1 May 2023 00:00 AM",
    imgSrc: "https://img.freepik.com/premium-photo/mango-pineapple-orange-smoothie-created-from-scratch-served-glass-container_1043470-12898.jpg?w=740",
  },
  {
    id: 3,
    label: "Discount",
    title: "Cheap Meat from Our Farmers",
    date: "From 1 May 2023 00:00 AM",
    imgSrc: "https://img.freepik.com/premium-photo/two-raw-meats-with-sprig-parsley-them_741212-1708.jpg?w=1380",
    discount: "-25%",
    category: "For All Meat",
  },
  {
    id: 4,
    label: "Discount",
    title: "Tasty Bread Everyday!",
    date: "From 1 May 2023 00:00 AM",
    imgSrc: "https://img.freepik.com/premium-photo/freshly-baked-traditional-bread-rustic-wooden-table-with-powdery-flour-flying-into-air-ai-gene_863013-1263.jpg?w=740",
  },
  {
    id: 5,
    label: "Discount",
    title: "Quality and Savings Combined!",
    date: "From 1 May 2023 00:00 AM",
    imgSrc: "https://img.freepik.com/premium-photo/freshly-roasted-coffee-beans-closeup-coffee_143127-4816.jpg?w=1380",
    category: "Coffee from Brazil",
  },
  {
    id: 6,
    label: "Discount",
    title: "Don’t Miss Our Discounts for Milk!",
    date: "From 1 May 2023 00:00 AM",
    imgSrc: "https://img.freepik.com/free-photo/high-angle-plain-yogurt-jars-with-oats_23-2148566181.jpg?t=st=1719328982~exp=1719332582~hmac=a77c419ebe7c512efab4a51cfba988347612a3a605ec8cf78f16893f91833d58&w=1380",
  },
];

const DiscountCard = ({ discount }) => {
  return (
    <div className="bg-white rounded-2xl shadow relative">
      <img src={discount.imgSrc} alt={discount.title} className="w-full h-56 rounded-t" />
      <div className="absolute top-2 p-2 left-2 bg-white text-green-600 py-1 px-2 rounded-full text-xs">
        {discount.label}
      </div>
      {discount.discount && (
        <div className="absolute top-2 p-2 right-2 bg-green-600 text-white py-1 px-2 rounded-full text-xs">
          {discount.discount}
        </div>
      )}
      {discount.category && (
        <div className="absolute bottom-2 p-2 right-2 bg-white text-green-600 py-1 px-2 rounded-full text-xs">
          {discount.category}
        </div>
      )}
      <div className="mt-4 p-2 font-semibold">{discount.title}</div>
      <div className="text-gray-500 p-2 text-sm">{discount.date}</div>
    </div>
  );
};

const DontMiss = () => {
  return (
    <div className="bg-green-100 p-6">
      <div className="text-2xl font-semibold mb-6">Don't Miss our Discounts</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        {discounts.map((discount) => (
          <DiscountCard key={discount.id} discount={discount} />
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="border border-green-600 text-green-600 py-2 px-4 rounded-full">
          Show All
        </button>
      </div>
    </div>
  );
};

export default DontMiss;
