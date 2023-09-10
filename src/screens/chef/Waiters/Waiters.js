import React from 'react';
// import Header from "../components/Header";
import Header from '../../../components/Header/Header';
import { View , Text , Image , StyleSheet } from "react-native";


const List = (props) => {
    return (
        <View style={{flexDirection : 'row',justifyContent : 'space-between',marginHorizontal : 40,marginVertical : 5}}>
            <View style={{flexDirection : 'row'}}>
                <Image source={require('../../../assets/images/Waiters/avatar.png')} />
                <Text style={{marginLeft : 10}}>{props.Firstname}</Text>
                <Text style={{fontWeight : 'bold'}}> {props.name}</Text>
            </View>
            <View>
                {/* <View> */}
                    <Image source={require('../../../assets/images/Waiters/bell-on.png')} />
                {/* </View> */}
            </View>
        </View>
    )
}

const Waiters = () => {
    return (
        <View>
            <Header />
            <View style={styles.serverView}>
                <View style={{marginHorizontal : 10}}>
                    <Image source={require('../../../assets/images/Waiters/Gars.png')} />
                </View>

                <View>
                    <Text style={{fontSize : 18}}>Serveurs</Text>
                </View>              
            </View>
            <List Firstname="Rakoto"name="Jean-Pierre"/>
            <List Firstname="Razanajay"name="Jacky"/>
            <List Firstname="Rabary"name="Claude"/>
            <List Firstname="Rabary"name="Matt"/>
        </View>
        
    );
}

export default Waiters;

const styles = StyleSheet.create({
    serverView : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        borderBottomColor : "#D9D9D9",
        borderBottomWidth : 0.5,
        borderStyle : "solid",
        paddingBottom : 10,
        marginHorizontal : 80,
        marginVertical : 10
    },
})