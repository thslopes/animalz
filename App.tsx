import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Audio } from 'expo-av';

const {height, width} = Dimensions.get('window');

var pic1 = require('./assets/pics/chicken.jpg');
var pic2 = require('./assets/pics/cow.jpg');
var pic3 = require('./assets/pics/d1.jpg');
var pic4 = require('./assets/pics/duck.jpg');
var pic5 = require('./assets/pics/e1.jpeg');
var pic6 = require('./assets/pics/giraffe.jpeg');
var pic7 = require('./assets/pics/lion.jpg');
var pic8 = require('./assets/pics/moose.jpg');
var pic9 = require('./assets/pics/rooster.jpg');
var pic10 = require('./assets/pics/t1.jpg');
var pic11 = require('./assets/pics/turkey.jpg');
var pic12 = require('./assets/pics/wolf.jpg');

var sound1 = require('./assets/sounds/chicken.mp3');
var sound2 = require('./assets/sounds/cow.mp3');
var sound3 = require('./assets/sounds/d1.mp3');
var sound4 = require('./assets/sounds/duck.mp3');
var sound5 = require('./assets/sounds/e1.mp3');
var sound6 = require('./assets/sounds/giraffe.mp3');
var sound7 = require('./assets/sounds/lion.mp3');
var sound8 = require('./assets/sounds/moose.mp3');
var sound9 = require('./assets/sounds/rooster.mp3');
var sound10 = require('./assets/sounds/t1.mp3');
var sound11 = require('./assets/sounds/turkey.mp3');
var sound12 = require('./assets/sounds/wolf.mp3');

var pics = [pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9,pic10,pic11,pic12]
var sounds = [sound1,sound2,sound3,sound4,sound5,sound6,sound7,sound8,sound9,sound10,sound11,sound12]

var idx = 0;

const App = () => {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    var { sound } = await Audio.Sound.createAsync(sounds[idx]);

    setSound(sounds[idx]);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  async function handleClick() {
    idx= (idx + 1) % 12;
    playSound()
  }

  // TODO
  // React.useEffect(() => {
  //   return sound
  //     ? () => {
  //         console.log('Unloading Sound');
  //         sound.unloadAsync(); }
  //     : undefined;
  // }, [sound]);

  return (
    <View >
      <StatusBar style="auto" />
      <TouchableOpacity onPress={handleClick} >
        <Image
          source={pics[idx]}
          style={{ width: width, height: height }}
        />
      </TouchableOpacity>
    </View>
  )
}

export default App