import React from 'react';
import { Text, View } from 'react-native';
import styles from "../styles";

class Chat extends React.Component {
    state = {}

    componentWillMount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.fontBig}>Chat Screen</Text>
            </View>
        )
    }

}

export default Chat;
