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

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
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
                path: "all-Jobs",
                element: <AllJobs />,
            },
            {
                path: "applied-jobs",
                element: <AppliedJobs />,
            },
            {
                path: "add-a-job",
                element: <AddAjobs />,
            },
            {
                path: "my-jobs",
                element: <MyJobs />,
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
