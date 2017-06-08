import React from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";

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