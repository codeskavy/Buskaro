import React from "react";

const Tracking=()=>{
    return(
        <div>
            <h1>Track your Bus</h1>
            <form>
                <div>
                    <label>Bus Number:</label>
                    <input type="text" name="busNumber"/>
                </div>
                <button type="submit">Track</button>
            </form>
        </div>

     
    )
}

export default Tracking;