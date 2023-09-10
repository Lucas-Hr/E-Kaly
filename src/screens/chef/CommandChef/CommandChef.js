// modules
import React from "react";
import { ScrollView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// styles
import styles from "./styles"
// components
import Header from "../../../components/Header/Header";
// routes
import VerticalTabView from "../../../routes/chef/TabView/VerticalTabView";

const Stock = (props) => {
    return (
        <View style={styles.stockItem}>
            <View style={styles.stockNumber}>
                <Text style={styles.numberProps}>{props.number}</Text>
            </View>

            <View>
                <Text style={styles.nameProps}>{props.name}</Text>
            </View>
        </View>
    );
}

// main function
const CommandChef = () => {
    return (
        <View>
            <Header />
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false} 
                style={styles.StockCommand}>
                <Stock number='1' name='Pizza Royale'/>
                <Stock number='1' name='Gratin de Pâtes'/>
                <Stock number='1' name='Mine-sao Spéciale'/>
            </ScrollView>

            <View style={styles.NavigationCommand}>
                <NavigationContainer independent={true}>
                    <VerticalTabView />
                </NavigationContainer>
            </View>   
        </View>        
    );
}

export default CommandChef;