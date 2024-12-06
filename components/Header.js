import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


const Header = () => {


  const cartData = useSelector((state) => state.reducer);
  const [cartItem, setCartItem] = useState(0)

  useEffect(() => {
    setCartItem(cartData.length)


  }, [cartData])



  return (
    <View style={styles.Header}>
      <Text style={styles.rightText}>{cartItem}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  Header: {
    backgroundColor: 'orange',
    height: 60,
    paddingVertical: 12,
    paddingHorizontal: 12,

  },
  rightText: {
    textAlign: 'right'
  }
})