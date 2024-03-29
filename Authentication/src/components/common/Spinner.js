import React from 'react';
import { View, ActivityIndicator } from 'react-native';

//if we dont tell the size is small then the default size will be large 
const Spinner = ({ size }) => {
	return (
		<View style={styles.spinnerStyle}>
			<ActivityIndicator size={size || 'large'} />
		</View>
		);
};

const styles = {
	spinnerStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'

	}
};

export { Spinner };
