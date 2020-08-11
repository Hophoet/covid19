import React from 'react'
import {View, StyleSheet, Text, Image, Button, TouchableOpacity, Dimensions} from 'react-native'
//import {Ionicons, MaterialIcons} from '@expo/vector-icons'
import Icon from "react-native-vector-icons/Ionicons";

export default class CountryDetail extends React.Component{
    
    _renderNewCase = (number) =>  {
        if(number > 0){
            return (
                <View style={styles.newCaseContainer}>
                    <Text style={styles.newCaseNumber}>+ {number}</Text>
                    <Text style={styles.newCase}>new</Text>
                </View>
            )
        }
        }
    
    render(){
        const item = this.props.item
        const actives = (parseInt(item.cases.new)>0 )?parseInt(item.cases.total) - parseInt(item.cases.new):parseInt(item.cases.total)
        const deaths = (parseInt(item.deaths.new)>0 )?parseInt(item.deaths.total) - parseInt(item.deaths.new):parseInt(item.deaths.total)
        const activesNew = parseInt(item.cases.new)
        const deathsNew = parseInt(item.deaths.new)
      
        return(
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.countryName}>{item.country}</Text>
                    <TouchableOpacity 
                        style={styles.closeButton}
                        activeOpacity={.5}
                        onPress={this.props.toggleModal}
                        >
                        <Text style={styles.closeText}>X</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <View style={styles.infosContainer}>
                        <View style={styles.keysContainer}>
                            <Text style={styles.title}>Day</Text>
                            <Text style={styles.title}>Total</Text>
                            <Text style={styles.title}>Active{(item.cases.active > 1)?'s':null}</Text>
                            <Text style={[styles.title]}>Recovered{(item.cases.recovered > 1)?'s':null}</Text>
                            <Text style={[styles.title]}>Death{(item.cases.deaths > 1)?'s':null}</Text>
                        </View>
                        <View style={styles.valuesContainer}>
                            <Text style={styles.key}>{item.day}</Text>
                            <View style={styles.inline}>
                                <Text style={styles.key}>{item.cases.total}  </Text>
                                
                            </View>
                            
                                
                          
                            <Text style={styles.key}>{item.cases.active}</Text>
                            <Text style={styles.key}>{item.cases.recovered}</Text>
                        
                            <View style={styles.inline}>
                                <Text style={styles.key}>{item.deaths.total}  </Text>
                             
                            </View>
                        </View>
                    </View>
                </View>
                
                
               
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:'100%',
        height:Dimensions.get('window').width/2,
        top:Dimensions.get('window').height - Dimensions.get('window').width/2,
        borderTopEndRadius:10,
        borderTopStartRadius:10
        
    },
    closeButton:{
        alignSelf:'flex-end',
        padding:10,
        borderTopEndRadius:10,
        borderBottomStartRadius:10,
        width:90,
        justifyContent:'center',
        alignItems:'center'
    },
    headerContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    countryName:{
        fontSize:25,
        marginLeft:10,
        color:'black',
        fontWeight:'bold',

    },
    infosContainer:{
        flexDirection:'row',
        justifyContent:'space-around'
       
        
    },
    title:{
        fontSize:17,
        textAlign:'left',
        textTransform:'uppercase',
        fontWeight:'bold',
        color:'white'
       

    },
    key:{
        fontSize:17,
        fontWeight:'bold',
        color:'white'
        
    },
    body:{
        flex:1,
        backgroundColor:'black',
        borderRadius:10,
     
        marginHorizontal:10
        
        
    },
    newCase:{
        color:'black',
        textTransform:'uppercase',
        fontWeight:'bold'
    },
    newCaseNumber:{
        color:'red',
        fontWeight:'bold',
        margin:2
    },
    newCaseContainer:{
        flexDirection:'row',
        backgroundColor:'white',
        paddingHorizontal:5,
        borderRadius:6,
        justifyContent:'center',
        alignItems:'center',
        
    },
    inline:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    closeText:{
        fontWeight:'bold',
        fontSize:20
    }
})