import React from "react";

export class Spotify extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="col-md-12">
                    <div id="login">
                        <h1>This is an example of the Implicit Grant flow</h1>
                        <button id="login-button" className="btn btn-primary">Log in with Spotify</button>
                    </div>
                    <div id="loggedin">
                        <div id="user-profile"></div>
                        <div id="oauth"></div>
                    </div>
                </div>

                <script id="user-profile-template" type="text/x-handlebars-template">
                    <h1>Logged in as {this.props.user.display_name}</h1>
                    <div className="media">
                        <div className="pull-left">
                            <img className="media-object" width="150" src="{this.props.user.image}" />
                        </div>
                        <div className="media-body">
                            <dl className="dl-horizontal">
                                <dt>Display name</dt><dd className="clearfix">{this.props.user.display_name}</dd>
                                <dt>Id</dt><dd>{this.props.user.id}</dd>
                                <dt>Email</dt><dd>{this.props.user.email}</dd>
                                <dt>Spotify URI</dt><dd><a href="{this.props.user_spotify_url}">{this.props.user.spotify_url}</a></dd>
                                <dt>Profile Image</dt><dd className="clearfix"><a href="{this.props.user.image}">{this.props.user.image}</a></dd>
                                <dt>Country</dt><dd>{this.props.user.country}</dd>
                            </dl>
                        </div>
                    </div>
                </script>

                <script id="oauth-template" type="text/x-handlebars-template">
                    <h2>oAuth info</h2>
                    <dl className="dl-horizontal">
                        <dt>Access token</dt><dd className="text-overflow">{this.props.access_token}</dd>
                    </dl>
                </script>
            </div>
        );
    }
}

Spotify.propTypes = {
    user: React.PropTypes.array,
    access_token: React.PropTypes.string
};