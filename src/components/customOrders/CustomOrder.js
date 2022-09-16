//Module for displaying data about a single customOrder:
//1. JSX for customers and employees to see all data in the order
//  a. fetch APT from customOrders
//2. checkbox for employees only that provides user(employee) ability to mark order as being baked.
//  a. PUT API state changes to customOrders
//3. Button for customers only that provides user(customer) ability to delete the order and button for customer to edit the order.
//  a. Buttons will appear if order is in state of not being baked.
//  b. If order is being baked, text will appear that order is being baked and to contact "Caked by Kimberly" by phone or email with issues.
//  c. Order can not be edited if state of the order is being baked.
//  d. POST API state changes to customOrders

import { Link } from "react-router-dom"

export const CustomOrder = ({ id, fullName, date, eaters, description, }) => {

    return <section className="order">
        <header>
            <Link to={`/orders/${id}`}>See details for Order #: {id}</Link>
        </header>
        <div>order placed by: {fullName}</div>
        <div>order needed on: {date}</div>
        <div>cake needs to serve: {eaters}</div>
        <div>description: {description} </div>
    </section>
}





