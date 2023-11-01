import React from "react";
import Logo from "../assets/images/logo.svg";
import Search from "../assets/images/search.svg";

function Nav() {
    return (
        <nav className="nav-wrapper">
            <div className="nav-content">
                <ul className="list-styled">
                    <li>
                        <img src={Logo} alt="Logo" />
                    </li>
                    <li>
                        <a className="link-styled">Store</a>
                    </li>
                    <li>
                        <a className="link-styled">About</a>
                    </li>
                    <li>
                        <a className="link-styled">Contact us</a>
                    </li>
                    <li>
                        <img src={Search} alt="Search" />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;