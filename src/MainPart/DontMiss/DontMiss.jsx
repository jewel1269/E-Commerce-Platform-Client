import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import loadingImg from "/Animation - 1719949818611.gif";
import { AuthContext } from '../../AuthProvider/AuthProvider';

const DiscountCard = ({ discount }) => {
  return (
    <div className="bg-white lg:w-96 rounded-2xl shadow relative">
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
  const [discounts, setDiscounts] = useState([]);
  const { loading } = useContext(AuthContext);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get("http://localhost:5000/notMiss");
        console.log(response.data);
        setDiscounts(response.data);
      } catch (error) {
        console.error("Error fetching menus:", error);
      }
    };

    fetchMenus();
  }, []); 

  if (loading) {
    return (
      <div className='flex lg:ml-32 items-center justify-center'>
        <img className='lg:h-36 lg:w-44' src={loadingImg} alt="Loading" />
      </div>
    )
  }

  return (
    <div className="bg-green-100 lg:p-6">
      <div className="text-2xl font-semibold mb-6">Don't Miss our Discounts</div>
      <Swiper
        slidesPerView={1}
        spaceBetween={2}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
      >
        {discounts.map((discount) => (
          <SwiperSlide key={discount.id}>
            <DiscountCard discount={discount} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center mt-4">
        <button className="border border-green-600 text-green-600 py-2 px-4 rounded-full">
          Show All
        </button>
      </div>
    </div>
  );
};

export default DontMiss;
