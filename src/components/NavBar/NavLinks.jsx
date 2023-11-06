import {NavLink} from "react-router-dom";

const NavLinks = () => {
    return (
        <div className="flex justify-between">
            <div className="flex gap-3 ">
                {/* Navbar menu content here */}
                <NavLink to="/"
                    className={
                        ({isActive}) => isActive ? "btn btn-accent btn-sm text-white" : "btn btn-neutral btn-sm text-white"
                }>Home</NavLink>
                <NavLink to="/all-Jobs"
                    className={
                        ({isActive}) => isActive ? "btn btn-accent btn-sm text-white" : "btn btn-neutral btn-sm text-white"
                }>All Jobs</NavLink>
                <NavLink to="/applied-jobs"
                    className={
                        ({isActive}) => isActive ? "btn btn-accent btn-sm text-white" : "btn btn-neutral btn-sm text-white"
                }>Applied Jobs</NavLink>
                <NavLink to="/add-a-job"
                    className={
                        ({isActive}) => isActive ? "btn btn-accent btn-sm text-white" : "btn btn-neutral btn-sm text-white"
                }>Add A Job</NavLink>
                <NavLink to="/my-jobs"
                    className={
                        ({isActive}) => isActive ? "btn btn-accent btn-sm text-white" : "btn btn-neutral btn-sm text-white"
                }>My Jobs</NavLink>
                <NavLink to="/blogs"
                    className={
                        ({isActive}) => isActive ? "btn btn-accent btn-sm text-white" : "btn btn-neutral btn-sm text-white"
                }>Blogs</NavLink>
                <NavLink to="/user-profile"
                    className={
                        ({isActive}) => isActive ? "btn btn-accent btn-sm text-white" : "btn btn-neutral btn-sm text-white"
                }>User Profile</NavLink>
            </div>
            <div className="flex gap-2">
                <NavLink to="/login"
                    className={
                        ({isActive}) => isActive ? "btn btn-accent btn-sm text-white" : "btn btn-neutral btn-sm text-white"
                }>
                    Sign in
                </NavLink>
                <NavLink to="/join"
                    className={
                        ({isActive}) => isActive ? "btn btn-accent btn-sm text-white" : "btn btn-neutral btn-sm text-white"
                }>
                    Sign Up
                </NavLink>
            </div>
        </div>
    )
}

export default NavLinks;
