import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                {/* <!-- LOGO --> */}
                <div className="logo">Crypto</div>
                {/* <!-- NAVIGATION MENU --> */}
                <ul className="nav-links">
                    {/* <!-- USING CHECKBOX HACK --> */}
                    <input type="checkbox" id="checkbox_toggle" />
                    <label for="checkbox_toggle" className="hamburger">&#9776;</label>
                    {/* <!-- NAVIGATION MENUS --> */}
                    <div className="menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/news">News</Link></li>
                        <li className="services">
                            <Link to="/">Services</Link>
                            {/* <!-- DROPDOWN MENU --> */}
                            <ul className="dropdown">
                                <li><Link to="/">Service 1 </Link></li>
                                <li><Link to="/">Service 2</Link></li>
                                <li><Link to="/">Service 3</Link></li>
                                <li><Link to="/">Service 4</Link></li>
                                <li><Link to="/">Service 5</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/contact">Contact</Link></li>
                    </div>
                </ul>
            </nav>

        </>
    )
}

export default Navbar;