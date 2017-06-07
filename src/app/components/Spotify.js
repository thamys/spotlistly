import React from "react";
import axios from "axios";

export class Spotify extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
        posts: []
        };
    }

    componentDidMount() {
        /*
        axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
        .then(res => {
            const posts = res.data.data.children.map(obj => obj.data);
            this.setState({ posts });
        });
        */

        var CLIENT_ID = 'fd1bf045a59147779664bd8d76dca0c4'; // Your client id
        var CLIENT_SECRET = '30fac07b1ecd4539ae7324162850019a'; // Your secret
        

        axios.post(`https://accounts.spotify.com/api/token`,{
            form: {
                grant_type: 'client_credentials'
            },
            headers: {
                'Authorization': 'Basic ' + (new Buffer(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')),
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            json: true
        })
        .then(res => {
            console.log(res);

            /*
            var token = res.access_token;
            axios.get("https://api.spotify.com/v1/users/thamysgc",{
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                json: true
            }).then(res => {
                console.log(res);
            });
            */
        });

        /**
         * This is an example of a basic node.js script that performs
         * the Client Credentials oAuth2 flow to authenticate against
         * the Spotify Accounts.
         *
         * For more information, read
         * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
         */

        /**
        var client_id = 'fd1bf045a59147779664bd8d76dca0c4'; // Your client id
        var client_secret = '30fac07b1ecd4539ae7324162850019a'; // Your secret

        // your application requests authorization
        var authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            headers: {
                'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
            },
            form: {
                grant_type: 'client_credentials'
            },
            json: true
        };

        request.post(authOptions, function(error, response, body) {
            if (!error && response.statusCode === 200) {

                // use the access token to access the Spotify Web API
                var token = body.access_token;
                var options = {
                url: 'https://api.spotify.com/v1/users/thamysgc',
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                json: true
                };
                request.get(options, function(error, response, body) {
                    console.log(body);
                });
            }
        });
         */

    }

/*
    render() {
        return (
        <div>
            <h1>{`/r/${this.props.subreddit}`}</h1>
            <ul>
            {this.state.posts.map(post =>
                <li key={post.id}>{post.title}</li>
            )}
            </ul>
        </div>
        );
    }
    */

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

                <div id="user-profile-template">
                    <h1>Logged in as name</h1>
                    <div className="media">
                        <div className="pull-left">
                            <img className="media-object" width="150" src="user_image" />
                        </div>
                        <div className="media-body">
                            <dl className="dl-horizontal">
                                <dt>Display name</dt><dd className="clearfix">name</dd>
                                <dt>Id</dt><dd>user_id</dd>
                                <dt>Email</dt><dd>user_email</dd>
                                <dt>Spotify URI</dt><dd><a href="{this.props.user_spotify_url}">user_spotify_url</a></dd>
                                <dt>Profile Image</dt><dd className="clearfix"><a href="user_image">user_image</a></dd>
                                <dt>Country</dt><dd>user_country</dd>
                            </dl>
                        </div>
                    </div>
                </div>

                <div id="oauth-template">
                    <h2>oAuth info</h2>
                    <dl className="dl-horizontal">
                        <dt>Access token</dt><dd className="text-overflow">user_access_token</dd>
                    </dl>
                </div>
            </div>
        );
    }
}