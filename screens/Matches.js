import React from 'react';
import { Text, View } from 'react-native';
import styles from "../styles";

class Matches extends React.Component {
    state = {}

    componentWillMount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.fontBig}>Matches Screen</Text>
            </View>
        )
    }

}

export default Matches;
