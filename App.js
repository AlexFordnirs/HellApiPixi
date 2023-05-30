import React, {Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList,ActivityIndicator} from 'react-native';
import { SearchBar } from 'react-native-elements';
import TabScreen from './TabScreen';

export default class App extends Component {



  render() {
    return (
      <View style={{flex: 1, padding: 24}}>
        <TabScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
});

