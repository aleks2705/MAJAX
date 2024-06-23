import {View, TextInput, StyleSheet } from 'react-native'
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchBar = ({ searchText, onChangeText, onSubmitSearch  }) => {
    return (
      <View style={styles.searchBarContainer}>
        <Ionicons name="search" size={20} color="grey" style={styles.icon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Exemple: 'Montpellier'"
          placeholderTextColor="grey"
          value={searchText}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitSearch}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    searchBarContainer: {
      marginLeft: 15,
      marginRight: 50, //les bords
      flexDirection: 'row',
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      alignItems: 'center',
      height: 40,
      paddingHorizontal: 10,
    },
    searchBar: {
      marginLeft: 10,
    },
    icon: {
        marginRight: 5,
    },
  });
  
  export default SearchBar;