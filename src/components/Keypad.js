import React from "react";

function Keypad (){
    function handleSubmit(event) {
        event.preventDefault();
        console.log("I submit");
    }

    return (
        <div>
            <form>
                <input type="password" name="password" placeholder="Enter password..." onChange={() => console.log('Entering password...')} />
                <button onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}

export default Keypad;