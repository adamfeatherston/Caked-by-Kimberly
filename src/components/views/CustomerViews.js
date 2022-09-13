//module with route paths for customers

import { Outlet, Route, Routes } from "react-router-dom"
import { Profile } from "../auth/profile/Profile"

export const CustomerViews = () => {
	return (
		<Routes>
			<Route path="/" element={
				<>
					<h1>Caked by Kimberly</h1>
					<div>Custom Order Cakes</div>

					<Outlet />
				</>
			}>

				<Route path="profile" element={<Profile />} />
				
			</Route>
		</Routes>
	)
}