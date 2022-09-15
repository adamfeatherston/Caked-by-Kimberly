//module for jsx that lists all details of a custom order

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const CustomOrderDetails = () => {
    const { orderId } = useParams()
    const [order, updateOrder] = useState({})

    useEffect(
        () => {
            fetch(`http://localhost:8088/cakeOrders?_expand=user&_expand=cakeFlavor&_expand=cakeIcing&_expand=cakeFilling&_expand=cakeDesign&id=${orderId}`)
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
            <header className="order__header">Order # {order.id}</header>
            <header className="order__header">Ordered By: {order?.user?.fullName}</header>
            <div>Date Needed: {order.dateNeeded}</div>
            <div>Cake needs to serve: {order.numberOfEaters}</div>
            <div>Description: {order.description}</div>
            <div>Message on cake?: {order.message}</div>
            <div>Cake Desgin: {order?.cakeDesign?.design}</div>
            <div>Cake Flavor: {order?.cakeFlavor?.flavor}</div>
            <div>Cake Icing: {order?.cakeIcing?.icing}</div>
            <div>Cake Filling: {order?.cakeFilling?.filling}</div>
            <footer className="order__footer">Customer Email: {order?.user?.email}</footer>
            <footer className="order__footer">Customer Phone: {order?.user?.phone}</footer>
        </section>
        <fieldset>
            <label htmlFor="baking">Check when baking has begun:</label>
            <input type="checkbox"
                value={order.beingBaked}
                onChange={
                    (evt) => {
                        const copy = { ...order }
                        copy.beingBaked = evt.target.checked
                        updateOrder(copy)
                    }
                } />

        </fieldset>
    </>
}