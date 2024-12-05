import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './components/Header'
import Product from './components/Product'

const App = () => {
  return (
    <View>
      <Header />

      <Product />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})