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
                    window.alert("Invalid login. Please check email address and try again.")
                }
            })
    }

    return (
        <main className="container--login" >
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Caked by Kimberly</h1>
                    <img className="logo" id="logo" src="https://res.cloudinary.com/dm5alwbmv/image/upload/v1663814379/Caked%20by%20Kimberly/Caked_log_edl0zb.jpg" alt="Logo for caked by Kimberly"></img>
                    <div>Please sign in</div>
                    <div className="background" style={{
                        backgroundImage: `url("https://res.cloudinary.com/dm5alwbmv/image/upload/v1664302928/Caked%20by%20Kimberly/Hazel1Cake.2_ff7p9f.jpg")`
                    }}>
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
                    </div>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
            <section className="login_text">
                
                <div>
                <a href="https://www.instagram.com/cakedbykimberly/" target="_blank" rel="noopener"><img className="logo__login" id="logo__login" src="https://res.cloudinary.com/dm5alwbmv/image/upload/v1664808181/Caked%20by%20Kimberly/instagram_huiolz.png" alt="Logo for caked by Kimberly"></img></a>
                </div>
            </section>
        </main>
    )
}