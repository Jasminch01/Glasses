import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if (loading) {
        return <div className="h-screen text-center flex justify-center items-center"><span className="loading loading-spinner text-warning"></span></div>
    }
    console.log(user)

    if(!user){
       return <Navigate to= '/login'></Navigate>
    }
    return children;
};

PrivetRoute.propTypes = {
    children : PropTypes.node.isRequired
}
export default PrivetRoute;