import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

import Main from './Main.js'
import Login from './Login.js'
import SignUp from './SignUp.js'
import Sibi from './Sibi.js'
import Wallet from './Wallet.js'
import HurufSibi from './HurufSibi.js'
import AngkaSibi from './AngkaSibi.js'

const RootStack = createStackNavigator({
Main: {
  screen: Main
},
Login: {
  screen: Login
},
SignUp: {
  screen: SignUp
},
Sibi: {
  screen: Sibi
},
HurufSibi: {
  screen: HurufSibi
},
AngkaSibi: {
  screen: AngkaSibi
},
Wallet: {
  screen: Wallet
}
});

const App = createAppContainer(RootStack);

export default App;