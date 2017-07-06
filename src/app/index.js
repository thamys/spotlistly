import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { Root } from "./components/Root";
import { Home } from "./components/partials/Home";

import { Login } from "./components/auth/Login";
import { Callback } from "./components/auth/Callback";
import { RefreshToken } from "./components/auth/RefreshToken";

class App extends React.Component {
    render() {
        var user =[];
        return (
            <Router>
                <Root>
                    <Route exact path="/" component={Home}/>
                    <Route path={"/login"} component={Login} />
                    <Route path={"/callback"} component={Callback} />
                    <Route path={"/refresh-token"} component={RefreshToken} />
                </Root>
            </Router>
        );
    }
}

render(<App/>, document.getElementById("app"));