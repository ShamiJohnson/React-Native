//import library to help create component 
import React from 'react';
//import ReactNative from 'react-native';
import { AppRegistry, View } from 'react-native';
//IMPORT YOUR file from components 
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


//create a component 
const App = () => (
	<View style={{ flex: 1 }}>
		<Header headerText={'Albums'} />
		<AlbumList />
	</View>

	);
///


///Render it to device 

AppRegistry.registerComponent('albums', () => App);

