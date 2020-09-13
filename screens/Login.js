import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles'

import { login } from '../redux/actions'
import * as firebase from 'firebase';

import firebaseConfig from '../config/firebase.js';
import TabNavigator from '../navigation/TabNavigator';
import RootNavigator from '../navigation/RootNavigator';



if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
class Login extends React.Component {
  state = {}

  componentDidMount() {

    firebase.auth().onAuthStateChanged((user) => {

      if (user != null) {
        
        this.props.dispatch(login(true))
        console.log("We are authenticated now!" + JSON.stringify(user));
      }
    });

  }
  login = async () => {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('3291151004311208', {
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      // Build Firebase credential with the Facebook access token.
      const credential = await firebase.auth.FacebookAuthProvider.credential(token);

      // Sign in with credential from the Facebook user.
      firebase.auth().signInWithCredential(credential).catch((error) => {
        // Handle Errors here.
        Alert.alert("Try Again")
      });
    }
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <RootNavigator />
      )
    } else {
      return (
        <View styles={styles.container}>
          <Text>{this.props.loggedIn}</Text>
        </View>
      )

    }

  }

}


function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  };
}


export default connect(mapStateToProps)(Login);
