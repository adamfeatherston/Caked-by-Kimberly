//module for jsx that lists all details of a cookie order

import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

export const CookieOrderDetails = () => {
    const { orderId } = useParams()
    const [order, updateOrder,] = useState({})
    const navigate = useNavigate()

    const orderIsBeingBaked = () => {
        if (order.beingBaked === false) {
            return <div>
                <Link to={`/cookieOrders/edit/${orderId}`}>Click to edit Cookie Order #: {orderId}</Link>
            </div>
        }
        else {
            return "Your order is currently being baked.  Contact caked by Kimberly if changes need to be made."
        }
    }

    useEffect(
        () => {


            fetch(`http://localhost:8088/cookieOrders?_expand=user&_expand=cookieFlavor&id=${orderId}`)
                .then(response => response.json())
                .then((data) => {
                    const singleOrder = data[0]
                    updateOrder(singleOrder)
                })
        },
        [orderId]
    )


    return <>
        <section className="order">
            <header className="order__header">Cookie Order # {order.id}</header>
            <header className="order__header">Ordered By: {order?.user?.fullName}</header>
            <div>Date Needed: {order.dateNeeded}</div>
            <div>Where is order needed: {order.address}</div>
            <div>NUmber of Cookies: {order?.cupCookieNumberId?.number}</div>
            <div>Description: {order.description}</div>
            <div>Message on cookie?: {order.messageOnCake}</div>
            <div>Cookie Flavor: {order?.cookieFlavor?.flavor}</div>
            <footer className="order__footer">Customer Email: {order?.user?.email}</footer>
            <footer className="order__footer">Customer Phone: {order?.user?.phone}</footer>
            {orderIsBeingBaked()}
        </section>
        <section>
            <div>

                <button className="buttons" onClick={() => navigate("/orders/")}>See All Orders</button>

            </div>
        </section>
    </>
}