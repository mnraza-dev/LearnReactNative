import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import Product from './Product';

const ProductList = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(response => {
                console.log('API Response:', response.data.products);
                setProducts(response.data.products);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const renderItem = ({ item }) => {
        console.log('Item:', item);

        return (
            <View style={styles.itemContainer}>
                <Product item={item} />

            </View>
        );
    };

    return (
        <FlatList style={styles.cardItem}
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },

    cardItem: {
        marginHorizontal: 12,
        padding: 12,
        borderRadius: 12,
        border: 1,

    }
});

export default ProductList;
