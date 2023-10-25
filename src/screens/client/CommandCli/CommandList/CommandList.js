import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ListClient from '../ListClient/ListClient';

const totalSum = (props) => {
    let {section} = props;
    let sum = 0;
    for (const category of section){
        for (const item of category.data)
            sum += item.price * item.quantity;
    }
    return sum;
}

const singleSum = (props) => {
    let {section} = props;
    let sum = 0;
    for (const category of section){
        if (category.title === "Mes Commandes"){
            for (const item of category.data)
                sum += item.price * item.quantity;
        }
    }
    return sum;
}

const CommandList = () => {
    const navigation = useNavigation();

    const sumEveryone = totalSum({section : ListClient});
    const sumOne = singleSum({section : ListClient});

    return (
        <View style={styles.container}>

            <StatusBar style='dark'/>

            <View style={styles.clientScreen}>
                <Image style={{borderRadius:2}} source={require('../../../../assets/images/Command/square.jpg')} />
                <Text style={styles.titleKaly}>E-Kaly</Text>
                <Image source={require('../../../../assets/images/Command/fork_knife.jpg')} />
            </View>

    
            <View style={styles.header}>
                <View>
                    <Text style={styles.headerBienv}>Bienvenue à</Text>
                    <Text style={styles.headerKaly}>E - K a l y</Text>
                </View>
                <View>
                    <Image style={styles.imgKaly}
                        source={require('../../../../assets/images/Command/food/cake.png')}
                        resizeMode='cover'
                    />
                </View>  
            </View>

            <View style={styles.body}>
                <View style={styles.chevronDown}>
                    <TouchableOpacity style={styles.listBtn} onPress={() => navigation.goBack()}>
                        <FontAwesome style={styles.listIcon} name='chevron-down' size={15}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.titleCommand}>
                    <Text style={styles.listCommand}>Liste des commandes</Text>
                    <View style={styles.underlineCommand}></View>
                </View>

                <View style={styles.containerCommand}>
                    <SectionList 
                        sections={ListClient}
                        renderSectionHeader={({section}) => (
                            <Text style={styles.souSection}>{section.title}</Text>
                        )}  
                        renderItem={({item, section})=>{
                            if (section.title == 'Nos Commandes'){
                                return (
                                    <View style={styles.iplatList2}>
                                        <View style={styles.platInfo}>
                                            <Text style={styles.platTitle2}>{item.title}</Text>
                                            <Text style={styles.platCost2}>{item.price.toString()}K MGA</Text>     
                                        </View>                                       
                                        <View style={styles.platControl}>
                                            <FontAwesome style={styles.plusminusIcon2} name='plus-square' />
                                            <Text style={styles.nbrPlat2}>{item.quantity.toString()}</Text>
                                            <FontAwesome style={styles.plusminusIcon2} name='minus-square' />
                                        </View>
                                        <View style={styles.btnClear}>
                                            <TouchableOpacity style={styles.containerClear} onPress={() => {}}>
                                                <FontAwesome style={styles.iconClear} name='times'/>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                            }
                            else if (section.title == 'Mes Commandes'){
                                return (
                                    <View style={styles.iplatList}>
                                        <View style={styles.platInfo}>
                                            <Text style={styles.platTitle}>{item.title}</Text>
                                            <Text style={styles.platCost}>{item.price.toString()}K MGA</Text>    
                                        </View>                                       
                                        <View style={styles.platControl}>
                                            <FontAwesome style={styles.plusminusIcon} name='plus-square' />
                                            <Text style={styles.nbrPlat}>{item.quantity.toString()}</Text>
                                            <FontAwesome style={styles.plusminusIcon} name='minus-square' />
                                        </View>
                                        <View style={styles.btnClear}>
                                            <TouchableOpacity style={styles.containerClear} onPress={() => {}}>
                                                <FontAwesome style={styles.iconClear} name='times'/>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                            }
                        }}     
                    />   
                </View>

                <View style={styles.validation}>
                    <TouchableOpacity style={styles.btnValid}>
                        <Text style={styles.btnText}>Valider</Text> 
                    </TouchableOpacity>
                </View>                  
            
                <View style={styles.footer}>
                    <View style={styles.footSome}>
                        <FontAwesome style={styles.styleSome} name='users' />
                        <Text style={styles.costSome}>{sumEveryone.toString()}K MGA</Text>    
                    </View>
                    <View  style={styles.footOne}>
                        <FontAwesome style={styles.styleOne} name='user' />
                        <Text style={styles.costOne}>{sumOne.toString()}K MGA</Text>
                    </View>
                </View> 
                
            </View>

        </View>
         
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
    },

    clientScreen:{
        marginTop: 40,
        marginLeft: 20,
        width: Dimensions.get('window').width - 20*2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleKaly: {
        fontSize: 24,
        fontWeight: 'bold',
    },

    header:{
        marginTop:10,
        marginLeft: 20,
        width: Dimensions.get('window').width - 20*2,width: Dimensions.get('window').width - 20*2,
        height: 100,
        borderTopRightRadius: 10,
        borderTopLeftRadius : 10,
        borderColor: 'gray',
        borderWidth: 0.5,
        backgroundcolor:'#FFFFFF',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-around',
    },
    headerBienv: {
        letterSpacing: 2,
        fontSize: 12,
    },
    headerKaly: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    imgKaly: {
        width: 80,
        height: 80,
    },

    body: {
        marginTop: -2,
        backgroundColor:'#A40E2A',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: Dimensions.get('window').height - 106,
    },

    chevronDown: {
        alignItems: 'center',
    },
    listBtn: {
        top: -18,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        borderWidth: 0.25,
        borderColor: '#CCC',
        backgroundColor: '#FFF',
    },
    listIcon: { 
        color: '#A40E2A',
    },

    titleCommand: {
        marginBottom: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listCommand: {
        top: -10,     
        fontSize:16,
        fontWeight:'bold',
        color: '#FFF',
    },
    underlineCommand: {
        top: -5,
        width: 80,
        height: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
    },
    
    containerCommand: {
        height: 380,
    },
    souSection:{
        marginTop: 10,
        marginBottom: 10,
        marginLeft:20,
        color:'white',
        fontSize: 13,
    },

    iplatList:{
        marginBottom: 10,
        marginLeft: 20,
        height: 60,
        width: Dimensions.get('window').width - 20*2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius:10,
        backgroundColor: '#FFF',
    },
    platInfo: {
        flex: 7,
        marginLeft: 20,
        justifyContent: 'center',
    },
    platTitle:{
        fontSize: 13,
        fontWeight:'bold',
    },
    platCost: {
        fontSize: 14,
    },
    platControl: {
        flex: 1,
        right: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    plusminusIcon: {
        paddingTop: 2,
        color: '#A40E2A',
        fontSize: 15,
    },
    nbrPlat: {
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 14,
    },
    btnClear: {
        top: -5,
        right: -5,
    },
    containerClear : {
        width: 22,
        height: 22,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 15,
        borderWidth: 0.25,
        borderColor: '#CCC',
    },
    iconClear: {
        color: '#A40E2A',
    },

    iplatList2:{
        marginBottom: 10,
        marginLeft: 20,
        height: 60,
        width: Dimensions.get('window').width - 20*2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        backgroundColor: '#420611',
    },
    platTitle2:{
        color: '#FFF',
        fontSize: 13,
        fontWeight: 'bold',
    },
    platCost2: {
        color: '#FFF',
        fontSize: 14,
    },
    plusminusIcon2: {
        paddingTop: 2,
        color: '#FFF',
        fontSize: 15,
    },
    nbrPlat2: {
        color: '#FFF',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 14,
    },
    
    validation: {
        alignItems: 'center',
    },
    btnValid:{
        marginTop: 30,
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        borderRadius: 10,
    },
    btnText:{
        fontSize: 13,
        color: '#A40E2A',
    },
   
    footer:{
        marginTop: 20,
        marginLeft: 20,
        width: Dimensions.get('window').width - 20*2,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footSome: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    styleSome: {
        paddingRight: 10,
        color: '#FFF',
        fontSize: 15,
    },
    costSome: {
        color: '#FFF',
        fontWeight:'bold',
    },
    footOne: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    styleOne: {
        paddingRight: 10,
        color: '#FFF',
        fontSize: 18,
    },
    costOne: {
        color: '#FFF',
    },
})

export default CommandList;