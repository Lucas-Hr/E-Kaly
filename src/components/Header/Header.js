// modules
import React from "react";
import { Image, Text, View } from 'react-native';
// styles
import styles from "./styles";

// main function
const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/* <View><Image source={require("../assets/icons/Menu.png")}/></View> */}
                <View><Text style={styles.title}>E-Kaly</Text></View>
                {/* <View><Image source={require("../assets/icons/Cuisinier.png")}/></View> */}
            </View>

            <View style={styles.bienvenue}>
                <View>
                    <Text style={styles.salutation}>Bonjour Chef</Text>
                </View>
            </View>
        </View>
    );
}

export default Header;