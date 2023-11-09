import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../page/Login";
import SignUp from "../page/SignUp";
import AllJobs from "../page/AllJobs";
import AppliedJobs from "../page/AppliedJobs";
import AddAjobs from "../page/AddAjobs";
import MyJobs from "../page/MyJobs";
import Blogs from "../page/Blogs";
import UserProfile from "../page/UserProfile";
import Home from "../page/Home";
import PrivateRoute from "./PrivateRoute";
import JobDetails from "../components/Home/JobDetails";
import AllJobDet from "../components/AllJobDet";
import ErrorPage from "../components/Err";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path:"/details/:id",
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: () => fetch('/jobs.json'),
            },
            {
                path:"/All-job-details/:id",
                element: <PrivateRoute><AllJobDet /></PrivateRoute>,
            },
            {
                path: "all-Jobs",
                element: <AllJobs />,
            },
            {
                path: "applied-jobs",
                element:<PrivateRoute><AppliedJobs /></PrivateRoute> ,
            },
            {
                path: "add-a-job",
                element: <PrivateRoute><AddAjobs /></PrivateRoute>,
            },
            {
                path: "my-jobs",
                element:<PrivateRoute><MyJobs /></PrivateRoute> ,
            },
            {
                path: "blogs",
                element: <Blogs />,
            },
            {
                path: "user-profile",
                element: <UserProfile />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "join",
                element: <SignUp />,
            },
        ],
    },
    
]);

export default routes;
