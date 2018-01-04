import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from '../Styles/Main';

class MovieList extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'List'
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Lee'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

export {MovieList as default};
