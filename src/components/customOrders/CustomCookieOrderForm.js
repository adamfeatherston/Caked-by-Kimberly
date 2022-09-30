//Module for users(customers) to create a new Custom Cup Cakes.
//1. Provide intial state from the "customOrders" array of objects (view).
//2. Provide state from users to match which customer is placing the order.  userId in the cakeOrders array of objects.
//3. Method for user to save new CustomOrder information
//  a. Button (clickEvent)
//  b. POST API to update CustomOrder.
//Provide message for user that CustomOrder has been updated (ie, state changed)
//4.JSX for the form
//   "date Needed": "(date field for user input)", 
// "address": "(user input text: address)",
// "numberNeededId": (12, 18, 24, 30, 36),
// "description": "(user input text: Theme, color scheme, other notes are placed here)",
// "messageOnCake": "(user input text: brief words that can go on top)",
// "cookieFlavorId": (drop down menu of cakeFlavors for user to select),
// "beingBaked": false (boolean feature with default to false for user (employee) to change state of if the order is currently being baked in the CustomOrderEdit component)

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Form.css"

export const CustomCookieOrderForm = () => {
    const [order, update] = useState({
        dateNeeded: "",
        address: "",
        description: "",
        messageOnCake: "",
        beingBaked: false
    })

    const [cupCookieNumbers, updateNumbers] = useState([])
    const [cookieFlavors, updateFlavors] = useState([])
      const navigate = useNavigate()

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

  

    const localCakedUser = localStorage.getItem("caked_user")
    const cakedUserObject = JSON.parse(localCakedUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const orderToAPI = {
            userId: cakedUserObject.id,
            dateNeeded: order.dateNeeded,
            address: order.address,
            cupCookieNumberId: parseInt(order.cupCookieNumberId),
            description: order.description,
            messageOnCake: order.messageOnCake,
            cookieFlavorId: parseInt(order.cookieFlavorId),
            beingBaked: order.beingBaked
        }

        return fetch(`http://localhost:8088/cookieOrders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderToAPI)
        })
            .then(response => response.json())
            .then(() => {
                setFeedback(`Your order was successully created. \n You will be contacted about pricing. `)
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

        <form className="orderForm">
            <h2 className="orderForm__title">Create Your Custom Cookies</h2>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">When are the Cookies?</label>
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
                                update(copy)
                            }
                        } />

                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Where are the Cookies needed?</label>
                    <input

                        type="text"
                        className="form-control"
                        placeholder="Enter Address"
                        value={order.address}
                        onChange={
                            (evt) => {
                                const copy = { ...order }
                                copy.address = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="eaters">Select the number of Cookies Needed</label>
                    <select id="eaters" value={order.cupCookieNumberId}
                        onChange={
                            (evt) => {
                                const copy = { ...order }
                                copy.cupCookieNumberId = evt.target.value
                                update(copy)
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
                    <label htmlFor="description">Description of the Cookie</label>
                    <input

                        type="text"
                        className="form-control"
                        placeholder="Describe the theme, color scheme, and any other requests."
                        value={order.description}
                        onChange={
                            (evt) => {
                                const copy = { ...order }
                                copy.description = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="message">Is there a message/phrase you would like on each Cookie?</label>
                    <input

                        type="text"
                        className="form-control"
                        placeholder="Brief Message.  If not, put N/A here."
                        value={order.messageOnCake}
                        onChange={
                            (evt) => {
                                const copy = { ...order }
                                copy.messageOnCake = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="Flavor">Select A Cookie Flavor</label>
                    <select id="Flavor" value={order.cookieFlavorId}
                        onChange={
                            (evt) => {
                                const copy = { ...order }
                                copy.cookieFlavorId = evt.target.value
                                update(copy)
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
           
            <button className="button__action"
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            >
                Submit Your Order
            </button>
        </form>

        <div className="toOrders">
            <button className="buttons" onClick={() => navigate("/orders/")}>See Your Orders</button>
        </div>
    </>
    )
}