import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

	state = { loggedIn: null };

	componentWillMount() {
		firebase.initializeApp({
	apiKey: 'AIzaSyC1b5n1mWayPgkq6ZftlAbS8hxJt54uLeo',
    authDomain: 'authentication-d9f0e.firebaseapp.com',
    databaseURL: 'https://authentication-d9f0e.firebaseio.com',
    projectId: 'authentication-d9f0e',
    storageBucket: 'authentication-d9f0e.appspot.com',
    messagingSenderId: '829804403093',
    appId: '1:829804403093:web:cb3be5a41e6cf41a'
		});

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}


  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
        <View style={styles.spinnerCenter}>
			<Spinner size="large" />
        </View>
        );
    }
  }


  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
	spinnerCenter: {
		paddingTop: 350
	}
};

export default App;
