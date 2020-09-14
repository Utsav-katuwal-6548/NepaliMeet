import React from 'react';
import {Text} from 'react-native'
import reducers from './redux/reducers';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Login from './screens/Login.js';
import RootNavigator from './navigation/RootNavigator';
import { login } from './redux/actions';
import { Button } from 'react-native-paper';
import Home from './screens/Home';


const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducers, middleware);


export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                

               <Login />
            </Provider>
        );
    }
    
}
