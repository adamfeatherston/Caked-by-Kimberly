// module for creating a search function for the customer list.

export const CustomerNameSearch = ({ setterFunction }) => {
    return (
        <div>
            <input
                onChange={
                    (changeEvent) => {
                        setterFunction(changeEvent.target.value)
                    }
                }
                type="text" placeholder="Search Cutomers by Name" />
        </div>
    )
}