import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import { CountProvider } from './ContextAPI/CountProvider';
import HomeScreen from './Screens/HomeScreen';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Home: { username: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <CountProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CountProvider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
