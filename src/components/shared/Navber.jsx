import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { AuthContext } from "../../authContext/ContextApi";


const Navber = () => {
    const { user, signOutUser } = useContext(AuthContext)
    
    const handleSignOutUser = () => {
        console.log('sign out click')
        signOutUser()
            .then()
            .catch()
    }
    const menu = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-green-600 underline' : ''}>Home</NavLink></li>

        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'text-green-600 underline' : ''}>About</NavLink></li>

        <li><NavLink to="/career" className={({ isActive }) => isActive ? 'text-green-600 underline' : ''}>Career</NavLink></li>
        <li><NavLink to="/register" className={({ isActive }) => isActive ? 'text-green-600 underline' : ''}>Register</NavLink></li>
        <li><NavLink to="/user" className={({ isActive }) => isActive ? 'text-green-600 underline' : ''}>User</NavLink></li>

    </>

    return (
        <div>
            <div className="navbar bg-base-100">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>

                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className=" flex gap-4 px-1">
                        {menu}
                    </ul>
                </div>

                <div className="navbar-end flex gap-2">
                    <div className="w-10 rounded-full flex flex-row-reverse gap-1">
                        <div><CgProfile className="text-3xl"></CgProfile></div>
                        <p>{user && user.email}</p>
                    </div>
                    {
                        user ? <Link onClick={handleSignOutUser} className="btn">LogOut</Link> : <Link to="/login" className="btn">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navber;