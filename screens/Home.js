import React from 'react';
import styles from '../styles'
import { Text, View } from 'react-native';
import {connect}from 'react-redux';
import{login} from '../redux/actions';

class Home extends React.Component {
    state = {}

    componentWillMount() {
        this.props.dispatch(login("hy utsav"))
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.fontBig}>{this.props.user}</Text>
            </View>
        )
    }

}
function mapStateToProps(state){
    return{
        user: state.user
    };
}

export default connect(mapStateToProps)(Home);
