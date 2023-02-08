import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, SignUpScreen } from "../Screens/Auth";
import { OnBoardScreen, ProfileScreen } from "../Screens";

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LOGIN" component={LoginScreen} />
        <Stack.Screen name="SIGNUP" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
