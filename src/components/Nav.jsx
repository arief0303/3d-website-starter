import React from "react";
import Logo from "../assets/images/logo.svg";
import Search from "../assets/images/search.svg";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="nav-wrapper">
            <div className="nav-content">
                <ul className="list-styled">
                    <li>
                        <Link to="/">
                            <img src={Logo} alt="Logo" />
                        </Link>
                    </li>
                    <li>
                        {/* <a className="link-styled">Store</a> */}
                        <Link to="/payment" className="link-styled">Payment</Link>
                    </li>
                    <li>
                        {/* <a className="link-styled">About</a> */}
                        <Link to="/shipment" className="link-styled">Shipment</Link>
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