// modules
import React, { useState,useEffect } from 'react';
import { Image, View, TouchableHighlight, Text, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
// database
import ListTable from '../../../screens/chef/CommandChef/Tables/ListTable';
// components
import WhiteBackgroundScreen from '../../../components/WhiteBackgroundColor/WhiteBackgroundColor';
import CheckBox from '../../../components/CheckBox.js/CheckBox';
// styles
import styles from './styles';

const Tab = createMaterialTopTabNavigator();

const TableScreen = ({ data }) => {
    const [checkedItems, setCheckedItems] = useState({});

    const handleCheckBoxChange = (itemId) => {
        setCheckedItems((prevState) => ({
            ...prevState,
            [itemId]: !prevState[itemId],
        }));
    };

    return (
        <WhiteBackgroundScreen>
            <ScrollView>
                {data.map((item) => (
                    <View style={styles.containerList} key={item.id}>
                        <View style={styles.itemList}>
                            <Text>({item.quantity})</Text>
                            <Text style={styles.platList}>{item.title}</Text>
                        </View>

                        <View>
                            <CheckBox 
                                checked={checkedItems[item.id]}
                                onChange={() => handleCheckBoxChange(item.id)}
                            />
                        </View>
                    </View>
                ))}
            </ScrollView>
        </WhiteBackgroundScreen>
    );
};

// main function
const VerticalTabView = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const navigation = useNavigation();

    const handleTabPress = (index) => {
      setSelectedTab(index);
    };

    useEffect(() => {
        const routeName = `Table${selectedTab + 1}`;
        navigation.navigate(routeName);
    }, [navigation, selectedTab]);
  
    return (
        <View style={styles.container}>
            <View style={styles.tabList}>
                <ScrollView style={styles.tabBar}>
                    
                    {ListTable.map((table, index) => (
                        <TouchableHighlight
                            key={index}
                            onPress={() => handleTabPress(index)}
                            style={[
                                styles.tabButton,
                                selectedTab === index ? styles.tabButtonActive : null,
                            ]}
                        >
                            <Text style={selectedTab === index ? styles.tabTextActive : styles.tabText}>
                                {table.title}
                            </Text>
                        </TouchableHighlight>
                    ))}

                </ScrollView>
            </View>

            <View style ={styles.CommandeBar}>
                <View style={styles.CommandeView}>
                    <View style={styles.CommandeIcon}>
                        <Image source={require('../../../assets/images/Tables/Commandes.png')} />
                    </View>
                    <View>
                        <Text style={styles.CommandeTitle}>Commandes</Text>
                    </View>
                </View>
                                           
                <Tab.Navigator
                    screenOptions={{
                        tabBarStyle: { display: 'none' },
                        swipeEnabled: false,
                    }}

                    >
                    
                    {ListTable.map((table, index) => (
                        <Tab.Screen
                            key={index}
                            name={`Table${index + 1}`}
                        >
                            {() => <TableScreen data={table.data} />}
                        </Tab.Screen>
                    ))}
                    
                </Tab.Navigator>             
            </View>
        </View>
    );
  };
  
export default VerticalTabView;