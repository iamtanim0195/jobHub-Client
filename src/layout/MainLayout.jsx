import PropTypes from 'prop-types'
import NavLinks from '../components/NavBar/NavLinks';
import SideBar from '../components/NavBar/SideBar';
import WebLogo from '../components/NavBar/WebLogo';
import {NavLink} from 'react-router-dom';

const MainLayout = ({children}) => {
    return (
        <div>
            <div className="drawer ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className=" w-full navbar bg-slate-900 sticky top-0 z-50">
                        <div className=' w-full  max-w-[1200px] mx-auto '>
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </label>
                            </div>
                            <NavLink to="/">
                                <WebLogo/>
                            </NavLink>
                            <div className="flex-1 text-red-600 text-3xl">
                                <NavLink to="/">
                                    Job
                                    <span className='text-yellow-400'>Hub</span>
                                </NavLink>
                            </div>
                            <div className="flex-none hidden lg:block">
                                <NavLinks/>
                            </div>
                        </div>
                    </div>
                    {/* Page content here */}
                    {children} </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <SideBar/>
                </div>
            </div>
        </div>
    );
};

// ! props type

MainLayout.propTypes = {
    children: PropTypes.node
};

export default MainLayout;
