import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View , Image , Text} from "react-native";
import WhiteBackgroundScreen from "../../../../../jo/Makekaly/components/WhiteBackgroundColor";
import Commandes from "../../../../../jo/Makekaly/screens/Commandes";
import MenuEkaly from "../../../../../jo/Makekaly/screens/MenuEkaly";
import Serveurs from "../../../../../jo/Makekaly/screens/Serveurs";

const Tab = createBottomTabNavigator();

const Tabs = () => { 
    return (
        <Tab.Navigator  tabBarOptions={{showLabel : false}} screenOptions= {{headerShown : false}} >
            <Tab.Screen  name="Commandes"  component={ () => (
                <WhiteBackgroundScreen>
                    <Commandes />
                </WhiteBackgroundScreen>
            )} options={{
                tabBarIcon : ({focused}) => (
                    <View style={{
                        justifyContent : 'center',
                        alignItems : 'center',
                        }} >
                        <Image source={require('../assets/icons/List.png')} 
                            style={{
                                tintColor : focused ? '#A40E2A' : 'black',
                            }}>
                            
                        </Image>
                        <Text style={{
                                color : focused ? '#A40E2A' : 'black',
                            }}>Commandes</Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name="Serveurs" component={ () => (
                <WhiteBackgroundScreen>
                    <Serveurs />
                </WhiteBackgroundScreen>
            )} options={{
                tabBarIcon : ({focused}) => (
                    <View  style={{justifyContent : 'center',alignItems : 'center'}}>
                        <Image source={require('../assets/icons/Server.png')} style={{
                                tintColor : focused ? '#A40E2A' : 'black',
                            }}>
                            
                        </Image>
                        <Text style={{
                                color : focused ? '#A40E2A' : 'black',
                            }}>Serveurs</Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name="Menu E-kaly" component={ () => (
                <WhiteBackgroundScreen>
                    <MenuEkaly />
                </WhiteBackgroundScreen>
            )} options={{
                tabBarIcon : ({focused}) => (
                    <View  style={{justifyContent : 'center',alignItems : 'center'}}>
                        <Image source={require('../assets/icons/menu_e-kaly.png')} style={{
                                tintColor : focused ? '#A40E2A' : 'black',
                            }}>
                            
                        </Image>
                        <Text style={{
                                color : focused ? '#A40E2A' : 'black',
                            }}>Menu E-Kaly</Text>
                    </View>
                ),
            }}/>
        </Tab.Navigator>
    );
}

export default Tabs;


