//Module for all items in an employee NavBar.
//1. Baked Goods (stretch goal for seasonal goodies)
//2. Orders
//3. Create New Goody (stretch goal for adding seasonal goodies)
//4. Customers
//5. Profile
//6. Logout

import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const EmployeeNavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item navbar__logo">
                <Link className="navbar__link" to="/about"><img className="logo__nav" id="logo__nav" src="https://res.cloudinary.com/dm5alwbmv/image/upload/v1663814379/Caked_log_edl0zb.jpg" alt="Logo for caked by Kimberly"></img></Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/orders">Orders</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/profile">Profile</Link>
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
    )
}