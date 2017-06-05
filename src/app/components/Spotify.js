import React from "react";

export class Spotify extends React.Component{
    render(){
        var albums = [
            {name: "Album 1", type: "Tipe 1", songs:[
                "Song 1", "Song 2", "Song 3", "Song 4", "Song 5"
            ]},
             {name: "Album 2", type: "Tipe 2", songs:[
                "Song 1", "Song 2", "Song 3", "Song 4", "Song 5"
            ]},
             {name: "Album 3", type: "Tipe 3", songs:[
                "Song 1", "Song 2", "Song 3", "Song 4", "Song 5"
            ]},
             {name: "Album 4", type: "Tipe 4", songs:[
                "Song 1", "Song 2", "Song 3", "Song 4", "Song 5"
            ]},
             {name: "Album 5", type: "Tipe 5", songs:[
                "Song 1", "Song 2", "Song 3", "Song 4", "Song 5"
            ]},
        ];
        return(
            <div className="container">
                <div className="page-header">
                    <h2>Artist 1</h2>
                </div>
                <ul>
                    {albums.map((album, i) => 
                        <li key={i}>
                            <h3>{album.name}</h3>
                            <small>{album.type}</small>
                            <p>
                                {album.songs.map((song, y) => 
                                    <span key={y}>{song}, </span> 
                                )}
                            </p>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

Spotify.propTypes = {
    albums: React.PropTypes.object
};