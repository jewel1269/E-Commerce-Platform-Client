import React from 'react';

const AddProductForm = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add Item to Inventory</h2>
      <form className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-gray-700">Item Number</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            defaultValue="Item 13"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Upload Image</label>
          <input
            type="file"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            accept="image/*"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Item Number</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            defaultValue="Item 13"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Item Number</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            defaultValue="Item 13"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Item Number</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            defaultValue="Item 13"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Item Number</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            defaultValue="Item 13"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Item Number</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            defaultValue="Item 13"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Site</label>
          <select className="w-full mt-1 p-2 border border-gray-300 rounded">
            <option>Site One</option>
            {/* Add more site options as needed */}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Unit of Measure</label>
          <select className="w-full mt-1 p-2 border border-gray-300 rounded">
            <option>EA</option>
            {/* Add more unit options as needed */}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Serial Number</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Quantity</label>
          <input
            type="number"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            defaultValue="1"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">RFID Tag Number</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Expiration Date</label>
          <input
            type="date"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Inventory Date</label>
          <input
            type="date"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            defaultValue="2020-07-22"
          />
        </div>

        <div className="col-span-2 flex items-center">
          <button
            type="submit"
            className="mr-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
          <button
            type="button"
            className="p-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
