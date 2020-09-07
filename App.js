import  React from "react";
import styles from './styles.js'

import { View, Text } from "react-native";
import Home from "./screens/Home.js";

export default class App extends React.Component {

  render(){
    return(
      <View style={styles.container}>
        <Home/>

      </View>
      
    );
  }
}

  
