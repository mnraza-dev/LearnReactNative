import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Calculator from './components/Calculator'

import ExampleModal from './components/ExampleModal'

const App = () => {
  return (
    <View>
      <StatusBar backgroundColor="green" barStyle='default'  />
      {/* <Header /> */}
      {/* <ProductList /> */}

      
      {/* <Calculator/> */}
      <ExampleModal/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})