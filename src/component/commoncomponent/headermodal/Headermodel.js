import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../../assets/css/headermodelcss/Headermodelcss'

export default function Headermodel() {
  return (
    <View style={styles.maincontainer}>
        <View style={styles.secondcontainer}>
      <Text style={styles.modeltext}>About Us</Text>
        </View>
    </View>
  )
}