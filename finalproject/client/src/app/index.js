import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import { EventsList, EventList, EventsInsert, EventsUpdate } from '../pages'
import {
    NavLink,
} from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/index.css'
function App() {
    return (
        <Router>
            <center>
                <div className="header">
                    <h1>Welcome to the GSU student Check-in page</h1>
                    <button className="button"><NavLink to="/events/list">View Events</NavLink></button>
                    <button className="button"><NavLink to="/events/create">Create Event</NavLink></button>
                </div>

                <div className="content">
                    <Route exact path="/events/list" component={EventsList} />
                    <Route path="/events/create" component={EventsInsert} />
                    <Route path="/:id/view/" component={EventList} />
                </div>
            </center>
        </Router>
    )
}

export default App
