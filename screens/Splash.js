import React from 'react'
import {View, StyleSheet, Text, Image, Dimensions, Animated} from 'react-native'


export default class Splash extends React.Component{
    constructor(props){
        super()
        this.state = {
            springValue:new Animated.Value(1),
        }
    }

    _springAnimation = () => {
        Animated.spring(this.state.springValue, {
            toValue:1.3,
            friction:1,
            useNativeDriver: true,
        }).start()
    }

    componentDidMount(){
        this._springAnimation()
        setInterval(() => {
            this.props.navigation.navigate('Main')
        }, 3000
        )

    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <Animated.Image  style={
                        [styles.icon,
                        { transform:[{scale:this.state.springValue}]}]} 
                        source={require('../assets/p.jpg')} />

                    <Text style={styles.text}>Stay Safe</Text>
                    
                 
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'black'
    },
    infoContainer:{
      
        justifyContent:'center',
        alignItems:'center',

      
    },
    icon:{
        width:Dimensions.get("window").width/3.5,
        height:Dimensions.get("window").width/3.5,
        
        
    },
    text:{
        color:'white',
        margin:10,
        fontWeight:'bold',
        fontSize:15,
        textTransform:'uppercase'

    }
})