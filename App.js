import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import RootNavigator from "./navigation/RootNavigator";
import reducers from './redux/reducers';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducers, middleware);

export default App = () => {
    return (
        <Provider store={store}>
            <RootNavigator />

        </Provider>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


