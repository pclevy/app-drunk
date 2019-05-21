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


/* componentDidMount() {
  SoundPlayer.onFinishedPlaying((success: boolean) => { // success is true when the sound is played
    console.log('finished playing', success)
  })
  SoundPlayer.onFinishedLoading(async (success: boolean) => {
    console.log('finished loading', success)
    // ready to `play()`, `getInfo()`, etc
    console.log(await SoundPlayer.getInfo())
  })
}
 */

Tocar () {
  alert('3333333');
  
  const requireAudio = require('./sounds/red-alert.mp3');
  const sound = new Sound(requireAudio, (error) => {
  if (error) {
    console.log('error', error);
    return;
  }
  sound.play(() => sound.release());
  });
  
};


  render() {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
        <Text>Home</Text>
        <Button 
          title="Tocar Alerta"
          //onPress={ () => { alert('red_alert.mp3'); this.props.navigation.navigate('About')} }
          //onPress={async () => { this.Tocar(); await alert('red_alert.mp3'); await this.props.navigation.navigate('About')} }
          onPress={async () => { this.Tocar(); }}
        />
      </View>
    )
  }
};