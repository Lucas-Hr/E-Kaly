// modules
import React, { useState,useEffect } from 'react';
import PagerView from 'react-native-pager-view';
import { View, TouchableHighlight, Text, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
// screens
import Table1 from '../../../screens/chef/CommandChef/Tables/Table1';
import Table3 from '../../../screens/chef/CommandChef/Tables/Table3';
import Table5 from '../../../screens/chef/CommandChef/Tables/Table5';
import Table7 from '../../../screens/chef/CommandChef/Tables/Table7';
// components
import WhiteBackgroundScreen from '../../../components/WhiteBackgroundColor/WhiteBackgroundColor';
// styles
import styles from './styles';

const Tab = createMaterialTopTabNavigator();

// main function
const VerticalTabView = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const navigation = useNavigation();
    const handleTabPress = (index) => {
      setSelectedTab(index);
    };
  
    const TabBarButton = ({ children, onPress, isFocused }) => (
        <TouchableHighlight
            activeOpacity={0.8}
            underlayColor= "#420611"
            onPress={onPress}
            style={[styles.tabButton, isFocused ? styles.tabButtonActive : null]}
        >
            <Text style={isFocused ? styles.tabTextActive : styles.tabText}>{children}</Text>
        </TouchableHighlight>
    );

    useEffect(() => {
        const routeName = `Table${selectedTab + 1}`;
        navigation.navigate(routeName);
    }, [navigation, selectedTab]);
  
  
    return (
        <View style={styles.container}>
            <View style={styles.tabList}>
                <ScrollView style={styles.tabBar}>
                    <TabBarButton onPress={() => handleTabPress(0)} isFocused={selectedTab === 0}>
                        Table 3
                    </TabBarButton>
                    <TabBarButton onPress={() => handleTabPress(1)} isFocused={selectedTab === 1}>
                        Table 5
                    </TabBarButton>
                    <TabBarButton onPress={() => handleTabPress(2)} isFocused={selectedTab === 2}>
                        Table 1
                    </TabBarButton>
                    <TabBarButton onPress={() => handleTabPress(3)} isFocused={selectedTab === 3}>
                        Table 7
                    </TabBarButton>
                </ScrollView>
            </View>

            
            <Tab.Navigator
                
                // tabBarOptions={{
                //     style: { display: 'none' },
                // }}
                // swipeEnabled={false}
                
                screenOptions={{
                    tabBarStyle: { display: 'none' },
                    swipeEnabled: false,
                }}
                >
                <Tab.Screen name="Table1">
                {() => (
                    <WhiteBackgroundScreen>
                    <Table3 />
                    </WhiteBackgroundScreen>
                )}
                </Tab.Screen>
                <Tab.Screen name="Table2">
                {() => (
                    <WhiteBackgroundScreen>
                    <Table5 />
                    </WhiteBackgroundScreen>
                )}
                </Tab.Screen>
                <Tab.Screen name="Table3">
                {() => (
                    <WhiteBackgroundScreen>
                    <Table1 />
                    </WhiteBackgroundScreen>
                )}
                </Tab.Screen>
                <Tab.Screen name="Table4">
                {() => (
                    <WhiteBackgroundScreen>
                    <Table7 />
                    </WhiteBackgroundScreen>
                )}
                </Tab.Screen>
            </Tab.Navigator>
           

            {/* <PagerView
                style={{ flex: 1 , display: 'none'}} // Ajoutez un style pour spécifier la taille du ViewPager
                initialPage={selectedTab} // Définissez la page initiale en fonction de selectedTab
                onPageSelected={(event) => setSelectedTab(event.nativeEvent.position)} // Mettez à jour selectedTab lorsqu'une page est sélectionnée
            >
                <View key="0">
                    <WhiteBackgroundScreen>
                        <Table3 />
                    </WhiteBackgroundScreen>
                </View>
                <View key="1">
                    <WhiteBackgroundScreen>
                        <Table5 />
                    </WhiteBackgroundScreen>
                </View>
                <View key="2">
                    <WhiteBackgroundScreen>
                        <Table1 />
                    </WhiteBackgroundScreen>
                </View>
                <View key="3">
                    <WhiteBackgroundScreen>
                        <Table7 />
                    </WhiteBackgroundScreen>
                </View>
            </PagerView> */}

        </View>
    );
  };
  
export default VerticalTabView;