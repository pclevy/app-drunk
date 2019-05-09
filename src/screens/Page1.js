// src/Page1.js

import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';

//import SoundPlayer from 'react-native-sound-player';

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
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
        <Button 
          title="Tocar Alerta"
          onPress={ () => { alert('red_alert.mp3'); this.props.navigation.navigate('About')} }
          //onPress={async () => {await alert('red_alert.mp3'); await this.props.navigation.navigate('About')} }
        />
      </View>
    )
  }
};