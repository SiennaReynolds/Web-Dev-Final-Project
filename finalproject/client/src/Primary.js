import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Events from "./pages/events";
import Upload from "./pages/upload";
import Update from "./pages/update";
import "./index.css";
/* <ul className="header">
       <li><NavLink to="/pages/Events">View Events</NavLink></li>
       <li><NavLink to="/pages/Upload">Upload Student Orientation CSX/XCL</NavLink></li>
       <li><NavLink to="/pages/Update">Mark Off Present/Attending Students</NavLink></li>
</ul>*/
class Primary extends Component {
    render() {
        return (
            <HashRouter>
                <center>
                    <div>
                        <div className="header">
                            <h1>Welcome to the GSU student Check-in page</h1>
                            <button className="button"><NavLink to="/pages/Events">View Events</NavLink></button>
                            <button className="button"><NavLink to="/pages/Upload">Create Event</NavLink></button>
                            <button className="button"><NavLink to="/pages/Update">Student Check-in</NavLink></button>
                        </div>

                        <div className="content">
                            <Route exact path="/pages/Events" component={Events} />
                            <Route path="/pages/Upload" component={Upload} />
                            <Route path="/pages/Update" component={Update} />
                        </div>
                    </div>
                </center>
            </HashRouter>
        );
    }
}

export default Primary;