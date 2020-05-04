import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { EventsList, EventsInsert, EventsUpdate } from '../pages'
import {
    NavLink,
    HashRouter
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
                    <button className="button"><NavLink to="/events/update">Student Check-in</NavLink></button>
                </div>

                <div className="content">
                    <Route exact path="/events/list" component={EventsList} />
                    <Route path="/events/create" component={EventsInsert} />
                    <Route path="/events/update"  path="/events/update/:id"  exact component={EventsUpdate} />
                </div>
            </center>
        </Router>
    )
}

export default App
