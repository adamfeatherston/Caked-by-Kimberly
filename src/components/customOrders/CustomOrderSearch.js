//module for containing a text search box for the user (employee)
import "./Orders.css"

export const CustomOrderSearch = ({ setterFunction }) => {
    return (
        <div>
            <input className="search_text"
                onChange={
                    (changeEvent) => {
                        setterFunction(changeEvent.target.value)
                    }
                }
                type="text" placeholder="Search Order Descriptions" />
        </div>
    )
}