//Module for directing specific views for the type of user login (isStaff)
//1. isStaff = true then employee  isStaff = false then customer
//2. Based on boolean isStaff, user will have the following views for being able to see specific modules/pages/access to features, etc.
//  a. EmployeeViews.js
//  b. CustomerNav.js

import { CustomerViews } from "./CustomerViews"
import { EmployeeViews } from "./EmployeeViews"

export const ApplicationViews = () => {
	
    const localCakedUser = localStorage.getItem("caked_user")
    const cakedUserObject = JSON.parse(localCakedUser)

	if (cakedUserObject.staff) {
		//return employee views
		return <EmployeeViews />
	}
	else {
		//return customer views
		return <CustomerViews />
	}


}