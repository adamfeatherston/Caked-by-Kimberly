//Parent element module the being able to have a search feature in CustomerList.
//1. Child Element 1: CustomerSearch.js
//2. Child Element 2: CustomerList.js

import { useState } from "react"
import { CustomerList } from "./CustomerList"
import { CustomerNameSearch } from "./CustomerNameSearch"




export const CustomerContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <CustomerNameSearch setterFunction={setSearchTerms} />
        <CustomerList searchTermState={searchTerms} />
    </>
}