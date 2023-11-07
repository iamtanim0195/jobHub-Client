import {Navigate} from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {isLoading, user} = useAuth();
    if(isLoading){
        return <progress className="progress w-full"></progress>
    }
    if (!isLoading && !user ?. email) {
        return <Navigate to="/login" />
    }
    return children;
};

export default PrivateRoute;
