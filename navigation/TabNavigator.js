import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Home from '../screens/Home';

import Profile from '../screens/Profile';
import Matches from '../screens/Matches';
import Chat from '../screens/Chat';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon name={'ios-home'} style={[{ color: tintColor }]} size={25}/>
                    </View>
                )
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon name={'ios-person'} style={[{ color: tintColor }]} size={25}/>
                    </View>
                ),
                activeColor: '#ffffff',
                inactiveColor: '#a3c2fa',
                barStyle: { backgroundColor: '#2163f6' },
            }
        },
        Matches: {
            screen: Matches,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon name={'ios-people'} style={[{ color: tintColor }]} size={25}/>
                    </View>
                ),
                activeColor: '#ffffff',
                inactiveColor: '#92c5c2',
                barStyle: { backgroundColor: '#2c6d6a' },
            }
        },
        Chat: {
            screen: Chat,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon name={'ios-chatbubbles'} style={[{ color: tintColor }]} size={25}/>
                    </View>
                ),
                activeColor: '#ffffff',
                inactiveColor: '#ebaabd',
                barStyle: { backgroundColor: '#d13560' }
            }
        }
    },
    {
        initialRouteName: "Home",
        activeColor: '#ffffff',
        inactiveColor: '#bda1f7',
        barStyle: { backgroundColor: '#6948f4' }
    }
);

export default TabNavigator;
