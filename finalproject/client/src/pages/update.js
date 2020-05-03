import React, { Component } from "react";

class Update extends Component {
    render() {
        return (
            <div>
                <h2>Update a preexisting event.</h2>
                <p>Choose an event, then mark students as present by clicking the box beside their name. </p>
                <button className="button">Complete Check-in</button>
            </div>
        );
    }
}

export default Update;