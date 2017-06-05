import React from "react";

export class Home extends React.Component{

    constructor(props){
        super();
        this.state = {
            terms: props.initialTerms,
            status: 0
        };
    }

    onSearch(){
        this.setState({
            terms: "Busquei"
        });
    }

    render(){
        return(
            <div className="container">
                <div className="page-header">
                    <h1>Buscar no Spotify</h1>
                </div>
                <p className="lead">Digite o termo abaixo para buscar!</p>
                <div className="row">
                    <div className="col-md-12">
                        <div className="input-group">
                            <input type="text" id="search-terms" className="form-control" placeholder="Search for..."/>
                            <span className="input-group-btn">
                                <button onClick={() => this.onSearch()} className="btn btn-default" type="button">Go!</button>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="page-header">
                    <h5>Resultados para: {this.state.terms}</h5>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    initialTerms: React.PropTypes.string,
    terms: React.PropTypes.string
}