import React from "react";

const Booking = () => {
    return (
        <div>
            <h1>Book Your bus</h1>
            <form>
                <div>
                    <label>From:</label>
                    <input type="text" name="from" />
                </div>
                <div>
                    <label>To:</label>
                    <input type="text" name="to" />
                </div>
                <div>
                    <label>Date:</label>
                    <input type="date" name="date" />
                </div>
                <button type="submit">Search Buses</button>
            </form>
        </div>
    )
}

export default Booking;