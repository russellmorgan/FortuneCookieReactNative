import React, { Component } from "react";
import { Animated, Easing, StyleSheet, Text, Alert, View, Image, ImageBackground, TouchableWithoutFeedback } from "react-native";



export class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing (
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 3000,
        delay: 500
      }
    ).start();
  }

  render() {
    let { fadeAnim } = this.state;
    return (
      <Animated.View style={{ opacity: fadeAnim }}>
        {this.props.children}
      </Animated.View>
    );
  }
}

export class TitleAnimationView extends React.Component {

  state = {
    yPosition: new Animated.Value(-150)
  }
  
  componentDidMount() {
    Animated.spring (
      this.state.yPosition, 
      {
      toValue: 0,
      duration: 3000,
      friction: 3,
    }).start();
  }

  render() {
    return(
      <Animated.Image source={require('./img/misfortune-txt.png')} style={{transform: [{ translateY: this.state.yPosition }]}}/>
    );
  }
}


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
          <TitleAnimationView />
          <FadeInView>
            <TouchableWithoutFeedback onPress={this.showRandomFortune}>
                <Image source={require('./img/cookie.png')} />
            </TouchableWithoutFeedback>
          </FadeInView>
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
