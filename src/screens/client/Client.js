import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./Welcome/Welcome";
import QRcode from "./QRcode/QRcode"
import MenuCli from "./MenuCli/MenuCli";
import CommandList from "./CommandCli/CommandList/CommandList";

const Stack = createStackNavigator();

const Client = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
                <Stack.Screen name="QR" component={QRcode} />
                {/* <Stack.Screen name="Menu" component={MenuCli} /> */}
                {/* <Stack.Screen name="Commandes" component={CommandList} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Client;