import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/action';


const Product = ({ item }) => {

    const imageUrl = item.images && item.images.length > 0 ? item.images[0] : null;
    const dispatch = useDispatch();


    const handleAddToCart = (item) => {

        dispatch(addToCart(item))

    }
    return (
        <View>
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
                <TouchableOpacity onPress={handleAddToCart(item)} style={styles.btn}>
                    <Text style={styles.btnText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    btn: {
        marginVertical: 12,
        backgroundColor: 'orangered',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 12,

    },
    btnText: { textAlign: 'center', color: '#fff', fontSize: 16, fontWeight: 600 },
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
})