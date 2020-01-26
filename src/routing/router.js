import React from "react";
import Home from "./home";
import About from "./about";
import Dashboard from "./dashboard";
import Fotos from "./fotos";
import Altkom from "./altkom";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function RouterExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/fotos">Fotos</Link>
                    </li>
                    <li>
                        <Link to="/altkomFrame">altkom</Link>
                    </li>
                </ul>

                <hr/>

                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard/>
                    </Route>
                    <Route path="/fotos">
                        <Fotos/>
                    </Route>
                    <Route path="/altkomFrame">
                        <Altkom/>
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}


