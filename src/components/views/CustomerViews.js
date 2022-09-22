//module with route paths for customers
//CSS for visual looks and adding pictures of sample products.
//provide button with link for customers to navigate to create a custom order page.

import { Outlet, Route, Routes, } from "react-router-dom"
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
					<section className="caked_main" id="caked_main">
						<h1>Caked by Kimberly</h1>
						<img className="logo" id="logo" src="https://res.cloudinary.com/dm5alwbmv/image/upload/v1663814379/Caked_log_edl0zb.jpg" alt="Logo for caked by Kimberly"></img>
					</section>


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