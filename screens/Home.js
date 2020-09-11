import React from 'react';
import styles from '../styles'
import { Text, View } from 'react-native';

class Home extends React.Component {
    state = {}

    componentWithMount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.fontBig}>Home Screen</Text>
            </View>
        )
    }

}

export default Home;
