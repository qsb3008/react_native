import React, { Component } from 'react';
import MovieList from './app/components/movieList'
import { StyleSheet, Text, View, Image } from 'react-native';
// 导航
import { StackNavigator } from 'react-navigation';
import FadeInView from './app/components/FadeInView'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text
      onPress={() => navigate('List')}>Hello, Navigation!!</Text>
        <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
          <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
        </FadeInView>
        <Image source={require('./img/glzn.jpg')}/>
      </View>
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
