import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CommandChef from "./CommandChef/CommandChef";
import Waiters from "./Waiters/Waiters";

const Stack = createStackNavigator();

const Chef = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {/* <Stack.Screen name="Commandes" component={CommandChef} /> */}
                <Stack.Screen name="Serveurs" component={Waiters} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Chef;