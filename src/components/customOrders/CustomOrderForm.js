//Module for users(customers) to create a new CustomOrders.
//1. Provide intial state from the "customOrders" array of objects (view).
//2. Provide state from users to match which customer is placing the order.  userId in the cakeOrders array of objects.
//3. Method for user to save new CustomOrder information
//  a. Button (clickEvent)
//  b. POST API to update CustomOrder.
//Provide message for user that CustomOrder has been updated (ie, state changed)
//4.JSX for the form
//   "date Needed": "(date field for user input)", 
// "address": "(user input text: address)",
// "numberOfEaters": (user input number of people cake will serve),
// "description": "(user input text: Theme, color scheme, other notes are placed here)",
// "messageOnCake": "(user input text: brief words that can go on top)",
// "cakeFlavorId": (drop down menu of cakeFlavors for user to select),
// "cakeIcingId": (drop down menu of cakeIcings for user to select),
// "cakeFillingId": (drop down menu of cakeFillings for user to select),
// "cakeDesignId": (drop down menu of cakeDesigns for user to select),
// "beingBaked": false (boolean feature with default to false for user (employee) to change state of if the order is currently being baked in the CustomOrderEdit component)

import { useState } from "react"


export const CustomOrderForm = () => {
    const [order, update] =useState({
        
    })
}