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
            <div className="about_text">Caked by Kimberly is an independent, local place to order custom made cakes, cupcakes, cookies, and goodies.
            </div>
            <div className="about_text">Each order is made from scratch and specially caked with love.
            </div>
            <div className="about_text">Kimberly is a christian, wife, mother of 2, and NICU nurse.
            </div>
        </section>
        <section>
            <div className="about__1">
                <img className="image" id="image" src="https://res.cloudinary.com/dm5alwbmv/image/upload/v1663770639/1_year_birthday_cake.2_fn5ee6.jpg" alt="1st Birthday"></img>
                <img className="image" id="image" src="https://res.cloudinary.com/dm5alwbmv/image/upload/v1663770639/Dog_Cake.1_gbdcaj.jpg" alt="Fluffy Dog"></img>
                <img className="image" id="image" src="https://res.cloudinary.com/dm5alwbmv/image/upload/v1663770639/winnie_the_pooh.1_ibx3vb.jpg" alt="Winnie the Pooh"></img>
                <img className="image" id="image" src="https://res.cloudinary.com/dm5alwbmv/image/upload/v1663770639/Cake_in_hand.1_ldkxck.jpg" alt="Piece in hand"></img>
            </div>
            <div className="about__1">
                <img className="image" id="image" src="https://res.cloudinary.com/dm5alwbmv/image/upload/v1663770639/pink_flowers.1_vxkigv.jpg" alt="Pink Flowers"></img>
                <img className="image" id="image" src="https://res.cloudinary.com/dm5alwbmv/image/upload/v1663770640/peanut_butter.1_abwu2c.jpg" alt="Peanut Butter"></img>
                <img className="image" id="image" src="https://res.cloudinary.com/dm5alwbmv/image/upload/v1663770639/little_mermaid.1_skm8je.jpg" alt="Little Mermaid"></img>
                <img className="image" id="image" src="https://res.cloudinary.com/dm5alwbmv/image/upload/v1663770639/chocolate_flowers.1_nofbgi.jpg" alt="Chocolate Flowers"></img>
            </div>
            <div className="about__1">
                <img className="image" id="image" src="https://res.cloudinary.com/dm5alwbmv/image/upload/v1663770639/1_year_birthday_cake.1_gqhtui.jpg" alt="1st Birthday.2"></img>
                <img className="image" id="image" src="https://res.cloudinary.com/dm5alwbmv/image/upload/v1663770639/birthday.1_cdzowr.jpg" alt="Girl Birthday"></img>
                <img className="image" id="image" src="https://res.cloudinary.com/dm5alwbmv/image/upload/v1663770639/lion_king.1_ktpinp.jpg" alt="Lion King"></img>
                <img className="image" id="image" src="https://res.cloudinary.com/dm5alwbmv/image/upload/v1663770640/shark.1_jh8dhc.jpg" alt="Jaws"></img>
            </div>
        </section>
        <section>
            <div className="about_text">
                {!cakedUserObject.staff
                    ? <button className="buttons" onClick={() => navigate("/customOrders/")}>Create Your Own Cake</button>
                    : "   Customers see a button directing them to the page to create their own custom cake."
                }
            </div>
            <div className="about_text">Follow on instagram at: cakedByKimberly
            </div>
            <div className="about_text">Contact "caked by Kimberly" by text message: 254-431-6116 or email: cakedbyKimberly@gmail.com
            </div>
            <div className="about_text">Pricing will be calculated based on the design, size, and ingredients in each order.</div>
        </section>
    </>
}