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
import { CustomOrder } from "./CustomOrder"
import "./Orders.css"

export const CustomOrderList = () => {
    const [orders, setOrders] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/cakeOrders?_expand=user`)
            .then(response => response.json())
            .then((orderArray) => {
                setOrders(orderArray)
            })
    },
    []
  )

  return <article className="orders">
  {
      orders.map(order => <CustomOrder key={`order--${order.id}`}
          id={order.id} 
          fullName={order?.user.fullName} 
          date={order.dateNeeded}
          eaters={order.numberOfEaters}
          description={order.description}/>)
  }
</article>

}


