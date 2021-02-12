import React from "react"

const Cross = ( props ) => {

    return(
        <svg className="cross">
            <line className="first" x1='15' y1="15" x2="100" y2="100" stroke="black" stroke-width="10" stroke-linecap="round"/>
            <line className="second" x1='15' y1="100" x2="100" y2="15" stroke="black" stroke-width="10" stroke-linecap="round"/>
        </svg>
    )
}
export default Cross