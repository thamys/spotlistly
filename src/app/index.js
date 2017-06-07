import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Spotify } from "./components/Spotify";
import { Footer } from "./components/Footer";

class App extends React.Component {
    render() {
        var user =[];
        return (
            <div className="all">
              <Header/>
              <Home initialTerms="Termo da Busca" />
              <Spotify access_token="" user={user} subreddit="reactjs"/>
              <Footer/>
            </div>
        );
    }
}

render(<App/>, document.getElementById("app"));