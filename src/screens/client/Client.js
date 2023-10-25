import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MenuCli from "./MenuCli/MenuCli";
import CommandList from "./CommandCli/CommandList/CommandList";
import Welcome from "./Welcome/Welcome";

const Stack = createStackNavigator();

const Client = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
                <Stack.Screen name="Menu" component={MenuCli} />
                <Stack.Screen name="Commandes" component={CommandList} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Client;