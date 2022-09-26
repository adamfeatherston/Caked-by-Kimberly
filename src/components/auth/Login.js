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
                    <img className="logo" id="logo" src="https://res.cloudinary.com/dm5alwbmv/image/upload/v1663814379/Caked_log_edl0zb.jpg" alt="Logo for caked by Kimberly"></img>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"></label>
                        <input type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button className="buttons" type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
            <section>
                <div className="about_text">Follow on instagram at: cakedByKimberly
                </div>
                <div className="about_text">Contact "caked by Kimberly" by email: cakedbyKimberly@gmail.com
                </div>
            </section>
            <section>
                <div className="about__1">
                    <img className="image" id="image" src="https://res.cloudinary.com/dm5alwbmv/image/upload/v1663770639/Dog_Cake.1_gbdcaj.jpg" alt="Fluffy Dog"></img>
                    <img className="image" id="image" src="https://res.cloudinary.com/dm5alwbmv/image/upload/v1663770639/winnie_the_pooh.1_ibx3vb.jpg" alt="Winnie the Pooh"></img>
                    <img className="image" id="image" src="https://res.cloudinary.com/dm5alwbmv/image/upload/v1663770639/pink_flowers.1_vxkigv.jpg" alt="Pink Flowers"></img>
                <img className="image" id="image" src="https://res.cloudinary.com/dm5alwbmv/image/upload/v1663770640/peanut_butter.1_abwu2c.jpg" alt="Peanut Butter"></img>
                </div>
            </section>
        </main>
    )
}