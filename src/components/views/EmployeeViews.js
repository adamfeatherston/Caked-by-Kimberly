//module with route paths for employees
//CSS for visual looks similar to customer views
//provide button with link for employees to navigate to orders page and customers page.
//buttons with link to stretch goal items.

import { Outlet, Route, Routes, useNavigate } from "react-router-dom"
import { Profile } from "../auth/profile/Profile"
import { CustomOrderContainer } from "../customOrders/CustomOrderContainer"
import { CustomOrderDetails } from "../customOrders/CustomOrderDetails"
import { CustomOrderEdit } from "../customOrders/CustomOrderEdit"
import { CustomOrderList } from "../customOrders/CustomOrderList"
import "./EmployeeViews.css"

export const EmployeeViews = () => {
	const navigate = useNavigate()

	return (
		<Routes>
			<Route path="/" element={
				<>
					<h1>Caked by Kimberly</h1>
					<div>Logo</div>
					<button onClick={() => navigate("/orders/")}>See Current Orders</button>
					<button onClick={() => navigate("/customers/")}>See All Customers</button>

					<Outlet />
				</>
			}>

				<Route path="profile" element={<Profile />} />
				<Route path="orders" element={<CustomOrderList />} />
				<Route path="orders/:orderId" element={<CustomOrderDetails/>} />
				<Route path="orders" element={<CustomOrderContainer />} />
				<Route path="orders/edit/:orderId/" element={<CustomOrderEdit />} />
			</Route>
		</Routes>
	)
}