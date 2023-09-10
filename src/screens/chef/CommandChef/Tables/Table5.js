// modules
import React from "react";
import { Text, View, StyleSheet, Image } from 'react-native';
// components
import CheckBox from "../../../../components/CheckBox.js/CheckBox";

const List = (props) =>{
    return (
        <View style={styles.containerList}>
            <View style={styles.itemList}>
                <Text>({props.number})</Text>
                <Text style={styles.platList}>{props.plat}</Text>
            </View>
            
            <View>
                <CheckBox />
            </View>

        </View>
    )
}

// main function
const Table5 = () => {
    return (
        <View>
            <View>
                <View style={styles.CommandeView}>
                    <View style={styles.CommandeIcon}>
                        <Image source={require("../../../../assets/images/Tables/Table5/Commandes.png")} />
                    </View>
                    <View>
                        <Text style={styles.CommandeTitle}>Commandes</Text>
                    </View>
                </View>
                <List number={1} plat={'Glace au choco'}/>
                <List number={2} plat={'Pizza Royale'}/>
                <List number={1} plat={'Gratin de crevettes'}/>
            </View>
        </View>
    );
}

styles = StyleSheet.create({
    /*-----------List-----------*/
    containerList : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginVertical : 5,
        marginHorizontal : 30
    },

    itemList : {
        flexDirection : 'row',
    },

    platList : {
        marginHorizontal :10,
    },

    /*-----------Table5-----------*/
    CommandeView : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        borderBottomColor : "#D9D9D9",
        borderBottomWidth : 0.5,
        borderStyle : "solid",
        paddingBottom : 10,
        marginHorizontal : 50,
        marginVertical : 10
    },

    CommandeIcon : {
        marginHorizontal : 10,
    },

    CommandeTitle : {
        fontSize : 18,
    },
});

export default Table5;