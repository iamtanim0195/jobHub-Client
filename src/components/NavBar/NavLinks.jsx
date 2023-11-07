import {NavLink} from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const NavLinks = () => {
    const {user} = useAuth();
    return (<div className="flex justify-between"> {/* Navbar menu content here */}

        {
        user ?. email ? (<div className="flex gap-3 ">
            <NavLink to="/"
                className={
                    ({isActive}) => isActive ? "btn btn-accent btn-sm text-white" : "btn btn-neutral btn-sm text-white"
            }>
                Home
            </NavLink>
            <NavLink to="/all-Jobs"
                className={
                    ({isActive}) => isActive ? "btn btn-accent btn-sm text-white" : "btn btn-neutral btn-sm text-white"
            }>
                All Jobs
            </NavLink>


            <NavLink to="/blogs"
                className={
                    ({isActive}) => isActive ? "btn btn-accent btn-sm text-white" : "btn btn-neutral btn-sm text-white"
            }>
                Blogs
            </NavLink>
            <NavLink to="/user-profile"
                className={
                    ({isActive}) => isActive ? "btn btn-accent btn-sm text-white" : "btn btn-neutral btn-sm text-white"
            }>
                User Profile
            </NavLink>
            <NavLink to="/my-jobs"
                className={
                    ({isActive}) => isActive ? "btn btn-accent btn-sm text-white" : "btn btn-neutral btn-sm text-white"
            }>
                My Jobs
            </NavLink>
            <NavLink to="/add-a-job"
                className={
                    ({isActive}) => isActive ? "btn btn-accent btn-sm text-white" : "btn btn-neutral btn-sm text-white"
            }>
                Add A Job
            </NavLink>
            <NavLink to="/applied-jobs"
                className={
                    ({isActive}) => isActive ? "btn btn-accent btn-sm text-white" : "btn btn-neutral btn-sm text-white"
            }>
                Applied Jobs
            </NavLink>

        </div>) : (<div className="flex gap-3 mx-auto">
            <NavLink to="/"
                className={
                    ({isActive}) => isActive ? "btn btn-accent btn-sm text-white" : "btn btn-neutral btn-sm text-white"
            }>
                Home
            </NavLink>
            <NavLink to="/all-Jobs"
                className={
                    ({isActive}) => isActive ? "btn btn-accent btn-sm text-white" : "btn btn-neutral btn-sm text-white"
            }>
                All Jobs
            </NavLink>


            <NavLink to="/blogs"
                className={
                    ({isActive}) => isActive ? "btn btn-accent btn-sm text-white" : "btn btn-neutral btn-sm text-white"
            }>
                Blogs
            </NavLink>
        </div>)
    }

        {" "} </div>);
};

export default NavLinks;
