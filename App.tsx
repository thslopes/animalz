import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

var pic = require('./assets/pics/e1.jpeg');
var pic2 = require('./assets/pics/d1.jpg');
var pic3 = require('./assets/pics/t1.jpg');

var pics = [pic, pic2, pic3]

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { imgIdx: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      imgIdx: (prevState.imgIdx +1)%3
    }));
  }
  render() {
    return (
      <View >
        <StatusBar style="auto" />
        <TouchableOpacity onPress={this.handleClick} >
        <Image 
          source={pics[this.state.imgIdx]}
          style={{ width: 375, height: 667 }}
        />
        </TouchableOpacity>
      </View>
    )
  }
}
