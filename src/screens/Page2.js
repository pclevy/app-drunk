import React, { Component } from 'react';

import { View, Text, Button, AsyncStorage } from 'react-native';


export default class Page2 extends Component {
  static navigationOptions = {
    title: 'page2',
    headerRight:<View style={{flex:1, backgroundColor: 'black', height: 50}}><Text>ABOUT</Text></View>
};
    render() {
    return (
        <View>
            <Button 
      title="Ir para Presentation"
      onPress={() => this.props.navigation.navigate('Presentation') }
    />
          </View>

    );
  }
}