import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Calculator from './components/Calculator'

const App = () => {
  return (
    <View>
      <StatusBar backgroundColor="green"/>
      {/* <Header /> */}
      {/* <ProductList /> */}

      
      <Calculator/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})