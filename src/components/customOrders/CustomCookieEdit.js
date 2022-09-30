//Module for users(customers) to view and edit their Custom Cookie Orders.
//1. Provide intial state from the "customOrders" array of objects (view).
//2. Get each individual customOrder from API and edit state (edit).
//3. Method for user to save new CustomOrder information
//  a. Button (clickEvent)
//  b. PUT API to update CustomOrder.
//Provide message for user that CustomOrder has been updated (ie, state changed)
//4.JSX for the form
//  a. Follows same order from CustomOrderForm.js

import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "./Form.css"

export const CustomCookieEdit = () => {
    const [order, edit] = useState({
        dateNeeded: "",
        address: "",
        description: "",
        messageOnCake: "",
        beingBaked: false
    })
    const [cupCookieNumbers, updateNumbers] = useState([])
    const [cookieFlavors, updateFlavors] = useState([])
    const { orderId } = useParams()
    const navigate = useNavigate()


    const localCakedUser = localStorage.getItem("caked_user")
    const cakedUserObject = JSON.parse(localCakedUser)

    useEffect(() => {
        fetch(`http://localhost:8088/cupCookieNumbers`)
            .then(response => response.json())
            .then((cupCookieNumbersArray) => {
                updateNumbers(cupCookieNumbersArray)
            })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:8088/cookieFlavors`)
            .then(response => response.json())
            .then((productFlavorsArray) => {
                updateFlavors(productFlavorsArray)
            })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:8088/cupCakeOrders/${orderId}`)
            .then(response => response.json())
            .then((data) => {
                edit(data)
            })
    }, [orderId])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/cookieOrders/${order.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(response => response.json())
            .then(() => {
                setFeedback("Your order was successully edited")
            })

    }

    const [feedback, setFeedback] = useState("")

    useEffect(() => {
        if (feedback !== "") {
            // Clear feedback to make entire element disappear after 3 seconds
            setTimeout(() => setFeedback(""), 3000);
        }
    }, [feedback])


    return (<>

        <div className={`${feedback.includes("Error") ? "error" : "feedback"} ${feedback === "" ? "invisible" : "visible"}`}>
            {feedback}
        </div>

        <form className="orderForm" id="edit form">
            <h2 className="orderForm__title">Create Your Custom Cookies</h2>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">When are the Cookies needed?</label>
                    <input
                        required autoFocus
                        type="date"
                        className="form-control"
                        placeholder="Enter Date Cake Needed"
                        value={order.dateNeeded}
                        onChange={
                            (evt) => {
                                const copy = { ...order }
                                copy.dateNeeded = evt.target.value
                                edit(copy)
                            }
                        } />

                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Where are the Cookies needed?</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter Address"
                        value={order.address}
                        onChange={
                            (evt) => {
                                const copy = { ...order }
                                copy.address = evt.target.value
                                edit(copy)
                            }
                        } />
                </div>

            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="eaters">Select the number of Cup Cakes Needed</label>
                    <select id="eaters" value={order.cupCookieNumberId}
                        onChange={
                            (evt) => {
                                const copy = { ...order }
                                copy.cupCookieNumberId = evt.target.value
                                edit(copy)
                            }}
                    >
                        <option value={0}>Please choose a how many...</option>
                        {
                            cupCookieNumbers.map(number => {
                                return <option value={number.id}>{number.number}</option>
                            })
                        }
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description of the Cup Cakes:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Describe the theme, color scheme, and any other requests."
                        value={order.description}
                        onChange={
                            (evt) => {
                                const copy = { ...order }
                                copy.description = evt.target.value
                                edit(copy)
                            }
                        } />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="message">Is there a message/phrase you would like on each Cookie?</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief Message.  If not, put N/A here."
                        value={order.messageOnCake}
                        onChange={
                            (evt) => {
                                const copy = { ...order }
                                copy.messageOnCake = evt.target.value
                                edit(copy)
                            }
                        } />
                </div>
            </fieldset>
          
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Flavor">Select A Cup Cake Flavor</label>
                    <select id="Flavor" value={order.cookieFlavorId}
                        onChange={
                            (evt) => {
                                const copy = { ...order }
                                copy.cookieFlavorId = evt.target.value
                                edit(copy)
                            }}
                    >
                        <option value={0}>Please choose a flavor...</option>
                        {
                            cookieFlavors.map(flavor => {
                                return <option value={flavor.id}>{flavor.flavor}</option>
                            })
                        }
                    </select>
                </div>
            </fieldset>

            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="button__action">
                Save Your Changes
            </button>

            {cakedUserObject.staff

                ? <fieldset>
                    <label htmlFor="baking">Check when baking has begun:</label>
                    <input type="checkbox"
                        checked={order.beingBaked}
                        onChange={(evt) => {
                            const copy = { ...order }
                            copy.beingBaked = evt.target.checked
                            edit(copy)
                        }
                        } />

                </fieldset>
                : ""
            }

        </form>

        <div className="toOrders">
            <button className="buttons" onClick={() => navigate("/orders/")}>See All Orders</button>
        </div>
    </>)
}