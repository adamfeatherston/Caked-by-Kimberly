//Parent element module the being able to have a search feature in the customOrderList.
//1. Child Element 1: CustomOrderSearch.js
//2. Child Element 2: CustomOrderList.js

import { useState } from "react"
import { CustomOrderList } from "./CustomOrderList"
import { CustomOrderSearch } from "./CustomOrderSearch"


export const CustomOrderContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <CustomOrderSearch setterFunction={setSearchTerms} />
        <CustomOrderList searchTermState={searchTerms} />
        </>
}