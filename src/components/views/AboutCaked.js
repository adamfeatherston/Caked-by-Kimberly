//module for welcome page with information about "Caked by Kimberly"
//includes pictures that will be editable by user/employees and only visable to customers.
import { useNavigate } from "react-router-dom"
import "./CustomerViews.css"

export const AboutCaked = () => {
    const navigate = useNavigate()

    const localCakedUser = localStorage.getItem("caked_user")
    const cakedUserObject = JSON.parse(localCakedUser)
    return <>
        <section>
            <div>
                {!cakedUserObject.staff
                    ? <button onClick={() => navigate("/customOrders/")}>Create Your Own Cake</button>
                    : ""
                }
            </div>
        </section>

        <section>
            <div>{!cakedUserObject.staff
                ? <button onClick={() => navigate("/orders/")}>See Your Orders</button>
                : ""
            }
            </div>
        </section>
    </>
}