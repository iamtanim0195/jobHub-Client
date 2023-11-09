import axios from "axios";
import useAuth from "./useAuth";

const instance = axios.create({
    baseURL: 'https://project-11-server-33e5tpqd5-tanims-projects-82b1e941.vercel.app/api',
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