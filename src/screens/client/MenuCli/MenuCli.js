import React, { useState } from 'react';
// import {useRef, useState} from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Colors from '../../../assets/colors/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MenuList from './MenuList/MenuList';
import SousMenu from './SousMenu/SousMenu';
import SECTIONS from './SECTIONS/SECTIONS';

const MenuCli = () => {
    const navigation = useNavigation();

    const [query, setQuery] = useState('');
    const [filteredMenu, setFilteredMenu] = useState(SECTIONS); // menu par défaut

    const rmSpecialCharacters = (str) => {
        // utilisation d'une expression régulière 
        // pour supprimer les caractères spéciaux au début et à la fin
        return str.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '');
    }

    const rmSpaces = (str) => {
        return str.replace(/\s/g, '');
    }

    const handleSearch = () => {
        // appeler l'API backend avec la requête de recherche (query)
        if (rmSpecialCharacters(query) === ''){
            // si la recherche est vide, revenir au menu par défaut
            setFilteredMenu(SECTIONS);
        }
        else{
            // effectuer la recherche dans le menu et filtrer les résultats
            const filtered = SECTIONS.map((category) => ({
                title: category.title,
                data: category.data.filter((item) =>
                    item.title.toLowerCase().includes(rmSpecialCharacters(query).toLowerCase()) ||
                    item.ingred.toLowerCase().includes(rmSpecialCharacters(query).toLowerCase()) ||
                    rmSpaces(item.cost.toLowerCase()).includes(rmSpecialCharacters(query).toLowerCase()) ||
                    item.cost.toLowerCase().includes(rmSpecialCharacters(query).toLowerCase()) ||
                    item.star.toLowerCase().includes(rmSpecialCharacters(query).toLowerCase())
                ),
            }));
            setFilteredMenu(filtered);
        }
    };

    return (
    <View style={styles.container}>

        <StatusBar style='dark' />

        <View style={styles.clientScreen}>
            <Image style={{borderRadius:2}} source={require('../../../assets/images/MenuCli/square.jpg')} />
            <Text style={styles.titleKaly}>E-Kaly</Text>
            <Image source={require('../../../assets/images/MenuCli/fork_knife.jpg')} />
        </View>

        <View style={styles.header}>
            <View>
                <Text style={styles.headerBienv}>Bienvenue à</Text>
                <Text style={styles.headerKaly}>E - K a l y</Text>
            </View>
            <View>
                <Image style={styles.imgKaly}
                    source={require('../../../assets/images/MenuCli/food/cake.png')}
                    resizeMode='cover'
                />
            </View>
        </View>

        <View style={styles.searchContainer}>
            <TextInput style={styles.searchInput} value={query} onChangeText={(text) => setQuery(text)} onSubmitEditing={handleSearch} placeholder='Rechercher' />
            <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
                <FontAwesome style={styles.searchIcon} name='search' />
            </TouchableOpacity>    
        </View>

        <MenuList section = {SECTIONS} />
        {/* mettre à jour filteredMenu avec les résultats de la recherche */}    
        <SousMenu section = {filteredMenu} /> 
        
        <View style={styles.footer}>
            <TouchableOpacity style={styles.listBtn} onPress={() => navigation.navigate('Commandes')}>
                <FontAwesome style={styles.listIcon} name='chevron-up' size={15}/>
            </TouchableOpacity>
            <Text style={styles.commandList}>Liste des commandes</Text>
        </View>

        </View>
  );   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    clientScreen: {
        marginTop: 40,
        marginLeft: 20,
        width: Dimensions.get('window').width - 20*2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleKaly: {
        fontSize: 24,
        fontWeight: 'bold',
    },

    header: {
        marginTop: 10,
        marginLeft: 20,
        width: Dimensions.get('window').width - 20*2,
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: Colors.primary,
        borderRadius: 10,
    },
    headerBienv: {
        color: Colors.white,
        letterSpacing: 2,
        fontSize: 12,
    },
    headerKaly: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: 22,
    },
    imgKaly: {
        width: 80,
        height: 80,
    },

    searchContainer: {
        marginTop: 10,
        marginLeft: 20,
        width: Dimensions.get('window').width - 20*2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 0.5,
        borderColor: Colors.gray,
        borderRadius: 20,
    },
    searchIcon: {
        marginRight: 20,
    },
    searchInput: {
        paddingTop: 5,
        paddingBottom: 5,
        marginLeft: 20,
        width: '80%',
        fontSize: 12,
        letterSpacing: 2,
    },

    // Styles Menu
    menuBar: {
        top: 250,
        marginLeft: 40,
        position: 'absolute',
        width: Dimensions.get('window').width - 40*2,
    },
    /*
    listBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    */
    itemBar: {
        color: Colors.black,
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    underlineBar: {
        width: 40,
        height: 4,
        backgroundColor: Colors.primary,
        bottom: -5,
        borderRadius: 2,
    },

    // Styles SousMenu
    containerList: {
        flex: 4,
        marginTop: 50,
        marginLeft: 20,
        width: Dimensions.get('window').width - 20*2,
    },
    iplatList: {
        height: 120,
        width: Dimensions.get('window').width - 20*2,
        flexDirection: 'row',
        borderWidth: 0.25,
        borderColor: Colors.gray,
        borderRadius: 10,
    },
    platImg: {
        margin: 10,
        width: 100,
        height: 100,
    },
    platInfo: {
        marginTop: 10,
    },
    platTitle: { 
        fontSize: 13,
        fontWeight: 'bold',
    },
    platIngred: {
        color: Colors.gray,
        fontSize: 12,
        fontStyle: 'italic',
    },
    platCost: {
        marginTop: 5,
        color: Colors.black,
        fontSize: 14,
        fontWeight: 'bold',
    },
    platFoot: {
        flexDirection: 'row',
        marginTop: 10,
        width: '62%',
        justifyContent: 'space-between',
    },
    platStar: {
        flexDirection: 'row',
    },
    starIcon: {
        paddingTop: 4,
        paddingRight: 10,
        color: Colors.primary,
        fontSize: 15,
    },
    platControl: {
        flexDirection: 'row',
    },
    plusminusIcon: {
        paddingTop: 5,
        color: Colors.primary,
        fontSize: 15,
    },
    nbrPlat: {
        paddingLeft: 10,
        paddingRight: 10,
    },

    footer: {
        marginBottom: 0,
        height: 60,
        alignItems: 'center',
        backgroundColor: Colors.primary,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    listBtn: {
        top: -18,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        borderWidth: 0.25,
        borderColor: Colors.gray,
        backgroundColor: Colors.white,
    },
    listIcon: {
        color: Colors.primary,
    },
    commandList: {
        top: -16,
        color: Colors.white,
        fontSize: 14,
    }
    });

export default MenuCli;