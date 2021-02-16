import React from 'react';
import { SearchBar } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';
import Constant from 'expo-constants';

export default class Mainscreen extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View style={styles.container}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      /> 
      <Text style={styles.HighText}>
        Grow your Business With Dokaan Daari App
      </Text>
      <Text>
        Start Adding Customers and maintain your daily khaata whith them.
      </Text>
      <Text>
        this is as simpel as 1, 2, 3
      </Text>
      </View>
      
    );
  }
 
}
const styles = StyleSheet.create({
  HighText: {
    margin:30,
    fontSize: 40,
    marginTop:Constant.statusBarHeight,
    backgroundColor: '#fff',
  },
  MediumText:{
    margin:30,
    fontSize: 30,
    fontColor: 

  },
  container: {
    
    flex: 1,
    backgroundColor: '#fff',
    marginTop:Constant.statusBarHeight,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});