import React from 'react';
import styles from '../styles'
import { Text, View ,Alert} from 'react-native';
import { connect } from 'react-redux';
import { login } from '../redux/actions'



class Home extends React.Component {
  state = {}

   componentDidMount() {
  
  }


   

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.fontBig}>Home</Text>
      </View>
    )
  }

}
function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  };
}

export default connect(mapStateToProps)(Home);
