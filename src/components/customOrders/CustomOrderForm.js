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

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export const CustomOrderForm = () => {
    const [order, update] = useState({
        dateNeeded: "",
        address: "",
        numberOfEaters: (0),
        description: "",
        messageOnCake: "",
        beingBaked: false
    })
    const [cakeDesigns, updateDesigns] = useState([])
    const [cakeFlavors, updateFlavors] = useState([])
    const [cakeIcings, updateIcings] = useState([])
    const [cakeFillings, updateFillings] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:8088/cakeDesigns`)
            .then(response => response.json())
            .then((productDesignsArray) => {
                updateDesigns(productDesignsArray)
            })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:8088/cakeFlavors`)
            .then(response => response.json())
            .then((productFlavorsArray) => {
                updateFlavors(productFlavorsArray)
            })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:8088/cakeIcings`)
            .then(response => response.json())
            .then((productIcingssArray) => {
                updateIcings(productIcingssArray)
            })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:8088/cakeFillings`)
            .then(response => response.json())
            .then((productFillingsArray) => {
                updateFillings(productFillingsArray)
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
            numberOfEaters: parseInt(order.numberOfEaters),
            description: order.description,
            messageOnCake: order.messageOnCake,
            cakeDesignId: parseInt(order.cakeDesignId),
            cakeFlavorId: parseInt(order.cakeFlavorId),
            cakeIcingId: parseInt(order.cakeIcingId),
            cakeFillingId: parseInt(order.cakeFillingId),
            beingBaked: order.beingBaked
        }

        return fetch(`http://localhost:8088/cakeOrders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/orders")
            })
    }

    return (<>
        
        <button onClick={() => navigate("/orders/")}>See Your Orders</button>
        <form className="orderForm">
            <h2 className="orderForm__title">Create Your Custom Cake</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">When is the cake needed?</label>
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
                    <label htmlFor="address">Where is the Cake needed?</label>
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
                                update(copy)
                            }
                        } />
                </div>

            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="eaters">How Many People need to be served?</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter Number"
                        value={order.numberOfEaters}
                        onChange={
                            (evt) => {
                                const copy = { ...order }
                                copy.numberOfEaters = evt.target.value
                                update(copy)
                            }
                        } />
                </div>

            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description of the Cake:</label>
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
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="message">Is there a message/phrase you would like on the cake?</label>
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
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Design">Select A Cake Design</label>
                    <select id="Design" value={order.cakeDesignId}
                        onChange={
                            (evt) => {
                                const copy = { ...order }
                                copy.cakeDesignId = evt.target.value
                                update(copy)
                            }}
                    >
                        <option value={0}>Please choose a cake design...</option>
                        {
                            cakeDesigns.map(design => {
                                return <option value={design.id}>{design.design}</option>
                            })
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Flavor">Select A Cake Flavor</label>
                    <select id="Flavor" value={order.cakeFlavorId}
                        onChange={
                            (evt) => {
                                const copy = { ...order }
                                copy.cakeFlavorId = evt.target.value
                                update(copy)
                            }}
                    >
                        <option value={0}>Please choose a cake flavor...</option>
                        {
                            cakeFlavors.map(flavor => {
                                return <option value={flavor.id}>{flavor.flavor}</option>
                            })
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Icing">Select A Cake Icing</label>
                    <select id="Icing" value={order.cakeIcingId}
                        onChange={
                            (evt) => {
                                const copy = { ...order }
                                copy.cakeIcingId = evt.target.value
                                update(copy)
                            }}
                    >
                        <option value={0}>Please choose a cake icing...</option>
                        {
                            cakeIcings.map(icing => {
                                return <option value={icing.id}>{icing.icing}</option>
                            })
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Filling">Select A Cake Filling</label>
                    <select id="Filling" value={order.cakeFillingId}
                        onChange={
                            (evt) => {
                                const copy = { ...order }
                                copy.cakeFillingId = evt.target.value
                                update(copy)
                            }}
                    >
                        <option value={0}>Please choose a cake filling...</option>
                        {
                            cakeFillings.map(filling => {
                                return <option value={filling.id}>{filling.filling}</option>
                            })
                        }
                    </select>
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit Your Order
            </button>
        </form>
        </>
    )
}