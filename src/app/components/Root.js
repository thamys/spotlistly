import React from "react";

import { Header } from "./partials/Header";
import { Footer } from "./partials/Footer";

export class Root extends React.Component{
    render(){
        return(
            <div className="all">
                <Header/>
                <div className="container">
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        );
    }
}