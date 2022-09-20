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
            <div>Caked by Kimberly is an independent, local place to order custom made cakes, cupcakes, cookies, and goodies.  Each order is made from scratch and specially caked with love.  Kimberly is a wife, mother of 2, and NICU nurse.
            </div>
            <div>photo</div>
            <div>Contact "caked by Kimberly" by text message: 254-431-6116 or email: cakedbyKimberly@gmail.com
            </div>
        </section>
        <section>
            <div>photo</div>
            <div>Order your very own custom cake here:
                {!cakedUserObject.staff
                    ? <button onClick={() => navigate("/customOrders/")}>Create Your Own Cake</button>
                    : "   Customers see a button directing them to the page to create their own custom cake."
                }
            </div>
            <div>Pricing will be calculated based on the design, size, and ingredients in each order.</div>
        </section>
        <section>
multiple photos
        </section>
        <section>
            <div>See your own orders here:
                {!cakedUserObject.staff
                ?  <button onClick={() => navigate("/orders/")}>See Your Orders</button>
                : "   Customers see a button directing them to a the page with a list of their own orders."
            }
            </div>
        </section>
        <section>
multiple photos
        </section>
    </>
}