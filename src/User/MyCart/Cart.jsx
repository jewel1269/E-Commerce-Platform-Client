import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { MdDelete, MdSystemUpdateAlt } from "react-icons/md";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [about, setAbout] = useState();

  useEffect(() => {
    const fetchCartProducts = async () => {
      if (user?.email) {
        try {
          const res = await axios.get(
            `https://e-commerce-platform-server.vercel.app/myCart/${user.email}`
          );
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
        .get(`https://e-commerce-platform-server.vercel.app/userInfo/${user?.email}`)
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

  const handleConfirm = (id) => {
    axios
      .patch(`https://e-commerce-platform-server.vercel.app/myCartStatus/${id}`, {
        status: "Confirmed",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error("Error updating order status:", error);
      });
  };

  const handleOrder = async (orderProduct) => {
    const id = orderProduct?._id;
    handleConfirm(id);
    console.log(id);
    console.log(orderProduct);

    axios
      .post("https://e-commerce-platform-server.vercel.app/order", {
        orderProduct,
        Date: new Date(),
        status: "pending",
        name: about?.username,
        address: about?.address,
        number: about?.number,
        image: about?.image,
      })
      .then((item) => {
        console.log(item.data);
        if (item.data) {
          alert("Order Successful");
        }
        window.reload
      });
  };

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://e-commerce-platform-server.vercel.app/cartDelete/${id}`;
        axios
          .delete(url)
          .then((response) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          })
          .catch((error) => {
            console.error("Error deleting item:", error);
            Swal.fire({
              title: "Error!",
              text: "There was a problem deleting your file.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="lg:p-4 overflow-x-auto">
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
          {products &&
            products.map((product, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border">
                  <img
                    src={product.menuCard?.imageUrl || product.menuCard?.imgSrc}
                    alt={product.title}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td className="py-2 px-4 border text-red-600">
                  {product.menuCard?.title || product.menuCard?.name}
                </td>
                <td className="py-2 px-4 border">
                  {product.menuCard?.description ||
                    product.menuCard?.shortDescription}
                </td>

                <td className="py-2 px-4 border">
                  {product.oldPrice && (
                    <span className="line-through text-gray-500 mr-2">
                      {product.menuCard?.priceRange}
                    </span>
                  )}
                  <span>
                    {product.menuCard?.priceRange || product.menuCard?.price}
                  </span>
                </td>
                <td className="py-2 px-4 border">
                  <button
                    onClick={() => handleOrder(product)}
                    className={`lg:w-36 text-black border h-12 lg:h-0 md:h-0 border-gray-400 px-4 btn-sm rounded-md ${
                      product?.status === "Confirmed"
                        ? "bg-green-400 text-black cursor-not-allowed"
                        : "hover:bg-orange-400"
                    }`}
                    disabled={product?.status === "Confirmed"}
                  >
                    {product?.status === "Confirmed"
                      ? "Confirmed"
                      : "Confirm Order"}
                  </button>
                </td>
                <td className="py-2 px-4 flex bg-gray-100  gap-2  border">
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-orange-500 text-white px-2  btn-sm rounded-md"
                  >
                    <MdDelete />
                  </button>
                  <button className="bg-green-500 text-white px-2 btn-sm rounded-md">
                    <MdSystemUpdateAlt />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
