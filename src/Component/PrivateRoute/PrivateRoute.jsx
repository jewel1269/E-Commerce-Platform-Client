import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import loadingImg from "/Animation - 1719949818611.gif"
import { AuthContext } from "../../AuthProvider/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    
    if(loading) return <img src={loadingImg} alt="" />
    if(user) return children

    return <Navigate to={"/logIn"} state={location.pathname} replace={true}></Navigate>
};

export default PrivateRoute;