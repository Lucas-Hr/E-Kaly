import { Dimensions } from "react-native";

export default {
    /*--------VerticalTabView----------*/
    container: {
        flex: 1,
        flexDirection: 'row',
    },

    tabList : {
        height : 600,
    },

    tabBar: {
        backgroundColor : '#A40E2A',
        width : 120,
    },

    /*--------TabBarButton----------*/
    tabButton: {
        paddingVertical: 12,
        paddingHorizontal: 30,
    },

    tabButtonActive: {
        backgroundColor: '#420611',
    },

    tabText: {
        color: 'white',
        textAlign : 'center',
    },
    
    tabTextActive: {
        color: 'white',
        textAlign : 'center',
    },

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

    /*---------Style title Commandes-------- */
    CommandeBar : {
        width: Dimensions.get('window').width - 120,
    },

    CommandeView : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        borderBottomColor : "#D9D9D9",
        borderBottomWidth : 0.5,
        borderStyle : "solid",
        backgroundColor : '#fff',
        paddingTop : 10,
        paddingBottom : 10,
    },

    CommandeIcon : {
        marginHorizontal : 10,
    },

    CommandeTitle : {
        fontWeight : 'bold',
        fontSize : 16,
        color : '#000',
    },

};