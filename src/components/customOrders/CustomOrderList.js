//module for generating a list of all custom orders
//1. Fetch API of customOrders
//2. Employees see a list of all orders that have been placed.
//  a. initial state is all orders that are not currently being baked.
//  b. Employees click link on the order number and are taken to more details of that order.
//      i. initially show description date needed address and user (customer who placed order)
//  c. Displays state of the order.  whether being baked or not started.
//  d. can filter by date needed
//  e. can filer by being baked or not
//  f. can filter by showing completed and not completed -stretch goal
//3. Customers see a list of all orders that they have placed.
//  a. Customers click link on the order number and are taken to more details of that order.
//      i. initially show description date needed address and user (customer who placed order)
//      ii. has button taking user to form where they can edit the order (if state is not being baked.)
//  b. Displays state of the order.  whether being baked or not started.
//  c. customers can filter their orders to ones that are not being baked and orders that are being baked.
//4. search feature is for the description text box of the custom order. { searchTermState } needs to be inside () of the function.

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CustomOrder } from "./CustomCakeOrder"
import "./Orders.css"

export const CustomOrderList = ({ searchTermState }) => {
    const [orders, setOrders] = useState([])
    const [filteredOrders, setFiltered] = useState([])
    const [baked, setBaked] = useState(false)


    const localCakedUser = localStorage.getItem("caked_user")
    const cakedUserObject = JSON.parse(localCakedUser)

    const navigate = useNavigate()

    const getAllOrders = () => {
        fetch(`http://localhost:8088/cakeOrders?_sort=dateNeeded&_expand=user`)
            .then(response => response.json())
            .then((orderArray) => {
                setOrders(orderArray)
            })
    }
    useEffect(
        () => {

            fetch(`http://localhost:8088/cakeOrders?_sort=dateNeeded&_expand=user`)
                .then(response => response.json())
                .then((orderArray) => {
                    setOrders(orderArray)
                })
        },
        []
    )


    useEffect(
        () => {

            const searchedOrders = orders.filter(order => {
                return order.description.toLowerCase().includes(searchTermState.toLowerCase())
            })
            setFiltered(searchedOrders)
            // console.log(searchTermState);
        },
        [searchTermState]
    )

    useEffect(
        () => {
            if (cakedUserObject.staff) {
                //employees view of state
                setFiltered(orders)
            }
            else {
                //customers view of state: compare id of customer or staff to the userID
                const myOrders = orders.filter(order => order.userId === cakedUserObject.id)
                setFiltered(myOrders)
            }
        },
        [orders]
    )

    useEffect(

        () => {
            if (baked) {
                const bakedOrders = orders.filter(order => order.beingBaked === false)
                setFiltered(bakedOrders)
            }
            else {
                setFiltered(orders)
            }
        },
        [baked]
    )


    return <>
        {cakedUserObject.staff
            ? <button className="buttons" onClick={() => {
                setBaked(!baked)
            }} >
                {
                    baked
                        ? "Show All Orders"
                        : "Orders Not Baked"
                } </button>
            :""
        }

        <article className="orders">
            {
                filteredOrders.map(order => <CustomOrder key={`order--${order.id}`}
                    id={order.id}
                    fullName={order?.user.fullName}
                    date={order.dateNeeded}
                    eaters={order.numberOfEaters}
                    description={order.description}
                    beingBaked={order.beingBaked}
                    getAllOrders={getAllOrders}
                />
                )
            }
        </article>
        {!cakedUserObject.staff
            ? <button className="buttons" onClick={() => navigate("/chooseType/")}>Create Your Own</button>
            : ""
        }
    </>

}




