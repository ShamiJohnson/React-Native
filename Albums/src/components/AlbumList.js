import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

	state = { albums: [] };


	componentWillMount() {
		// ASYNC HTTP Request to get albums from the API.
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => response.json())
    .then((responseData) => this.setState({ albums: responseData }));
}

renderAlbums() {
	return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
}


	render() {
		return (
			<ScrollView>
			{this.renderAlbums()}
			</ScrollView>
		);
	}
}

export default AlbumList;

/*

fetch('https://rallycoding.herokuapp.com/api/music_albums')
	.then((response) => response.json())
	.then((responseData) =>{console.log(responseData)});

    .then(response => response.json())
    .then(data => this.setState({ albums: data }));


	fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => response.json())
    .then(data => this.setState({ albums: data }));


     fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => response.json())
    .then(data => this.setState({ albums: data }));

    */
