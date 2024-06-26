
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

<ProductCard/>
const SectionOne = () => {
    const [days, setDays] = useState(15);
    const [hours, setHours] = useState(10);
    const [minutes, setMinutes] = useState(24);
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        // Decrease seconds by 1
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          // Reset seconds and decrease minutes by 1
          setSeconds(59);
          if (minutes > 0) {
            setMinutes(minutes - 1);
          } else {
            // Reset minutes and decrease hours by 1
            setMinutes(59);
            if (hours > 0) {
              setHours(hours - 1);
            } else {
              // Reset hours and decrease days by 1
              setHours(23);
              if (days > 0) {
                setDays(days - 1);
              } else {
                // Countdown complete, do something (e.g., show a message)
                clearInterval(interval);
              }
            }
          }
        }
      }, 1000); // Update every second
  
      return () => clearInterval(interval); // Clean up on unmount or dependencies change
    }, [days, hours, minutes, seconds]);

  return (
    <div className="bg-green-50 py-12">
      <div className="lg:flex lg:gap-10 lg:ml-5 lg:mr-5 mx-auto">
    <div>
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Big Sales of Month</h2>
        <div className="flex justify-center items-center ">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-bold text-gray-800">Ends in:</h3>
            <div className="flex gap-5">
            <div className="flex gap-5">
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": days }}>{days}</span>
        </span>
        days
      </div>
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": hours }}>{hours}</span>
        </span>
        hours
      </div>
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": minutes }}>{minutes}</span>
        </span>
        min
      </div>
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": seconds }}>{seconds}</span>
        </span>
        sec
      </div>
    </div>
</div>

          </div>
        </div>
        <div className=" items-center mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md text-center w-full">
            <h3 className="text-lg font-bold text-gray-800">We Deliver on Next Day from</h3>
            <p className="text-green-600 text-xl font-bold">10:00 AM to 08:00 PM</p>
            <img className='lg:h-96 lg:w-[450px]' src="https://www.shutterstock.com/image-photo/smiling-asian-delivery-man-orange-260nw-1689889483.jpg" alt="" />
          </div>
        </div>
    </div>
     
       
       
      </div>
    </div>
  );
};

export default SectionOne;
