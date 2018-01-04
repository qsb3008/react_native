import React, { Component } from 'react';
import MovieList from './app/components/movieList'
import { StyleSheet, Text, View } from 'react-native';
// 导航
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Text
    onPress={() => navigate('List')}>Hello, Navigation!!</Text>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  List: {screen: MovieList}
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}
