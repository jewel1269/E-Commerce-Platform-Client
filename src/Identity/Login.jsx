import React, { useContext, useState } from 'react';
import axios from 'axios';
import { FaGoogle, FaTwitter } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';


const provider = new GoogleAuthProvider()
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { googleLogin,signIn,}= useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { email, password };
        console.log(data);
        signIn(email, password)
        .then(res=>{
            console.log(res.user);
        })
        navigate(location.state)


        // try {
        //     const response = await axios.post('YOUR_BACKEND_URL', data);
        //     console.log(response.data);
        // } catch (error) {
        //     console.error('There was a problem with the axios operation:', error);
        // }
    };

    const handleGoogleLogin = ()=>{
        googleLogin(provider)
        .then(res=>{
            console.log(res.user);
            navigate(location.state)
        })
    }

    return (
        <div className="w-full max-w-sm p-6 m-auto mx-auto lg:mt-10 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="text-center mx-auto">
                <h1 className='text-xl font-semibold'>WellCome Mr.</h1>
                <h1 className='text-md font-semibold'>Login</h1>
            </div>

            <form className="mt-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200">
                        Username
                    </label>
                    <input
                        type="email"
                        id="email"
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>

                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm text-gray-800 dark:text-gray-200">
                            Password
                        </label>
                        <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                            Forget Password?
                        </a>
                    </div>
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
                        Sign In
                    </button>
                </div>
            </form>

            <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>
                <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
                    or login with Social Media
                </a>
                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
            </div>

            <div className="flex flex-col items-center mt-6 -mx-2">
                <button onClick={handleGoogleLogin} type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                    <FaGoogle className="w-4 h-4 mx-2" />
                    <span className="hidden mx-2 sm:inline">Sign in with Google</span>
                </button>

               
            </div>

            <p className="mt-8 text-xs font-light text-center text-gray-400">
                Don't have an account? <a href="/SignUp" className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Create One</a>
            </p>
        </div>
    );
};

export default Login;
