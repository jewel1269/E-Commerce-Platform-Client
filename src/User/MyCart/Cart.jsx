import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { MdDelete, MdSystemUpdateAlt } from 'react-icons/md';
import { AuthContext } from '../../AuthProvider/AuthProvider';






const Cart = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [about, setAbout] = useState()
  
  useEffect(() => {
    const fetchCartProducts = async () => {
      if (user?.email) {
        try {
          const res = await axios.get(`http://localhost:5000/myCart/${user.email}`);
          // console.log(res.data);
          setProducts(res.data);
        } catch (err) {
          console.error("Error fetching user cart:", err);
        }
      }
    };

    fetchCartProducts();
  }, [user?.email]);
 
  console.log(products);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/userInfo/${user?.email}`)
        .then((res) => {
          console.log(res.data);
          setAbout(res.data);
        })
        .catch((err) => {
          console.error("Error fetching user info:", err);
        });
    }
  }, [user?.email]);

    console.log(about);

  const handleOrder = async(orderProduct)=>{
    console.log(orderProduct);

   axios.post('http://localhost:5000/order', {
    orderProduct,
    Date: new Date(),
    status: 'pending',
    name: about?.username,
    address: about?.address,
    number: about?.number,
    image: about?.image
   } )
    .then(item=>{
      console.log(item.data);
      if(item.data){
        alert('Order Successful')
      }
    })
  }

  return (
    <div className="p-4">
      <table className="min-w-full bg-white border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Image</th>
            <th className="py-2 px-4 border">Title</th>
            <th className="py-2 px-4 border">Description</th>
           
            <th className="py-2 px-4 border">Price</th>
            <th className="py-2 px-4 border">Confirm Order</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products && products.map((product, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border">
                <img src={product.menuCard?.imageUrl} alt={product.title} className="w-16 h-16 object-cover" />
              </td>
              <td className="py-2 px-4 border text-red-600">{product.menuCard?.title}</td>
              <td className="py-2 px-4 border">{product.menuCard?.description}</td>
              
              <td className="py-2 px-4 border">
                {product.oldPrice && (
                  <span className="line-through text-gray-500 mr-2">{product.menuCard?.priceRange}</span>
                )}
                <span>{product.menuCard?.priceRange || product.price}</span>
              </td>
              <td className="py-2 px-4 border">
                <button onClick={()=>handleOrder(product)} className="bg-red-500 text-white px-4 btn-sm rounded-md">Order</button>
              </td>
              <td className="py-2 px-4 flex  gap-2  border">
                <button className="bg-orange-500 text-white px-2  btn-sm rounded-md"><MdDelete /></button>
                <button className="bg-green-500 text-white px-2 btn-sm rounded-md"><MdSystemUpdateAlt /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
