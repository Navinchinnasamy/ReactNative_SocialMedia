import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
      key: 1,
      title: 'Title 1',
      text: 'Description.\nSay something cool',
      image: require('../assets/1.jpg'),
      backgroundColor: '#fff',
    },
    {
      key: 2,
      title: 'Title 2',
      text: 'Other cool stuff',
      image: require('../assets/2.jpg'),
      backgroundColor: '#fff',
    },
    {
      key: 3,
      title: 'Rocket guy',
      text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
      image: require('../assets/3.jpg'),
      backgroundColor: '#fff',
    }
  ];

  const styles = StyleSheet.create({
    slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 320,
      height: 320,
      marginVertical: 32,
    },
    text: {
      color: 'rgba(56, 184, 245, 0.8)',
      textAlign: 'center',
    },
    title: {
      fontSize: 22,
      color: 'white',
      textAlign: 'center',
    },
    buttonCircle: {
      width: 44,
      height: 44,
      backgroundColor: 'rgba(0, 0, 0, .2)',
      borderRadius: 22,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  export default class walkThroughScreen extends React.Component {
    constructor(props){
        super(props);
    }

    _renderItem = ({item}) => {
      return (
        <View
          style={[
            styles.slide,
            {
              backgroundColor: item.bg,
            },
          ]}>
          <Text style={styles.title}>{item.title}</Text>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.text}>{item.text}</Text>
        </View>
      );
    };
  
    _keyExtractor = (item) => item.title;
  
    _renderNextButton = () => {
      return (
        // <View style={styles.buttonCircle}>
        //   <Icon
        //     name="md-arrow-round-forward"
        //     color="rgba(56, 184, 245, 0.9)"
        //     size={24}
        //   />
        // </View>
        <Text>Next</Text>
      );
    };
  
    _renderDoneButton = () => {
      return (
        <View style={styles.buttonCircle}>
          <Icon name="md-checkmark" color="rgba(56, 184, 245, 0.9)" size={24} />
        </View>
      );
    };
  
    _renderSkipButton = () => {
      return (
        <Text>Skip</Text>
      );
    };

    render() {
      return (
        <AppIntroSlider
            keyExtractor={this._keyExtractor}
            renderSkipButton={this._renderSkipButton}
            renderDoneButton={this._renderDoneButton}
            renderNextButton={this._renderNextButton}
            renderItem={this._renderItem}
            showSkipButton
            showDoneButton
            data={slides}
          />
      );
    };
  }