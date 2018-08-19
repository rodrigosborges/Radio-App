

import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Dimensions, ImageBackground, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { Player } from 'react-native-audio-streaming';

const url = "http://minha.webradio.srv.br:8030/stream?type=.mp3";
// ReactNativeAudioStreaming.play(url, {showIniOSMediaCenter: true, showInAndroidNotifications: true});

export default class HelloWorldApp extends React.Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {
    return (
      <ImageBackground source={require('./fundo3.jpg')} style={{height: null, width: null, flex: 1}} imageStyle={{resizeMode: 'stretch'}}>
        <View style={styles.main}>
          <Image style={styles.logo} source={require('./logo_caveira.png')} />
          <Image style={styles.nome} source={require('./logo_trinka.png')} />
        </View>
        <Player url={"http://minha.webradio.srv.br:8030/stream?type=.mp3"} />
      </ImageBackground>
    );
  }
}

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    paddingTop: "8%",
    height: "60%",
  },
  logo: {
    width: width*0.7,
    height: height*0.3,
    marginBottom: height*0.05
  },
  nome: {
    width: width,
    height: height*0.05,
  }
});