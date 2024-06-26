import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AboutMe = () => {
    const {user}= useContext(AuthContext)
  return (
    <div className="flex flex-col items-center p-8 bg-white text-gray-800">
      <div className='flex items-start justify-between w-full max-w-4xl'>
        <div className="w-auto h-auto lg:h-72 lg:w-72 bg-gray-300 rounded-xl flex items-center justify-center">
          <img src={user?.photoURL} alt="Avatar" className="w-full h-full rounded-xl" />
        </div>

        <div className="ml-8">
          <h1 className="text-3xl font-bold mt-4">About Me</h1>
          <h2 className="text-lg text-red-600 mt-2">A Lead UX & UI designer based in Canada</h2>

          <p className="text-start text-gray-700 mt-4 max-w-2xl">
            I <span className="text-blue-600">design and develop</span> services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.
          </p>

          <div className="grid grid-cols-1 text-start sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="flex flex-col items-start">
              <p className="text-gray-600">Birthday</p>
              <p className="font-bold">4th April 1998</p>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-gray-600">Age</p>
              <p className="font-bold">22 Yr</p>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-gray-600">Residence</p>
              <p className="font-bold">Canada</p>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-gray-600">Address</p>
              <p className="font-bold">California, USA</p>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-gray-600">E-mail</p>
              <p className="font-bold">info@domain.com</p>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-gray-600">Phone</p>
              <p className="font-bold">820-885-3321</p>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-gray-600">Skype</p>
              <p className="font-bold">skype.0404</p>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-gray-600">Freelance</p>
              <p className="font-bold">Available</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8 w-full max-w-4xl bg-gray-100 p-4 rounded-lg">
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold text-blue-600">500</p>
          <p className="text-gray-600">Happy Clients</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold text-blue-600">150</p>
          <p className="text-gray-600">Project Completed</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold text-blue-600">850</p>
          <p className="text-gray-600">Photo Capture</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold text-blue-600">190</p>
          <p className="text-gray-600">Telephonic Talk</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
