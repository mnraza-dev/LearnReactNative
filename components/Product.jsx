import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const handleAddToCart = () => {
        alert("clicked")
    }

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
        const imageUrl = item.images && item.images.length > 0 ? item.images[0] : null;

        return (
            <View style={styles.itemContainer}>
                {imageUrl ? (
                    <Image
                        source={{ uri: imageUrl }}
                        style={styles.productImage}
                    />
                ) : (
                    <Text>No Image Available</Text>
                )}
                <Text style={styles.productName}>{item.title}</Text>
                <Text style={styles.productDesc}>{item.description}</Text>

                <View>
                    <TouchableOpacity onPress={handleAddToCart} style={styles.btn}>
                        <Text style={styles.btnText}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>

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
    btn: {
        marginVertical: 12,
        backgroundColor: 'orangered',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 12,

    },
    btnText: { textAlign: 'center', color: '#fff', fontSize: 16, fontWeight: 600 },
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    productDesc: {
        fontSize: 14,
        fontWeight: 400,
        marginBottom: 5,
    },
    productImage: {
        flex: 1,
        alignItems: 'center',
        width: " 100%",
        height: 200,
        resizeMode: 'contain',
    },
    cardItem: {
        marginHorizontal: 12,
        padding: 12,
        borderRadius: 12,
        border: 1,

    }
});

export default ProductList;
