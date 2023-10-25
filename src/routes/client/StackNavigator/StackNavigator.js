import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../../../screens/client/Welcome/Welcome';
import MenuCli from '../../../screens/client/MenuCli/MenuCli';
import CommandList from '../../../screens/client/CommandCli/CommandList/CommandList';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name='Welcome' component={Welcome} /> */}
        <Stack.Screen name='Menu' component={MenuCli} />
        <Stack.Screen name='Command' component={CommandList} />
      </Stack.Navigator>
    </NavigationContainer>
  );   
}

export default AppNavigator;