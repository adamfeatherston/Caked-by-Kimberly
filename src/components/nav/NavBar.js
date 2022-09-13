//Module for creating a NavBar specific to the type of user login (isStaff)
//1. isStaff = true then employee  isStaff = false then customer
//2. Based on boolean isStaff, user will have the following NavBar.
//  a. EmployeeNav.js
//  b. CustomerNav.js

import { CustomerNavBar } from "./CustomerNav"
import { EmployeeNavBar } from "./EmployeeNav"
import "./NavBar.css"

export const NavBar = () => {
    const localCakedUser = localStorage.getItem("caked_user")
    const cakedUserObject = JSON.parse(localCakedUser)

	if (cakedUserObject.staff) {
		//return employee views
		return <EmployeeNavBar />
	}
	else {
		//return customer views
		return <CustomerNavBar />
	}
}