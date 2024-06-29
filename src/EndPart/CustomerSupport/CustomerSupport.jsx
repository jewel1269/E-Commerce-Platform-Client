import React, { useState } from 'react';

function CustomerSupport() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      <div className="lg:h-72 lg:flex lg:mb-5 items-center justify-around p-10 rounded-lg shadow-md">
        <img className="h-72 w-auto" src="https://img.freepik.com/premium-photo/smiling-man-blue-suit-with-headset-giving-thumbs-up_988987-24272.jpg?w=740" alt="Support" />
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
          <button
            onClick={openModal}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Chat Now
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center border-b pb-3 mb-3">
              <h3 className="text-lg font-semibold">Contact With Tasty Daily</h3>
              <button onClick={closeModal} className="text-gray-500 text-5xl hover:text-gray-700">&times;</button>
            </div>
            <form>
              <div className="mb-4">
                <input type="text" placeholder="First name" className="border p-2 w-full rounded-md" />
              </div>
              <div className="mb-4">
                <input type="text" placeholder="Last name" className="border p-2 w-full rounded-md" />
              </div>
              <div className="mb-4">
                <input type="email" placeholder="Your email address" className="border p-2 w-full rounded-md" />
              </div>
              <div className="mb-4">
                <textarea placeholder=' Message................' className="border p-2 w-full rounded-md" rows="4">
                 
                </textarea>
              </div>
              <div className="flex items-center mb-4">
                <input type="checkbox" id="attach-renter-card" className="mr-2" />
                <label htmlFor="attach-renter-card" className="text-gray-600">Attach Renter Card</label>
              </div>
              <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomerSupport;
