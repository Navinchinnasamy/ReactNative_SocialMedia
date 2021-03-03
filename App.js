import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './src/components/MainScreen';
import WalkThroughScreen from './src/components/WalkThroughScreen';

export default class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          show_Main_App: false
      };
  }

  _onDone = () => {
    this.setState({ showRealApp: true });
  }

  render(){
    return (this.state.showRealApp) ?
        <MainScreen /> :
        <WalkThroughScreen onDone={() => this._onDone} />
    ;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
