import axios from "axios";
import useAuth from "./useAuth";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/',
    withCredentials: true,
});
const useAxios = () => {

    const { logout } = useAuth();
    // Add a response interceptor
    instance.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if (error.response.status === 401 ||error.response.status === 403) {
            logout();
        }
    });
    return instance;
};
export default useAxios;