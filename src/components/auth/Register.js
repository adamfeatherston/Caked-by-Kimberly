//Module for users to create new profile.
//1. Provide intial state from the "users" array of objects (view).
//2. Check API if email already exist.
//3. Method for user to save new profile information
//  a. Button (clickEvent)
//  b. POST API to create profile.
//Provide message for user that profile has been created (ie, state changed)
//4.JSX for the form
//  a. fullName:
//  b. email:
//  c. phone: (tel)
//  (isStaff is not included on the form as this element is not going to be editable.  Staff users are already in datatabase, all additional profiles will be customers, or isStaff set to false, which will be default setting.  )

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Login.css"

export const Register = (props) => {
    const [customer, setCustomer] = useState({
        fullName: "",
        email: "",
        phone: "",
        isStaff: false
    })
    let navigate = useNavigate()

    const registerNewUser = () => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customer)
        })
            .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("caked_user", JSON.stringify({
                        id: createdUser.id,
                        staff: createdUser.isStaff
                    }))

                    navigate("/")
                }
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/users?email=${customer.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewUser()
                }
            })
    }

    const updateCustomer = (evt) => {
        const copy = { ...customer }
        copy[evt.target.id] = evt.target.value
        setCustomer(copy)
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register with Caked by Kimberly</h1>
                <fieldset>
                    <label htmlFor="fullName"> Full Name </label>
                    <input onChange={updateCustomer}
                        type="text" id="fullName" className="form-control"
                        placeholder="Enter your name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> Email address </label>
                    <input onChange={updateCustomer}
                        type="email" id="email" className="form-control"
                        placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="phone">Phone Number:</label>
                    <input onChange={updateCustomer}
                        type="tel" id="phone" className="form-control"
                        placeholder="Phone Number" required />
                </fieldset>
                <fieldset>
                    <button className="buttons" type="submit"> Register </button>
                </fieldset>
            </form>
            <section className="link--login">
                <Link to="/login">Already a member</Link>
            </section>
        </main>
    )
}


















