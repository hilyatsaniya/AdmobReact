import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, Alert } from 'react-native';

import DisplayModal from './DisplayModal'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

const Row = (props) => (
  <View style={styles.container}>onPress = { () => this.triggerModal() }
    <Image source={{ uri: props.picture.large}} style={styles.photo} /><Text style={styles.text}>
      {`${props.name}`}
    </Text></View>
);

export default Row;
