//module with route paths for customers
//CSS for visual looks and adding pictures of sample products.
//provide button with link for customers to navigate to create a custom order page.

import { Outlet, Route, Routes, useNavigate } from "react-router-dom"
import { Profile } from "../auth/profile/Profile"
import { CustomOrderContainer } from "../customOrders/CustomOrderContainer"
import { CustomOrderDetails } from "../customOrders/CustomOrderDetails"
import { CustomOrderEdit } from "../customOrders/CustomOrderEdit"
import { CustomOrderForm } from "../customOrders/CustomOrderForm"
import "./CustomerViews.css"

export const CustomerViews = () => {
	const navigate = useNavigate()

	return (
		<Routes>
			<Route path="/" element={
				<>
					<h1>Caked by Kimberly</h1>
					<div>Logo</div>
					<div>Link to About Caked by Kimblery</div>
					<Outlet />
				</>
			}>

				<Route path="profile" element={<Profile />} />
				<Route path="orders" element={<CustomOrderContainer />} />
				<Route path="orders/:orderId" element={<CustomOrderDetails />} />
				<Route path="customOrders" element={<CustomOrderForm />} />
				<Route path="orders/edit/:orderId/" element={<CustomOrderEdit />} />
			</Route>
		</Routes>
	)
}