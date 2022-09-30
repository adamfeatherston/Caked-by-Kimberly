//Module for users to view and edit their own profile.
//1. Provide intial state from the "users" array of objects (view).
//2. Get each individual user profile from API and update state (edit).
//3. Method for user to save new profile information
//  a. Button (clickEvent)
//  b. PUT API to update profile.
//Provide message for user that profile has been updated (ie, state changed)
//4.JSX for the form
//  a. fullName:
//  b. email:
//  c. phone:
//  (isStaff is not included on the form as this element is not going to be editable.  Staff users are already in datatabase, all additional profiles will be customers, or isStaff set to false, which will be default setting.  )

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Profile.css"

export const Profile = () => {

    const [profile, updateProfile] = useState({
        fullName: "",
        email: 0,
        phone: 0
    })
    const navigate = useNavigate()

    const localCakedUser = localStorage.getItem("caked_user")
    const cakedUserObject = JSON.parse(localCakedUser)

    // TODO: Get employee profile info from API and update state
    useEffect(() => {
        fetch(`http://localhost:8088/users?id=${cakedUserObject.id}`)
            .then(response => response.json())
            .then((data) => {
                const employeeObject = data[0]
                updateProfile(employeeObject)
            })
    }, [])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/users/${profile.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(profile)
        })
            .then(response => response.json())
            .then(() => {
                setFeedback("Profile successfully saved")
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
        <form className="profile">
            <h2 className="profile__title">Your Profile</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={profile.fullName
                        }
                        onChange={
                            (evt) => {
                                const copy = { ...profile }
                                copy.fullName
                                    = evt.target.value
                                updateProfile(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="email">email:</label>
                    <input type="text"
                        className="form-control"
                        value={profile.email}
                        onChange={
                            (evt) => {
                                const copy = { ...profile }
                                copy.email = evt.target.value
                                updateProfile(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel"
                        className="form-control"
                        value={profile.phone}
                        onChange={
                            (evt) => {
                                const copy = { ...profile }
                                copy.phone = evt.target.value
                                updateProfile(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button className="button__action"
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            >
                Save Profile
            </button>
        </form>

        <div className="tocreate">
            {!cakedUserObject.staff
                ? <button className="buttons" onClick={() => navigate("/chooseType/")}>Create Your Own</button>
                : ""
            }
        </div>
    </>
    )
}