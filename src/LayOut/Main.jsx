import { Outlet } from "react-router-dom";
import Nabvar from "../Header/Nabver/Nabver";
import Footer from "../EndPart/Footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import MessengerChat from "../MassengerChat/MessengerChart";


const Main = () => {
    return (
        <div>
            <Nabvar/>
            <Outlet/>
            <Footer/>
            <MessengerChat/>
        </div>
    );
};

export default Main;