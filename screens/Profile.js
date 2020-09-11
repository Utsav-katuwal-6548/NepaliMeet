import React from 'react';
import styles from '../styles'
import { Text, View } from 'react-native';

class Profile extends React.Component {
    state = {}

    componentWillMount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.fontBig}>Profile Screen</Text>
            </View>
        )
    }
}

export default Profile;
