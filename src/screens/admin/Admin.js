import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Cash from "./Cash/Cash";
import MenuEkaly from "./MenuEkaly/MenuEkaly";
import AddFood from "./AddFood/AddFood";

const Stack = createStackNavigator();

const Admin = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Cash_register" component={Cash} />
                {/* <Stack.Screen name="Menu" component={MenuEkaly} /> */}
                {/* <Stack.Screen name="Adding" component={AddFood} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Admin;