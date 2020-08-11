import React from 'react'
import {View, StyleSheet, Text, Image, TouchableOpacity, Modal} from 'react-native'
//import modal view
import CountryDetail from './CountryDetail'

export default class ContryItem extends React.Component{
    state = {
        modalState:false,
    }
    toggleModal = () => {
        this.setState({modalState:!this.state.modalState})
    }

    render(){
        const item = this.props.item
        return(
            <View style={styles.container}>
                <Modal  onRequestClose={this.toggleModal} transparent={true} animationType='fade' visible={this.state.modalState}> 
                    <CountryDetail item={item} toggleModal={this.toggleModal}/>
                </Modal>
                <TouchableOpacity 
                    activeOpacity={.5} 
                    style={styles.iconContainer}
                    onPress={this.toggleModal}
                    >
                    <Image style={styles.icon} source={require('../assets/p.jpg')}/>

                </TouchableOpacity>
                <View style={styles.infoContainer}>
                    <Text style={styles.text}>{item.country}</Text>
                    <Text style={styles.deathText}>{item.cases.total}</Text>
                </View>
               
            </View>
        )
    }
}

{/* <Text style={[styles.text, styles.name]}>{this.props.item.name}</Text>
                    <View style={styles.numbersContainer}>
                        <View style={styles.number}>
                            <View style={styles.textBoxContainer}>
                                <Text style={styles.textBox}>Population</Text>
                            </View>
                         
                            <Text style={[styles.text]}>{item.population}</Text>
                        </View>
                        
                        <View style={styles.numberItem}>
                            <Text>Total</Text>
                            <Text style={[styles.text]}>{item.total}</Text>
                        </View>
                        <View style={styles.number}>
                            <Text>Case</Text>
                            <Text style={[styles.text]}>{item.case}</Text>
                        </View>
                        <View style={styles.number}>
                            <Text>Death</Text>
                            <Text style={[styles.text]}>{item.death}</Text>
                        </View>
                        <View style={styles.number}>
                            <Text>Fix</Text>
                            <Text style={[styles.text]}>{item.fix}</Text>
                        </View>
                    </View> */}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginVertical:10,
        flex:1
        
    },
    infoContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-start',
       
        padding:10
    }, 
    icon:{
        height:100,
        width:100,
        
    },
  
    text:{
        color:'white',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20
        
    },
    name:{
        fontSize:30,
       
    },
    numbersContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderRadius:20
        
    },
    numberItem:{
        justifyContent:'center',
        alignItems:'center',
    },
    textBoxContainer:{
        backgroundColor:'blue',
        padding:5,
        borderTopEndRadius:6,
        borderTopStartRadius:6
    },
    textBox:{
        color:'white'
    },
    deathText:{
        color:'red'
    }
})