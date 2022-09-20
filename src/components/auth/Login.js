//Module for user to login to the app
//1. Get state from users.
//2. Users login with email.  isStaff determines if user is a customer or employee/owner.
//3. JSX for user to input email with button that navigates user to appropriate page.
//  a. Employees to the customOrders page where they can see all orders.
//  b. Customers to the page to create a customOrder

import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Login = () => {
    const [email, set] = useState("")
    const navigate = useNavigate()

    const userTypeNav = () => {
        const localCakedUser = localStorage.getItem("caked_user")
        const cakedUserObject = JSON.parse(localCakedUser)

        if (cakedUserObject.staff) {
            //return employee views
            navigate("/orders/")
        }
        else {
            //return customer views
            navigate("/about/")
        }


    }

const handleLogin = (e) => {
    e.preventDefault()

    return fetch(`http://localhost:8088/users?email=${email}`)
        .then(res => res.json())
        .then(foundUsers => {
            if (foundUsers.length === 1) {
                const user = foundUsers[0]
                localStorage.setItem("caked_user", JSON.stringify({
                    id: user.id,
                    staff: user.isStaff
                }))

                userTypeNav()
            }
            else {
                window.alert("Invalid login")
            }
        })
}

return (
    <main className="container--login">
        <section>
            <form className="form--login" onSubmit={handleLogin}>
                <h1>Caked by Kimberly</h1>
                <h2>Please sign in</h2>
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input type="email"
                        value={email}
                        onChange={evt => set(evt.target.value)}
                        className="form-control"
                        placeholder="Email address"
                        required autoFocus />
                </fieldset>
                <fieldset>
                    <button type="submit">
                        Sign in
                    </button>
                </fieldset>
            </form>
        </section>
        <section className="link--register">
            <Link to="/register">Not a member yet?</Link>
        </section>
    </main>
)
}