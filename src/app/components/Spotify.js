import React from "react";
import axios from "axios";
import querystring from "querystring"
import cookieParser from "cookie-parser"

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
        var REDIRECT_URI = 'REDIRECT_URI'; // Your redirect uri

        /**
         * Generates a random string containing numbers and letters
         * @param  {number} length The length of the string
         * @return {string} The generated string
         */
        var generateRandomString = function(length) {
            var text = '';
            var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

            for (var i = 0; i < length; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
        };

        var stateKey = 'spotify_auth_state';

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
            <div className="spotify">
                <div className="row">
                     <div className="col-md-12">
                        <h3>Albuns</h3>
                        <ul>
                            <li> Album 01 </li>
                            <li> Album 01 </li>
                            <li> Album 01 </li>
                            <li> Album 01 </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}