import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Tasty Daily</h3>
          <p className="text-gray-400">
            We're Tasty Daily Shop, an innovative team of food engineers. Our unique model minimizes fresh food handling by up to 85%, sourcing locally and dispatching within hours through cold chain logistics in eco-friendly containers.
          </p>
          <ul className="flex mt-4">
            <li className="mr-4">
              <a href="#" className="text-white hover:text-green-400">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-white hover:text-green-400">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-white hover:text-green-400">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-white hover:text-green-400">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
          <p className="text-gray-500 mt-4">© 2023 Tasty Daily Grocery WordPress Theme</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Get Latest News</h3>
          <p className="text-gray-400">
            Sign up to get 10% off your first order and stay up to date on the latest product releases, special offers and news.
          </p>
          <form className="flex mt-4">
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:border-green-500"
              placeholder="Your Email"
            />
            <button
              type="submit"
              className="px-4 py-2 ml-2 rounded-md bg-green-500 text-white hover:bg-green-600"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Payment Accept</h3>
          <div className="flex mt-4">
            <img src="https://img.icons8.com/color/48/000000/visa.png" alt="VISA" />
            <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" />
            <img src="https://img.icons8.com/color/48/000000/apple-pay.png" alt="Apple Pay" />
            <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="PayPal" />
            <img src="https://img.icons8.com/color/48/000000/american-express.png" alt="American Express" />
            <img src="https://img.icons8.com/color/48/000000/bitcoin.png" alt="Bitcoin" />
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-6 flex flex-col md:flex-row justify-between items-center">
        <div>
          <a href="#" className="text-gray-400 hover:text-green-400">About Us</a>
        </div>
        <div>
          <a href="#" className="text-gray-400 hover:text-green-400">Contact Us</a>
        </div>
        <div>
          <a href="#" className="text-gray-400 hover:text-green-400">Shipping Policy</a>
        </div>
        <div>
          <a href="#" className="text-gray-400 hover:text-green-400">Refund Policy</a>
        </div>
        <div>
          <a href="#" className="text-gray-400 hover:text-green-400">Privacy Policy</a>
        </div>
        <div>
          <a href="#" className="text-gray-400 hover:text-green-400">Delivery Info</a>
        </div>
        <div>
          <a href="#" className="text-gray-400 hover:text-green-400">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;