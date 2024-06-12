import {View, TextInput, StyleSheet } from 'react-native'
import React from 'react';

const SearchBar = ({ searchText, onChangeText }) => {
    return (
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Exemple: 'Montpellier'"
          placeholderTextColor="grey"
          value={searchText}
          onChangeText={onChangeText}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    searchBarContainer: {
      marginLeft: 15,
      marginRight: 50, //les bords
    },
    searchBar: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      
      paddingHorizontal: 10,
    },
  });
  
  export default SearchBar;