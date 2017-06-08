import React from "react";
import { render } from "react-dom";
import { Router, Route } from "react-router";
import { createBrowserHistory } from 'history';

import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Login } from "./components/Login";

class App extends React.Component {
    render() {
        var user =[];
        return (
            <Router history={createBrowserHistory()} >
                <Route component={Root}>
                    <Route path={"home"} component={Home} />
                    <Route path={"login"} component={Login} />
                </Route>
            </Router>
        );
    }
}

render(<App/>, document.getElementById("app"));