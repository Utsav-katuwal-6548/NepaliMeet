import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import RootNavigator from "./navigation/RootNavigator";

export default App = () => {
    return (
        <RootNavigator />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


