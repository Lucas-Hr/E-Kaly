import { StatusBar } from 'react-native';

export default {
    container : {
        marginHorizontal : 20,
    },

    header : {
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : 'center',
        marginVertical : 10,
        paddingTop : StatusBar.currentHeight,
        
    },

    title : {
        fontSize : 30,
    },

    bienvenue : {
        flexDirection : "row",
        justifyContent : "space-around",
        alignItems : 'center',
        backgroundColor : "#A40E2A",
        marginVertical : 10,
        borderRadius : 5,
        paddingHorizontal : 10,
        paddingVertical : 20, 
    },

    salutation : {
        fontSize : 20,
        fontWeight : 'normal',
        color : 'white',
    },
};