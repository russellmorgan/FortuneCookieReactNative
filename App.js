import React, { Component } from "react";
import { Animated, StyleSheet, Text, Alert, View, Image, ImageBackground, TouchableWithoutFeedback } from "react-native";


export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      cookieOpen: 0
    }
  }

  showRandomFortune = () => {
    this.setState({cookieOpen:1})
    const fortunes = [
      'Your ex has never been happier',
      'You will never solve a Rubik’s Cube',
      'Love is for the lucky and the brave. Tough break, coward',
      'Plan for many pleasures ahead. Oh wait, this wasn’t for you'
    ]
    let fortune = fortunes[Math.floor(Math.random()*fortunes.length)]
    Alert.alert(fortune)
  }

  render() {
    return (
      <ImageBackground source={require('./img/bg-misfortune.jpg')} style={{ width: '100%', height: '100%' }}>
        <View style={styles.container}>
          <Image source={require('./img/misfortune-txt.png')} />
          <TouchableWithoutFeedback onPress={this.showRandomFortune}>
            <Animated.Image source={require('./img/cookie.png')} />
          </TouchableWithoutFeedback>
          <Text style={styles.instructions}>Tap the cookie</Text>
          <Text>{this.state.cookieOpen}</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  instructions: {
    fontSize: 18,
    margin: 40,
    color: '#fff'
  }
});
