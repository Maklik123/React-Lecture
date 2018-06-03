import React from "react"
import { Switch, Route } from "react-router-dom"

import Landing from "./Landing";
import Resume from "./Resume";
import Contact from "./Contact";
import About from "./About";
import Project from "./Project";

const Main =() =>(
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/resume' component={Resume}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/project' component={Project}/>
    </Switch>
);

export default Main;