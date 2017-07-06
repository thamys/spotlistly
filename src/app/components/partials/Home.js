import React from "react";

import { Search } from "../functions/Search";

export class Home extends React.Component{
    render(){
        return(
            <div className="homepage">
                <Search/>
            </div>
        );
    }
}