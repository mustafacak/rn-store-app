import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({product}) => {
  // render
  return (
    <View style={styles.container}>
      <Image source={{uri: product.imgURL}} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  );
};

export default ProductCard;
