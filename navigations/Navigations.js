import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '../screens/Main'
import Splash from '../screens/Splash'

const SwitchNav = createSwitchNavigator({
    Main:{
      screen: Main,
     
    },
    Splash:{
      screen:Splash
    }
  }, {initialRouteName:'Splash'})
  
  export default createAppContainer(SwitchNav)