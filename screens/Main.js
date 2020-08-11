import React from 'react'
import {View, StyleSheet, Text, Image, ImageBackground, ActivityIndicator,
     FlatList, Dimensions, TextInput, TouchableOpacity} from 'react-native'
import ContactItem from '../components/ContryItem'
// import {Ionicons} from '@expo/vector-icons'

import {getCountries} from '../api/functions'

export default class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            countries:[],
            isLoading:false,
        }
    }

    _loader = () => {
        if(this.state.isLoading){
            return (
                <View>
                    <Text style={styles.iconTitle}>Loading</Text>
                    <ActivityIndicator size='small' color='white' />
                </View>

            )
        }
        return (
            <View>
                <Text style={styles.iconTitle}>Countries Not Found</Text>
                <Text style={styles.connexionText}>Check your connexion</Text>
            </View>
           
        )
    }


    //getData
    _getData = () => {
        
        if(!this.state.isLoading){
            this.setState({isLoading:true})
                // console.log(this.state.isLoading)
                getCountries()
                .then(data=>{
                
                this.setState({isLoading:false})
                //console.log(data)
                this.setState({countries:[...data.response]})
                console.log("djk")
                })
                .catch(error => {
                    this.setState({isLoading:false})
                    console.log(error)
                })
            
        
        }
        
    }

    //components mounted 
    componentDidMount(){
       this._getData()
        
   
    }


    _showData = () =>{
        if(this.state.countries.length){
            return (
                <FlatList
                data={this.state.countries}
                keyExtractor={(item)=>item.country}
                renderItem={({item}) => <ContactItem item={item}/>}

            />
            )
        }
        else{
            return (
                <View style={styles.nfContainer}>
                    <Image style={styles.icon} source={require('../assets/p.jpg')}/>
                 
                    {this._loader()}
                    <TouchableOpacity 
                        activeOpacity={.5} 
                        style={styles.tryButtonContainer}
                        onPress={this._getData}
                        >
                        <Text  style={[styles.tryText, ]}>Try</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }


    render(){
     
        return(
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                  
                </View>
                <View style={styles.body}>
                  {this._showData()}
                </View>
                <ImageBackground resizeMode='contain' source={require('../assets/hb.png')} style={styles.bloodImageContainer}>
                    <Text style={styles.bloodText}>Stay Safe</Text>
                </ImageBackground>
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    },
    infoContainer:{
        backgroundColor:'white',
        alignSelf:'center',
        justifyContent:'center',
        padding:50,
        elevation:20
    },
    icon:{
        height:200,
        width:200,
    },
    searchContainer:{
        flexDirection:'row',
        marginVertical:20,
        marginHorizontal:20
    },
    textInput:{
        backgroundColor:'white',
        flex:1,
        padding:10,
    },
    searchButtonContainer:{
        padding:10,
        paddingLeft:20,
        backgroundColor:'#3af',
        justifyContent:'center',
        alignItems:'center',
        borderTopRightRadius:6,
        borderBottomEndRadius:6,
    },
    body:{
        flex:1,
    },
    icon:{
        width:Dimensions.get("window").width/3,
        height:Dimensions.get("window").width/3,
    },
    nfContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    iconTitle:{
        color:'white',
        fontWeight:'bold',
        fontSize:15,
        textTransform:'uppercase',
        textAlign:'center'
    },
    connexionText:{
        color:'white',
        textAlign:'center',
    }
    ,
    bloodImageContainer:{
        width:Dimensions.get('window').width/2,
        height:Dimensions.get('window').width/2,
        justifyContent:'flex-end',
        alignItems:'center',
        position:'absolute',
        alignSelf:'flex-end',
      
    },
    bloodText:{
        color:'white',
        textTransform:'uppercase',
        fontWeight:'bold',
        fontSize:15
    },
    tryText:{
        color:'white'
    },
    tryButtonContainer:{
        backgroundColor:'red',
        padding:10,
        borderRadius:6,
        paddingHorizontal:20,
        margin:10
    }
})


//search component
/*
<TextInput style={styles.textInput} placeholder='Enter contry name'/>
<TouchableOpacity 
    activeOpacity={.5} 
    style={styles.searchButtonContainer}
    
    >
    <Ionicons  style={{fontWeight:'bold'}} name='ios-search' size={26} color='white'/>
</TouchableOpacity>
*/