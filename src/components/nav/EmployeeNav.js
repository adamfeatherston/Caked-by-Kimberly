//Module for all items in an employee NavBar.
//1. Baked Goods (stretch goal for seasonal goodies)
//2. Orders
//3. Create New Goody (stretch goal for adding seasonal goodies)
//4. Customers
//5. Profile
//6. Logout

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const EmployeeNavBar = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <Link className="navbar__item navbar__logo" to="/about" onClick={() => setOpen(false)}><img className="logo__nav" id="logo__nav" src="https://res.cloudinary.com/dm5alwbmv/image/upload/v1663814379/Caked%20by%20Kimberly/Caked_log_edl0zb.jpg" alt="Logo for caked by Kimberly"></img></Link>
            <ul className={open ? `nav-links active` : `nav-links`}>

                <li className="navbar__item active">
                    <Link className="navbar__link" to="/orders" onClick={() => setOpen(false)}>Orders</Link>
                </li>

                <li className="navbar__item active">
                    <Link className="navbar__link" to="/customers" onClick={() => setOpen(false)}>Customers</Link>
                </li>

                <li className="navbar__item active">
                    <Link className="navbar__link" to="/profile" onClick={() => setOpen(false)}>Profile</Link>
                </li>

                {
                    localStorage.getItem("caked_user")
                        ? <li className="navbar__item navbar__logout">
                            <Link className="navbar__link" to="" onClick={() => {
                                localStorage.removeItem("caked_user")
                                navigate("/", { replace: true })
                            }}>Logout</Link>
                        </li>
                        : ""
                }
            </ul>
        </nav>
    )
}
