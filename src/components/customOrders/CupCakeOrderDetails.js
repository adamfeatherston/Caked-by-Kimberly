//module for jsx that lists all details of a cup cake order

import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

export const CupCakeOrderDetails = () => {
    const { orderId } = useParams()
    const [order, updateOrder,] = useState({})
    const navigate = useNavigate()

    const orderIsBeingBaked = () => {
        if (order.beingBaked === false) {
            return <div>
                <Link to={`/cupCakeOrders/edit/${orderId}`}>Click to edit Cup Cake Order #: {orderId}</Link>
            </div>
        }
        else {
            return "Your order is currently being baked.  Contact caked by Kimberly if changes need to be made."
        }
    }

    useEffect(
        () => {


            fetch(`http://localhost:8088/cupCakeOrders?_expand=user&_expand=cakeFlavor&_expand=cakeIcing&_expand=cakeFilling&_expand=cupCookieNumber&id=${orderId}`)
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
            <header className="order__header">Cup Cake Order # {order.id}</header>
            <header className="order__header">Ordered By: {order?.user?.fullName}</header>
            <div>Date Needed: {order.dateNeeded}</div>
            <div>Where is order needed: {order.address}</div>
            <div>NUmber of Cup Cakes: {order?.cupCookieNumberId?.number}</div>
            <div>Description: {order.description}</div>
            <div>Message on cake?: {order.messageOnCake}</div>
            <div>Cake Flavor: {order?.cakeFlavor?.flavor}</div>
            <div>Cake Icing: {order?.cakeIcing?.icing}</div>
            <div>Cake Filling: {order?.cakeFilling?.filling}</div>
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