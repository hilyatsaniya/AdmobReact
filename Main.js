// Main.js

import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native'

export default class Main extends React.Component {
  state = { currentUser: null }

render() {
    const { currentUser } = this.state

return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
        <Button
          title="SIBI"
          onPress={() =>
            this.props.navigation.navigate('Sibi')
          }
        />
        <Button
          title="BISINDO"
        />
        <Button
          title="WALLET"
          onPress={() =>
            this.props.navigation.navigate('Wallet')
          }
        />
        {/* <Button
          title="Add some friends"
          onPress={() =>
            this.props.navigation.navigate('Login')
          }
        /> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

// import {
//   createStackNavigator,
//   createAppContainer
// } from 'react-navigation';
// import React from 'react'
// import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

// import Main from './Main.js'
// import Login from './Login.js'
// import SignUp from './SignUp.js'
// import Sibi from './Sibi.js'
// import Wallet from './Wallet.js'

// const RootStack = createStackNavigator({
// Main: {
//   screen: Main
// },
// Login: {
//   screen: Login
// },
// SignUp: {
//   screen: SignUp
// },
// Sibi: {
//   screen: Sibi
// },
// Wallet: {
//   screen: Wallet
// }
// });

// const App = createAppContainer(RootStack);

// export default App;