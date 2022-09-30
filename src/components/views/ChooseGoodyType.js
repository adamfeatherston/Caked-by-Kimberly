//module for a customer navigating to 3 different order pages
// 1. Custom Cake Orders  2. Custom Cupcake Orders   3. Custom Cookie Orders
import { useNavigate } from "react-router-dom"
import "./CustomerViews.css"

export const ChooseGoodyType = () => {
    const navigate = useNavigate()

    return <>
        <article className="create_links">

            <section className="create_cake">
                <div className="cake_photo">
                    <img className="image" id="image" src="https://res.cloudinary.com/dm5alwbmv/image/upload/v1663770639/Caked%20by%20Kimberly/chocolate_flowers.1_nofbgi.jpg" alt="Chocolate Flowers"></img>
                </div>
                <div className="cake_btn">
                    <button className="buttons" onClick={() => navigate("/customOrders/")}>Create A Cake</button>
                </div>
            </section>

            <section className="create_cupCake">
                <div className="cup_photo">
                    <img className="image" id="image" src="https://res.cloudinary.com/dm5alwbmv/image/upload/v1663770639/Caked%20by%20Kimberly/Cake_in_hand.1_ldkxck.jpg" alt="Cake in hand"></img>
                </div>
                <div className="cup_btn">
                    <button className="buttons" onClick={() => navigate("/cupCakeOrders/")}>Create Cup Cakes</button>
                </div>
            </section>

            <section className="create_cookie">
                <div className="cook_photo">
                    <img className="image" id="image" src="https://res.cloudinary.com/dm5alwbmv/image/upload/v1663770639/Caked%20by%20Kimberly/winnie_the_pooh.1_ibx3vb.jpg" alt="Winnie the Pooh"></img>
                </div>
                <div className="cook_btn">
                    <button className="buttons" onClick={() => navigate("/cookieOrders/")}>Create Cookies</button>
                </div>
            </section>

        </article>
    </>
}