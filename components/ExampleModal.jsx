import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ExampleModal = () => {
  return (
    <View>
      <Text>ExampleModal</Text>

      <Modal transparent="true">
        <View>
          <Text style={{
            textAlign: 'justify',
            fontSize: 24
          }}>Hi There welcome to React Native Course</Text>

        </View>
      </Modal>
    </View>
  )
}

export default ExampleModal

const styles = StyleSheet.create({})