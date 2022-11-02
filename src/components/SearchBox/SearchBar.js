import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './SearchBar.style';

const SearchBar = () => {
  // render
  return (
    <View>
      <TextInput style={styles.input} type="text" placeholder="Ara..." />
    </View>
  );
};

export default SearchBar;
