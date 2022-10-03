//module with route paths for customers
//CSS for visual looks and adding pictures of sample products.
//provide button with link for customers to navigate to create a custom order page.

import { Outlet, Route, Routes, } from "react-router-dom"
import { Profile } from "../auth/profile/Profile"
import { CustomOrderContainer } from "../customOrders/CustomOrderContainer"
import { CustomOrderDetails } from "../customOrders/CustomCakeOrderDetails"
import { CustomOrderEdit } from "../customOrders/CustomCakeOrderEdit"
import { CustomOrderForm } from "../customOrders/CustomCakeOrderForm"
import { AboutCaked } from "./AboutCaked"
import { ChooseGoodyType } from "./ChooseGoodyType"
import { CustomCupCakeOrderForm } from "../customOrders/CustomCupCakeOrderForm"
import { CustomCupCakeEdit } from "../customOrders/CustomCupcakeEdit"
import { CustomCookieOrderForm } from "../customOrders/CustomCookieOrderForm"
import { CustomCookieEdit } from "../customOrders/CustomCookieEdit"
import { CupCakeOrderDetails } from "../customOrders/CupCakeOrderDetails"
import { CookieOrderDetails } from "../customOrders/CookieOrderDetails"
import "./CustomerViews.css"

export const CustomerViews = () => {

	return (
		<Routes>
			<Route path="/" element={
				<>
					<section className="caked_main" id="caked_main">
						<h1>Caked by Kimberly</h1>
						<img className="logo" id="logo" src="https://res.cloudinary.com/dm5alwbmv/image/upload/v1663814379/Caked%20by%20Kimberly/Caked_log_edl0zb.jpg" alt="Logo for caked by Kimberly"></img>
					</section>


					<Outlet />
				</>
			}>

				<Route path="profile" element={<Profile />} />
				<Route path="orders" element={<CustomOrderContainer />} />
				<Route path="orders/:orderId" element={<CustomOrderDetails />} />
				<Route path="cupCakeOrders/:orderId" element={<CupCakeOrderDetails />} />
				<Route path="cookieOrders/:orderId" element={<CookieOrderDetails />} />
				<Route path="customOrders" element={<CustomOrderForm />} />
				<Route path="cookieOrders" element={<CustomCookieOrderForm />} />
				<Route path="cupCakeOrders" element={<CustomCupCakeOrderForm />} />
				<Route path="orders/edit/:orderId/" element={<CustomOrderEdit />} />
				<Route path="cupCakeOrders/edit/:orderId/" element={<CustomCupCakeEdit />} />
				<Route path="cookieOrders/edit/:orderId/" element={<CustomCookieEdit />} />
				<Route path="about" element={<AboutCaked />} />
				<Route path="chooseType" element={<ChooseGoodyType />} />
			</Route>
		</Routes>
	)
}