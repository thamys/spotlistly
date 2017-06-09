import React from "react";
import axios from "axios";
import querystring from "querystring"
import cookieParser from "cookie-parser"

export class Login extends React.Component{
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


        var stateKey = 'spotify_auth_state';

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

        var userProfileSource = document.getElementById('user-profile-template').innerHTML,
            userProfileTemplate = Handlebars.compile(userProfileSource),
            userProfilePlaceholder = document.getElementById('user-profile');

            oauthSource = document.getElementById('oauth-template').innerHTML,
            oauthTemplate = Handlebars.compile(oauthSource),
            oauthPlaceholder = document.getElementById('oauth');

        var params = getHashParams();

        var access_token = params.access_token,
            state = params.state,
            storedState = localStorage.getItem(stateKey);

        if (access_token && (state == null || state !== storedState)) {
          alert('There was an error during the authentication');
        } else {
          localStorage.removeItem(stateKey);
          if (access_token) {
            $.ajax({
                url: 'https://api.spotify.com/v1/me',
                headers: {
                  'Authorization': 'Bearer ' + access_token
                },
                success: function(response) {
                  userProfilePlaceholder.innerHTML = userProfileTemplate(response);

                  $('#login').hide();
                  $('#loggedin').show();
                }
            });
          } else {
              $('#login').show();
              $('#loggedin').hide();
          }

          document.getElementById('login-button').addEventListener('click', function() {

            var client_id = 'fd1bf045a59147779664bd8d76dca0c4'; // Your client id
            var redirect_uri = 'http://localhost:8080/callback'; // Your redirect uri

            var state = generateRandomString(16);

            localStorage.setItem(stateKey, state);
            var scope = 'user-read-private user-read-email';

            var url = 'https://accounts.spotify.com/authorize';
            url += '?response_type=token';
            url += '&client_id=' + encodeURIComponent(client_id);
            url += '&scope=' + encodeURIComponent(scope);
            url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
            url += '&state=' + encodeURIComponent(state);

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
                <div class="container">
                    <div id="login">
                        <h1>This is an example of the Implicit Grant flow</h1>
                        <button id="login-button" class="btn btn-primary">Log in with Spotify</button>
                    </div>
                    <div id="loggedin">
                        <div id="user-profile">
                        </div>
                        <div id="oauth">
                        </div>
                    </div>
                </div>

                <script id="user-profile-template" type="text/x-handlebars-template">
                    <h1>Logged in as {{display_name}}</h1>
                    <div class="media">
                        <div class="pull-left">
                        <img class="media-object" width="150" src="{{images.0.url}}" />
                        </div>
                        <div class="media-body">
                        <dl class="dl-horizontal">
                            <dt>Display name</dt><dd class="clearfix">{{display_name}}</dd>
                            <dt>Id</dt><dd>{{id}}</dd>
                            <dt>Email</dt><dd>{{email}}</dd>
                            <dt>Spotify URI</dt><dd><a href="{{external_urls.spotify}}">{{external_urls.spotify}}</a></dd>
                            <dt>Link</dt><dd><a href="{{href}}">{{href}}</a></dd>
                            <dt>Profile Image</dt><dd class="clearfix"><a href="{{images.0.url}}">{{images.0.url}}</a></dd>
                            <dt>Country</dt><dd>{{country}}</dd>
                        </dl>
                        </div>
                    </div>
                </script>

                <script id="oauth-template" type="text/x-handlebars-template">
                    <h2>oAuth info</h2>
                    <dl class="dl-horizontal">
                        <dt>Access token</dt><dd class="text-overflow">{{access_token}}</dd>
                    </dl>
                </script>
            </div>
        );
    }
}