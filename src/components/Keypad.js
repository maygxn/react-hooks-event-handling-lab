// Code Keypad Component Here
import React from "react"


function Keypad () {
        // component needs to listen for a change event
    function handleChange() {
        console.log("Entering password...")
    }


    return (
        <div>
            <input type="password" onChange={handleChange} />
        </div>
    )
}

export default Keypad;