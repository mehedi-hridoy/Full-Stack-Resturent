import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthContext';
import Swal from 'sweetalert2';
import './NavBar.css';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Signed Out!',
                    text: 'You have been successfully logged out.',
                    confirmButtonColor: '#D1A054',
                    timer: 2000
                });
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    const navOptions = <>
     <li><Link to="/" className="font-semibold">Home</Link></li>
     <li><Link to="menu" className="font-semibold">Our Menu</Link></li>
     <li><Link to="order" className="font-semibold">Order Food</Link></li>
     <li><Link to="secret" className="font-semibold">Secret</Link></li>
      
    </>
    return (
        <div>
            <div className="navbar fixed z-10 max-w-screen-2xl bg-black/70 backdrop-blur-sm text-white shadow-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white hover:bg-[#D1A054]/20">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-black/95 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow-xl border border-[#D1A054]/30">
        {navOptions}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-xl font-bold text-white hover:text-[#D1A054] transition-colors">Bistro Boss</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-base">
     {navOptions}
    </ul>
  </div>
  <div className="navbar-end gap-2">
    {user ? (
      <button onClick={handleLogOut} className="btn btn-sm md:btn-md bg-[#D1A054] text-white border-0 hover:bg-[#B5892F] font-semibold">
        SIGN OUT
      </button>
    ) : (
      <Link to="/login" className="btn btn-sm md:btn-md bg-[#D1A054] text-white border-0 hover:bg-[#B5892F] font-semibold">
        SIGN IN
      </Link>
    )}
  </div>
</div>
        </div>
    );
};

export default NavBar;