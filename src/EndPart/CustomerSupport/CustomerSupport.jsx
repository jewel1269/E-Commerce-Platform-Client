import React from 'react';

function CustomerSupport() {
  return (
    <div className=" lg:h-72 lg:flex items-center justify-around p-10 rounded-lg shadow-md">
        <img className='h-72 w-auto' src="https://img.freepik.com/premium-photo/smiling-man-blue-suit-with-headset-giving-thumbs-up_988987-24272.jpg?w=740" alt="" />
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-green-500 mb-4">
          Chat with us if You've
          <br />
          Any Questions
        </h2>
        <p className="text-gray-600 mb-6">
          <span className="inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M2 3a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm16 0v5h-5v-5h5zm-8 8H7v-4h6v4zm0-6H7v2h6v-2z"
              />
            </svg>
            <span className="ml-2">24/7 Everyday Free Support!</span>
          </span>
        </p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Chat Now
        </button>
      </div>
      
     
    </div>
  );
}

export default CustomerSupport;