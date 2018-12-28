import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

export default class SibiHuruf extends React.Component{
    render() {
        return(
            <View >
                <Button
                // onPress={onPressLearnMore}
                title="Angka"
                color="#841584"
                onPress={() =>
                    this.props.navigation.navigate('AngkaSibi')
                  }
                // accessibilityLabel="Learn more about this purple button"
                />
    
                <Button
                // onPress={onPressLearnMore}
                title="Huruf"
                color="#42eef4"
                onPress={() =>
                    this.props.navigation.navigate('HurufSibi')
                  }
                // accessibilityLabel="Learn more about this purple button"
                />

                <Button
                // onPress={onPressLearnMore}
                title="Games"
                color="#841584"
                // accessibilityLabel="Learn more about this purple button"
                />
    
            </View> 
        )
    }
}
const style = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

