import React, {Component} from 'react';
import {StyleSheet, Button, Text, View, Image, Dimensions, ImageProperties} from 'react-native';

export default class Presentation extends Component {

  state = { 
    image1: require('../images/react-native-mini-logo.jpg'),
    image2: require('../images/drunk3.gif'),
    image9: require('../images/FB_IMG_15509766774455263.jpg')
  };

  static navigationOptions = {
    title: 'Presentation',
    headerRight:<View style={{flex:1, backgroundColor: 'black', height: 50}}><Text>PRESENTATION</Text></View>
  };
  
  render() {
    return (
      <View style={{
        //width: '98%',
        //height: '98%',
        flex: 1,
        //flexDirection: 'row',
        //flexDirection: 'column',
        //justifyContent: 'space-between',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffff55',
        //borderColor: '#ff0000',
        //borderWidth: 2,
      }}>
        <Text style={{fontSize: 20, textAlign:'center'}}>Bem vindo ao{'\n'}React Native - 0.59.5!{'\n'}{'\n'}</Text>
        <View
          style={{
          flexDirection: 'row',
          justifyContent: 'center',
          width: '90%',
          height: 100,
          padding: 10,
          backgroundColor: 555,
          flex: 0.5,
          borderWidth: 1,
          }}>
          <Text style={{padding: 10, borderWidth:2}}>To get started, edit App.js</Text>
          <Text style={{padding: 10, borderWidth:2}}>versão 5</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{ }}>
        {/*<Image resizeMode={'cover'} style={{ flex:1, height:200, width: null }} source={require('../images/react-native-mini-logo.jpg')} /> */}
            <Image source={this.state.image1} />
          </View>
          <View style={{ }}>
            <Image source={this.state.image2}/>
          </View>
        </View>
         {/*flex:1, justifyContent: 'space-around', alignItems:'center' }}>*/}
        <View style={{ flexDirection: 'row', padding: 5}}>
          <Button 
            title="Trocar Imagem"
            onPress={ async () => {
              await this.setState({ image9: this.state.image1 })
              await this.setState({ image1: this.state.image2 })
              await this.setState({ image2: this.state.image9 }) 
            }}
          />
          
          <Text> </Text>
          
          <Button 
            title="Ir para Home"
            onPress={() => this.props.navigation.navigate('Home') }
          />
        </View>

        {/* <Button 
          title="Ir para About"
          onPress={() => this.props.navigation.navigate('About') }
        /> */}

      </View>
    );
  }
}