// src/Page1.js

import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';

import Sound from 'react-native-sound';

//import {StackNavigator} from '../index.js';
export default class Page1 extends Component {
  static navigationOptions = {
    title: 'page1',
    headerRight:<View style={{flex:1, backgroundColor: 'black', height: 50}}><Text>HOME</Text></View>
  };

  async Tocar() {
    //await alert('3333333');
    const requireAudio = require('./sounds/siren.mp3');
    const sound = new Sound(requireAudio, (error) => {
    if (error) {
      console.log('error', error);
      return;
    }
    sound.play(() => sound.release());
    });
  }

  render() {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
        <Text>Home</Text>
        <Button 
          title="Tocar Alerta"
          //onPress={ async() => { await this.Tocar(); }}
          onPress={ async() => { await this.Tocar(); this.props.navigation.navigate('About')} }
        />
      </View>
    )
  }
};