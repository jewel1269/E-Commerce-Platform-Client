import React, { useEffect, useState } from 'react';

const ProductCard = ({ isNew, discount, sold, available, title, description, category, options, priceRange, imageUrl, outOfStock }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
      <div className="flex justify-between items-center">
        {isNew && <span className="bg-green-100 text-green-600 rounded-full px-2 py-1 text-xs font-bold">NEW</span>}
        {discount && <span className="bg-red-100 text-red-600 rounded-full px-2 py-1 text-xs font-bold">{discount}</span>}
      </div>
      <div className="flex-grow">
      <img src={imageUrl} alt={title} className="w-full h-40 rounded-xl shadow-lg  mt-4" />
        <div className="flex justify-between items-center my-2">
          <div className="text-xs font-bold">Sold: {sold}</div>
          <div className="text-xs font-bold">Available: {available}</div>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="text-xs text-gray-500 mb-2">{category}</div>
        {options && (
          <select className="bg-gray-100 border border-gray-300 rounded-md p-1 text-xs mb-4">
            {options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        )}
      </div>
      <div className="flex items-center justify-between">
        <div className="text-lg font-bold text-green-600">{priceRange}</div>
        {outOfStock ? (
          <span className="text-xs font-bold text-red-600">OUT OF STOCK</span>
        ) : (
          <button className="bg-green-600 text-white rounded-full px-4 py-2 text-xs">Add to Cart</button>
        )}
      </div>
      
    </div>
  );
};

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
     
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard
            isNew={true}
            // discount="-15%"
            sold={25}
            available={21}
            title="Mint"
            description="The mint plant is a herbaceous perennial that is widely known."
            category="Leafy Green"
            options={["Choose an option"]}
            priceRange="$13.00 - $22.00"
            imageUrl="https://img.freepik.com/free-photo/fresh-mint-leaves_23-2147819675.jpg?w=740&t=st=1687695533~exp=1687696133~hmac=a342104be29b1e08e66c0a1d06e3dc31ad5e80557cde99d915b50567b9e3af10"
          />
          <ProductCard
            isNew={true}
            discount="-20%"
            sold={32}
            available={9}
            title="Basil"
            description="To keep basil fresh, trim the stems and place them in a glass or jar of water."
            category="Leafy Green"
            options={["2 units"]}
            priceRange="$10.00 - $8.00"
            imageUrl="https://img.freepik.com/free-photo/fresh-green-basil-bunch-white-cup-isolated_114579-1428.jpg?w=740&t=st=1687695582~exp=1687696182~hmac=4f74a6c3d100bde8fcff7acaf58b04b7e4be964c4d7a59af6a67c994d7c1ef11"
          />
          <ProductCard
            discount="-25%"
            sold={40}
            available={134}
            title="Oyster Mushroom 500 Gr"
            description="Oyster Mushrooms are a healthy choice since they are very nutritious and low in calories."
            category="Mushrooms"
            options={["134 in stock"]}
            priceRange="$15.00 - $12.00"
            imageUrl="https://img.freepik.com/free-photo/fresh-oyster-mushroom-isolated-white-background_73524-647.jpg?w=740&t=st=1687695613~exp=1687696213~hmac=a98438f728af7b2eeb7e8d36e97cd9d6133023f91973cd27a30edb7b54423e8a"
          />
          <ProductCard
            discount="-33%"
            sold={13}
            available={7}
            title="Kiwi"
            description="Kiwi is a small, oval-shaped fruit with a brown fuzzy exterior and vibrant green interior."
            category="Tropical & Exotic"
            options={["7 in stock"]}
            priceRange="$15.00 - $10.00"
            imageUrl="https://img.freepik.com/free-photo/kiwi-fruit-slices_1205-104.jpg?w=740&t=st=1687695636~exp=1687696236~hmac=3139dd27c1fa062b22dd1a6a70c8a0c671d55629db2e10e01f5f3580218d1aaf"
          />
          <ProductCard
            discount="-17%"
            sold={3}
            available={17}
            title="Green Apples"
            description="Green apples delivered fresh! Crisp, fresh and hand-picked! Essential for your kitchen."
            category="Apple & Stone Fruits"
            options={["0.5 kg", "1 kg", "2 kg"]}
            priceRange="$10.00 - $14.00"
            imageUrl="https://img.freepik.com/free-photo/two-green-apples-isolated-white_114579-7467.jpg?w=740&t=st=1687695659~exp=1687696259~hmac=f1f8a43f12339aa4b35419ee4f2126b7f3334977e4eb4091240b768a7c12a31d"
          />
          <ProductCard
            discount="-38%"
            sold={12}
            available={6}
            title="Oak Smoked Salmon 400 Gr"
            description="Our delicious oak smoked Salmon is an excellent source of protein."
            category="Fish"
            options={["OUT OF STOCK"]}
            priceRange="$65.00 - $40.00"
            imageUrl="https://img.freepik.com/free-photo/whole-fresh-raw-salmon-fish-with-pepper-wooden-board_1150-11217.jpg?w=740&t=st=1687695680~exp=1687696280~hmac=77abec171b01ae054449bb98ba18a30b1e4a5f8344718b92d3c8c8c9bcb84002"
            outOfStock={true}
          />
          <ProductCard
            discount="-25%"
            sold={40}
            available={134}
            title="King Prawns Peeled In Brine 900 Gr"
            description="Great for a healthy salad and sandwiches, mix with our crayfish tails to make an even better sandwich."
            category="Other Seafood"
            options={["40 in stock"]}
            priceRange="$40.00 - $30.00"
            imageUrl="https://img.freepik.com/free-photo/raw-king-prawns-isolated-white_1205-2018.jpg?w=740&t=st=1687695701~exp=1687696301~hmac=1dc34df5acbbbd28f9c10458c6c30b2a0e8321425dd88d86d5cf1e96492a1f9f"
          />
        </div>
     
      </div>
    </div>
  );
};

export default SectionOne;
