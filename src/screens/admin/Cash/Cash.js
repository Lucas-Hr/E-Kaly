import { Image, StyleSheet, Text, View} from 'react-native';
  
const Cash = () => {
    return (
        <View style={styles.container}>
            {/* //-----------------------------TOP----------------------------------------------- */}
            <View style={styles.top}>
                <Image
                    style={styles.icon}
                    source={require('../../../assets/images/AddFood/carre.png')}
                >            
                </Image>

                <Text style={styles.ekaly}> E-KALY </Text>

                <Image
                    style={styles.icon}
                    source={require('../../../assets/images/AddFood/chapeau.png')}
                >
                </Image>
            </View>

            {/* //---------------------------Case Caisse --------------------------------------------- */}
            <View style={styles.case}>
                <Text style={styles.text_caisse}>Caisse</Text>
                <Image
                    style={styles.icon}
                    source={require('../../../assets/images/AddFood/logo.png')}
                >
                </Image>
            </View>
        </View>
    );
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
    text_caisse:{
        fontSize: 16,
        fontWeight: '600',
        color:"white",
    },
})

export default Cash;