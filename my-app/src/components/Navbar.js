import React from "react";
import '../styles/Navbar.css'

function Navbar() {
    return(
        <>
            <nav className="navbar">
                <ul className="navbar-ul">
                     <li className="navbar-li">
                        <a href=''>Home</a>
                    </li>
                    <li className="navbar-li">
                        <a href='/'>Checking Account</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;