import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import QRCodeScanner from './components/QRCodeScanner';
import FormScreen from './components/FormScreen';
import ChatListScreen from './components/ChatListScreen';
import ChatDetailScreen from './components/ChatDetailScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="QRCodeScanner">
        <Stack.Screen name="QRCodeScanner" component={QRCodeScanner} />
        <Stack.Screen name="FormScreen" component={FormScreen} />
        <Stack.Screen name="ChatListScreen" component={ChatListScreen} />
        <Stack.Screen name="ChatDetailScreen" component={ChatDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
