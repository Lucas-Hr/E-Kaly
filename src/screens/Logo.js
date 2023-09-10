import { Image, StyleSheet, View} from 'react-native';
  
const Logo = () => {
    return (
        <View style={styles.container}>
            <Image style = {styles.logo} source={require('../assets/images/Logo/logo.png')} />
            <Image style = {styles.ispm_logo} source={require('../assets/images/Logo/ispm.png')} />
        </View>
    );
}
   
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#B0203B",
        justifyContent: "center",
        alignItems:"center",
    },
    logo: {
        alignItems: "center",
        justifyContent: "center",
        width: 150,
        height: 120,
    },
    ispm_logo: {
        top: 275,
        width: 70,
        height: 70,
    },
})

export default Logo;