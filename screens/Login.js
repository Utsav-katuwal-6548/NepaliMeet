import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles';
import RootNavigator from '../navigation/RootNavigator.js';
import {login} from '../redux/actions';
import * as firebase from 'firebase';
firebase.initializeApp(firebaseConfig);
import firebaseConfig from '../config/firebase.js'


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
        if(this.props.loggedIn){
            return(
                <RootNavigator/>
            )
        }else{
            return (
                <View styles={styles.container}>
                    <Text>Login</Text>
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
  