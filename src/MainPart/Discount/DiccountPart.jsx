import React from 'react';

const DiccountPart = () => {
    return (
        <div>
            <div className="bg-green-100 p-6">
      <div className="bg-green-200 text-center py-2">
        <span className="font-semibold">30% Discount for Your First Purchase!</span>
        <span className="ml-2 bg-white text-green-600 font-bold px-2 py-1 rounded">TD555777</span>
        <span className="ml-2">Use this discount code on Checkout page.</span>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-6">
        <div className="bg-white flex items-center justify-center p-4 rounded shadow text-center">
          <div className="font-semibold text-2xl">Organic <span className="text-green-600">Olive Oil</span> <br /> from  France Fields</div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9CRK9eoQn4FGt4nDfzgMvsmur7ca-Hiwy4BuEuFgD2-N9RFSCsWqRyZxA1jiyZTi8leM&usqp=CAU" alt="Olive Oil" className="mx-auto mb-4" />
        </div>
        <div className="bg-white flex  items-center justify-center  p-4 rounded shadow text-center">
          <div className="font-semibold text-2xl">Sweet <span className="text-green-600">Candy</span> <br /> from South Korea</div>
          <img src="https://s7.orientaltrading.com/is/image/OrientalTrading/14090827?$PDP_VIEWER_IMAGE$" alt="Candy" className="mx-auto h-56 mb-4" />
        </div>
        <div className="bg-white p-4 flex items-center justify-center rounded shadow text-center">
          <div className="font-semibold text-2xl">Tasty <span className="text-green-600">Chocolate</span> <br /> from Switzerland</div>
          <img src="https://www.spruengli.ch/images/shop/selection-de-pralines-truffes.jpg" alt="Chocolate" className="mx-auto h-56 mb-4" />
        </div>
      </div>
    </div>
        </div>
    );
};

export default DiccountPart;