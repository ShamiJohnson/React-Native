// import libraries 
import React from 'react';
import { Text, View } from 'react-native';
// make a component  
const Header = (props) => {

	const { textStyle, viewStyle } = styles;

///the name headerText is not a property. it can be anything you want to call it. 
	return ( 
		<View style={viewStyle}>
		<Text style={textStyle}> {props.headerText} </Text>
		</View>
		);
///
};


//Styling 
const styles = {

	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center', //up and down
		alignItems: 'center', //right and left
		height: 60,
		paddingTop: 25,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'

	},

	textStyle: {
		fontSize: 20
	}

};

//make the component available for other parts

export { Header };
