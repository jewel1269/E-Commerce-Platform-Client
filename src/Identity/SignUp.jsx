import React, { useContext, useState } from "react";
import axios from "axios";
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { useDropzone } from "react-dropzone";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null);
  const [gender, setGender] = useState("");
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onDrop = (acceptedFiles) => {
    setImage(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const uploadImageToImgbb = async (image) => {
    const formData = new FormData();
    formData.append("image", image);

    const imgbbEndpoint = `https://api.imgbb.com/1/upload?key=c08defba44209bd4d668f932824f5184`;

    try {
      const response = await axios.post(imgbbEndpoint, formData);
      return response.data.data.url;
    } catch (error) {
      console.error("There was a problem with the image upload:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl;

    try {
      imageUrl = await uploadImageToImgbb(image);
    } catch (error) {
      alert("Image upload failed. Please try again.");
      return;
    }

    const formData = {
      username,
      password,
      email,
      phoneNumber,
      address,
      image: imageUrl,
      gender,
      role:'user',
      date: new Date()
    };

    console.log(formData);

    try {
      await createUser(email, password);
      alert("Successfully registered");

      const response = await axios.post("http://localhost:5000/users", formData);
      console.log(response.data);

      if (response.data) {
        alert("Data sent to MongoDB");
      }

      navigate("/");
    } catch (error) {
      console.error("There was a problem with the registration:", error);
    }
  };

  return (
    <div className="w-full max-w-sm p-6 m-auto mx-auto lg:mt-10 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="text-center mx-auto">
        <h1 className="text-xl font-semibold">Welcome</h1>
        <h1 className="text-md font-semibold">Sign Up</h1>
      </div>

      <form className="mt-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="username"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="email"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="phoneNumber"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="address"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="image"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Profile Image
          </label>
          <div
            {...getRootProps()}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          >
            <input {...getInputProps()} />
            {image ? <p>{image.name}</p> : <p>Drag and drop a file here</p>}
          </div>
        </div>

        <div className="mt-4">
          <label
            htmlFor="gender"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Gender
          </label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mt-4">
          <label
            htmlFor="password"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-6">
          <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
            Sign Up
          </button>
        </div>
      </form>

      <div className="flex items-center justify-between mt-4">
        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>
        <a
          href="#"
          className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
        >
          or sign up with Social Media
        </a>
        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
      </div>

      <div className="flex flex-col items-center mt-6 -mx-2">
        <button
          type="button"
          className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
        >
          <FaGoogle className="w-4 h-4 mx-2" />
          <span className="hidden mx-2 sm:inline">Sign up with Google</span>
        </button>
        <button
          type="button"
          className="flex items-center justify-center w-full px-6 py-2 mx-2 mt-4 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-400 rounded-lg hover:bg-blue-300 focus:bg-blue-300 focus:outline-none"
        >
          <FaTwitter className="w-4 h-4 mx-2" />
          <span className="hidden mx-2 sm:inline">Sign up with Twitter</span>
        </button>
      </div>

      <p className="mt-8 text-xs font-light text-center text-gray-400">
        Already have an account?{" "}
        <a
          href="/login"
          className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
        >
          Sign In
        </a>
      </p>
    </div>
  );
};

export default SignUp;
