//module with route paths for customers
//CSS for visual looks and adding pictures of sample products.
//provide button with link for customers to navigate to create a custom order page.

import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom"
import { Profile } from "../auth/profile/Profile"
import { CustomOrderContainer } from "../customOrders/CustomOrderContainer"
import { CustomOrderDetails } from "../customOrders/CustomOrderDetails"
import { CustomOrderEdit } from "../customOrders/CustomOrderEdit"
import { CustomOrderForm } from "../customOrders/CustomOrderForm"
import { AboutCaked } from "./AboutCaked"
import "./CustomerViews.css"

export const CustomerViews = () => {

	return (
		<Routes>
			<Route path="/" element={
				<>
					<h1>Caked by Kimberly</h1>

					<img className="logo" id="logo" src="https://res.cloudinary.com/dm5alwbmv/image/upload/v1663770639/logo.1_ydjx4g.jpg" alt="Logo for caked by Kimberly"></img>
					<Outlet />
				</>
			}>

				<Route path="profile" element={<Profile />} />
				<Route path="orders" element={<CustomOrderContainer />} />
				<Route path="orders/:orderId" element={<CustomOrderDetails />} />
				<Route path="customOrders" element={<CustomOrderForm />} />
				<Route path="orders/edit/:orderId/" element={<CustomOrderEdit />} />
				<Route path="about" element={<AboutCaked />} />
			</Route>
		</Routes>
	)
}