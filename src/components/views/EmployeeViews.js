//module with route paths for employees
//CSS for visual looks similar to customer views
//provide button with link for employees to navigate to orders page and customers page.
//buttons with link to stretch goal items.

import { Outlet, Route, Routes, useNavigate } from "react-router-dom"
import { Profile } from "../auth/profile/Profile"
import { CustomerContainer } from "../customers/CustomerContainer"
import { CustomOrderContainer } from "../customOrders/CustomOrderContainer"
import { CustomOrderDetails } from "../customOrders/CustomCakeOrderDetails"
import { CustomOrderEdit } from "../customOrders/CustomCakeOrderEdit"
import { AboutCaked } from "./AboutCaked"
import "./CustomerViews.css"

export const EmployeeViews = () => {

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
				<Route path="orders/:orderId" element={<CustomOrderDetails />} />
				<Route path="orders" element={<CustomOrderContainer />} />
				<Route path="customers" element={<CustomerContainer />} />
				<Route path="orders/edit/:orderId/" element={<CustomOrderEdit />} />
				<Route path="about" element={<AboutCaked />} />
			</Route>
		</Routes>
	)
}