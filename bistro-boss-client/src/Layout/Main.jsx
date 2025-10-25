import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Footer from '../pages/shared/Footer/Footer';
import NavBar from '../pages/shared/Navbar/NavBar';

const Main = () => {
    const location = useLocation();
    console.log(location);

    const noHeaderFooter = location.pathname.includes('login');

    return (
        <div>
            {noHeaderFooter ||  <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;