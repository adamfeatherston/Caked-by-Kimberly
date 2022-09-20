//Module for all items in a customer NavBar.
//1. Baked Goods (stretch goal for seasonal goodies)
//2. Orders
//3. Create New Order
//4. Profile
//5. Logout

import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const CustomerNavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/orders">Your Orders</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/customOrders">Create New Order</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/about">About Caked by Kimberly</Link>
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