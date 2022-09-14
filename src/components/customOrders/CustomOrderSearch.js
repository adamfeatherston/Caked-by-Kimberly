//module for containing a text search box for the user (employee)

export const CustomOrderSearch = ({ setterFunction }) => {
    return (
        <div>
            <input 
                onChange={
                    (changeEvent) => {
                        setterFunction(changeEvent.target.value)
                    }
                }
            type="text" placeholder="Enter search terms" />
        </div>
    )
}