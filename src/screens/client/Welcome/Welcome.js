// import { useState } from "react";
import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import 'react-native-gesture-handler';
import CustomCheckBox from "../../../components/CheckBox.js/CheckBox";

const Welcome = ({ navigation }) => {
    const parti = "C'est Parti  >>";
    const handlePress = () => {
        // Navigate to the 'ListMenu' screen
        navigation.navigate('Menu');
    };

    const image = require('../../../assets/images/Welcome/img_1.png');

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image} />
                    <Text style={styles.bienvenue}> BIENVENUE </Text>
            </View>

            <View style={styles.middle}>
                <View style={styles.fle}>
                    <Image style={styles.fleche} source={require('../../../assets/images/Welcome/fleche.png')} />
                </View>

                <View>
                    <Text style={styles.instru}> INSTRUCTIONS </Text>
                    <Text style={styles.expli}>
                        E-Kaly est une application mobile qui vous permet de commander directement vos plats en vous montrant instantanément la carte du restaurant dans lequel vous vous trouvez. {'\n'}
                        Tout ce que vous avez à faire est de taper sur la nourriture indiquée sur le menu et le reste est pour les employés du restaurant. 
                    </Text>
                </View>
            </View>

            <View style={styles.foot}>
                <View style={styles.foot_1}>
                    <View>
                        <Image style={styles.rec} source={require('../../../assets/images/Welcome/rec_1.png')} />
                    </View>

                    <View>
                        <Image style={styles.rec} source={require('../../../assets/images/Welcome/rec_2.png')} />
                    </View>
                </View>

                <View style={styles.check}>
                    <CustomCheckBox/>
                    <Text style={styles.affich}>Ne plus afficher.</Text>
                </View>

                <View style={styles.btn_parti}>
                    <Pressable onPress={handlePress} style={{color:"black"}} > 
                        <Text style={styles.text}>{parti}</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    image: {
        flex: 1,
        justifyContent: "center",
        height: 220,
    },
    bienvenue: {
        textAlign: "center",
        color: "white",
        fontSize: 30,
        fontWeight: '700',
    },
    top: {
        height: 220,
        justifyContent: "center",
        // backgroundColor: "red"
    },
    fleche: {
        width: 30,
        height: 30,
        alignItems:"center",
        justifyContent: "center",
    },
    fle: {
        // backgroundColor:"blue",
        marginVertical: 5,
        alignItems:"center",
    },
    middle : {
        marginHorizontal: 20,
        height: 300,
        // backgroundColor: "blue"
    },
    instru:{
         color: "#6D071A",
         fontSize: 20,
         fontWeight: '800',
         marginBottom: 5,
    },
    expli:{
        textAlign:"left",
        fontSize: 16,
        lineHeight: 25,
        color:"black",
    },
    foot:{
        flex:1,
        marginHorizontal: 20,
        // backgroundColor:"red"
    },
    foot_1:{
        // flex: 1,
        flexDirection: "row",
        // backgroundColor: "green",
        justifyContent:"space-around",
    },
    rec:{
        width: 125,
        height: 150,
        borderRadius: 2,
    },
    checkbox: {
        color: "black",
      },
    affich: {
        left: 10,
        // top: 30,
        color: "black",
    },
    btn_parti: {
        width: 130,
        left: 200,
        top: 60,
    },
    text: {
        color: "#6D091C",
        fontWeight: '600',
        fontSize: 16,
        left: 25,
    },
    check:{
        top: 30,
        flexDirection: "row",
        // backgroundColor:"green"
    },
});

export default Welcome;