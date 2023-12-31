import { NavLink } from 'react-router-dom'

const SideBar = () => {
    return (
        <div>
            <div className="flex flex-col gap-3 pt-20 px-5">
                        {/* Navbar side menu content here */}
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
        </div>
    )
}

export default SideBar
