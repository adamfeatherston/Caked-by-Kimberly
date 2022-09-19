//Module for creating a list of all customers
//1. Only employees can see this page
//2. JSX - Customer information included in the list:
//  a. fullName:
//  b. email:
//  c. phone:
//  d. a list of all orders placed by each customer. stretch goal: a link to each order placed by this customer
//3. Employees can search the list by fullName.

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Customer } from "./Customer"
import "./Customers.css"

export const CustomerList = () => {
    const [users, setUsers] = useState([])

    const navigate = useNavigate()

    useEffect(
        () => {
            fetch('http://localhost:8088/users?isStaff=false')
                .then(response => response.json())
                .then((customerArray) => {
                    setUsers(customerArray)
                })
        },
        []
    )

    return <>
        <button onClick={() => navigate("/orders/")}>See Current Orders</button>
        
        <article className="customers">
            {
                users.map(user => <Customer key={`user--${user.id}`}
                    id={user.id}
                    fullName={user.fullName}
                    phone={user.phone}
                    email={user.email} />)
            }
        </article>
    </>
}