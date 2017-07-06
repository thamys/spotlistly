import React from "react";
import axios from "axios";

export class Login extends React.Component{

    constructor(props){
        super();
        this.state = {
            initialStateKey:'spotify_auth_state',
            stateKey: 'spotify_auth_state'
        };
    }

    componentDidMount(){

        /*
            axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
            .then(res => {
                const posts = res.data.data.children.map(obj => obj.data);
                this.setState({ posts });
            });

            var client_id = 'fd1bf045a59147779664bd8d76dca0c4'; // Your client id
            var client_secret = '30fac07b1ecd4539ae7324162850019a'; // Your secret
            var redirect_uri = 'REDIRECT_URI'; // Your redirect uri
        */

        /**
         * Obtains parameters from the hash of the URL
         * @return Object
         */
        function getHashParams() {
          var hashParams = {};
          var e, r = /([^&;=]+)=?([^&;]*)/g,
              q = window.location.hash.substring(1);
          while ( e = r.exec(q)) {
             hashParams[e[1]] = decodeURIComponent(e[2]);
          }
          return hashParams;
        }

        /**
         * Generates a random string containing numbers and letters
         * @param  {number} length The length of the string
         * @return {string} The generated string
         */
        function generateRandomString(length) {
          var text = '';
          var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

          for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
          }
          return text;
        };

        /*
            var userProfileSource = document.getElementById('user-profile-template').innerHTML,
            userProfileTemplate = Handlebars.compile(userProfileSource),
            userProfilePlaceholder = document.getElementById('user-profile');

            oauthSource = document.getElementById('oauth-template').innerHTML,
            oauthTemplate = Handlebars.compile(oauthSource),
            oauthPlaceholder = document.getElementById('oauth');
        */
        var params = getHashParams();
       

        this.setState({
            access_token: params.access_token,
            state: params.state,
            storedState: localStorage.getItem(this.state.stateKey)
        }); 


        if (this.state.access_token && (this.state.state == null || this.state.state !== this.state.storedState)) {
          alert('There was an error during the authentication');
        } else {
          localStorage.removeItem(this.state.stateKey);
          if (this.state.access_token) {
            $.ajax({
                url: 'https://api.spotify.com/v1/me',
                headers: {
                  'Authorization': 'Bearer ' + this.state.access_token
                },
                success: function(response) {
                  //userProfilePlaceholder.innerHTML = userProfileTemplate(response);
                  console.log(response);

                  $('#login').hide();
                  $('#loggedin').show();
                }
            });
          } else {
              $('#login').show();
              $('#loggedin').hide();
          }

          document.getElementById('login-button').addEventListener('click', function() {

            this.setState({
                client_id: 'fd1bf045a59147779664bd8d76dca0c4', // Your client id
                redirect_uri: 'http://localhost:8080/callback', // Your redirect uri
                state: generateRandomString(16)
            });

            localStorage.setItem(this.state.stateKey, this.state.state);

            var scope = 'user-read-private user-read-email';

            var url = 'https://accounts.spotify.com/authorize';
            url += '?response_type=token';
            url += '&client_id=' + encodeURIComponent(this.state.client_id);
            url += '&scope=' + encodeURIComponent(scope);
            url += '&redirect_uri=' + encodeURIComponent(this.state.redirect_uri);
            url += '&state=' + encodeURIComponent(this.state.state);

            window.location = url;
          }, false);
        }
    }
    render(){
        return(
            <div className="login-page">
                <div className="page-header">
                    <h1>Login Page</h1>
                </div>
                <div className="container">
                    <div id="login">
                        <h1>This is an example of the Implicit Grant flow</h1>
                        <button id="login-button" className="btn btn-primary">Log in with Spotify</button>
                    </div>
                    <div id="loggedin">
                        <div id="user-profile">
                        </div>
                        <div id="oauth">
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

Login.propTypes = {
    stateKey: React.PropTypes.string
}