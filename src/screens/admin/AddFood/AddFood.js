import React, { useRef } from 'react';
import { Alert, Animated, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native' ;

const AddFood = () => {
    const rotationAnim = useRef(new Animated.Value(0)).current;
    const handleTextInputFocus = () => {
        Animated.timing(rotationAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    const handleTextInputBlur = () => {
        Animated.timing(rotationAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    const rotateInterpolation = rotationAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "80deg"], 
    });
    
    return (<>
        <View style={styles.container}>
            
            {/* //-----------------------------TOP----------------------------------------------- */}
            <View style={styles.top}>
                <Image
                    style={styles.icon}
                    source={require('../../../assets/images/AddFood/carre.png')}
                >
                    
                </Image>
                <Text 
                    style={styles.ekaly}
                >
                    E-KALY
                </Text>
                <Image
                    style={styles.icon}
                    source={require('../../../assets/images/AddFood/chapeau.png')}
                >

                </Image>
            </View>

            {/* //---------------------------Case ajout --------------------------------------------- */}
            <View style={styles.case}>
                <Text style={styles.text_ajout}>+</Text>
                <Text style={styles.text_ajout}>Ajout de plat</Text>
                <Image
                    style={styles.icon}
                    source={require('../../../assets/images/AddFood/logo.png')}
                >

                </Image>
            </View>

            {/* //----------------------------Appareil----------------------------------------------- */}
            <View style={styles.view_appareil}>
                <Image
                    style={styles.appareil}
                    source={require("../../../assets/images/AddFood/appareil.png")}
                >
                </Image>
            </View>

            <View  style={styles.btn_photo}>
                <TouchableOpacity
                    style={styles.photo}
                >
                    <Text  style={{color:"white"}}>Prendre une photo</Text>
                </TouchableOpacity>
            </View>

            {/* //----------------------------les Inputs -------------------------------------------- */}
            <View style={styles.case_input}>
                <View style={styles.view_input}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Nom"
                        placeholderTextColor="#999999"
                        // {()=>Alert.alert(rotateInterpolation.toString())}
                        onFocus={handleTextInputFocus}
                        onBlur={handleTextInputBlur}
                    />
                    <Animated.Image
                        style={[styles.icon_input, { transform:  [{rotate: rotateInterpolation}] }]}
                        source={require('../../../assets/images/AddFood/vector.png')}
                    />
                </View>
                <View style={styles.view_input}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Prix"
                        placeholderTextColor="#999999"
                    />
                    <Animated.Image
                        style={[styles.icon_input, { transform:  [{rotate: rotateInterpolation}] }]}
                        source={require('../../../assets/images/AddFood/prix.png')}
                    />
                </View>
                <View style={styles.view_input}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Catégorie"
                        placeholderTextColor="#999999"
                    />
                    <Image
                        style={styles.icon_input}
                        source={require('../../../assets/images/AddFood/category.png')}
                    />
                </View>
                <View style={styles.view_input}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Ingrédients"
                        placeholderTextColor="#999999"
                    />
                    <Image
                        style={styles.icon_input}
                        source={require('../../../assets/images/AddFood/ingredient.png')}
                    />
                </View>
            </View>

            {/* //---------------------------------------les bouttons ------------------------------- */}
            <View style={styles.btn_view}>
                <TouchableOpacity
                    style={styles.btn_confirmer}
                >
                    <Text style={{color:"white"}}>Confirmer</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn_annuler}
                >
                    <Text  style={{color:"#420611"}}>Annuler</Text>
                </TouchableOpacity>
            </View>
          
        </View>
        <View style={styles.foot}>
                <TouchableOpacity style={styles.nav}>
                    <Image
                        style={styles.icon}
                        source={require('../../../assets/images/AddFood/commande.png')}
                    ></Image>
                    <Text style={{color:"black"}}>Commandes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nav}>
                    <Image
                        style={styles.icon}
                        source={require('../../../assets/images/AddFood/serveur.png')}
                    ></Image>
                    <Text style={{color:"black"}}>Serveurs</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nav}>
                    <Image
                        style={styles.icon}
                        source={require('../../../assets/images/AddFood/menu.png')}
                    ></Image>
                    <Text style={{color:"#A40E2A"}}>Menu E-Kaly</Text>
                </TouchableOpacity>
        </View>
    </>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,
    },
    top:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20,
    },
    icon:{
        width: 25,
        height: 25,
    },
    ekaly: {
        color: "black",
        fontSize: 20 ,
        fontWeight: '600',
    },
    case:{
        flexDirection:"row",
        backgroundColor: "#A40E2A",
        justifyContent:"space-around",
        alignItems: "center",
        height: 66,
        borderRadius: 10,
    },
    text_ajout:{
        fontSize: 16,
        fontWeight: '600',
        color:"white",
    },
    appareil:{
        width: 80,
        height: 80,
    },
    view_appareil:{
        flexDirection:"row",
        justifyContent: "center",
        top: 10,
    },
    btn_photo:{
        top: 15,
        height: 50,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    photo:{
        borderRadius: 10,
        backgroundColor: "#A40E2A",
        height: 35,
        width: 169,
        alignItems: 'center',
        padding: 5,
        justifyContent:"center",
    },
    case_input:{
        top: 20,
    },
    textInput:{
        top: 7,
        color:"black",
        // backgroundColor:"green",
        width: "95%",
    },
    view_input:{
        borderBottomWidth: 1,
        borderBottomColor: '#A40E2A',
        fontSize: 16,
        color: 'black',
        height: 40,
        marginVertical: 15,
        flexDirection: "row",
        justifyContent:"space-between",
        paddingHorizontal: 0,
    },
    icon_input:{
        top: 7,
        right: 5,
        width: 20,
        height: 20,
    },
    btn_view:{
        top: 30,
        height: 95,
        alignItems:"center",
        justifyContent:"space-between",
    },
    btn_confirmer:{
        alignItems: 'center',
        backgroundColor: '#420611',
        padding: 10,
        width: 150,
        borderRadius: 50,
    },
    btn_annuler:{
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        width: 150,
        borderRadius: 50,
        borderColor:"#420611",
        elevation: 4,
        shadowColor: '#000000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 4,
    },
    foot:{
        height: 60,
        padding: 10,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"white",
        borderTopWidth: 2,
        borderTopColor: "#DBDBDB",
    },
    nav:{
        alignItems:"center",
    }
})

export default AddFood ;