import React from 'react';
import {SafeAreaView, Text, FlatList, StyleSheet} from 'react-native';
import productData from './product-data.json';
import ProductCard from './components/ProductCard';

const App = () => {
  const renderItem = ({item}) => {
    return <ProductCard product={item} />;
  };

  const keyEx = item => item.id.toString();
  // render
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.headerText}>PATIKASTORE</Text>
      <FlatList
        data={productData}
        horizontal={false}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={keyEx}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 40,
    color: 'purple',
    fontWeight: 'bold',
  },
});

export default App;
