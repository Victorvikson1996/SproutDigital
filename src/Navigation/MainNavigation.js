import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, SignUpScreen } from "../Screens/Auth";
import { OnBoardScreen, ProfileScreen } from "../Screens";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Loader } from "../Components/Loader";

const Stack = createStackNavigator();

const MainNavigation = () => {
  const [initialRouteName, setInitialRouteName] = React.useState("");

  React.useEffect(() => {
    setTimeout(() => {
      authUser();
    }, 2000);
  }, []);

  const authUser = async () => {
    try {
      let userData = await AsyncStorage.getItem("userData");
      if (userData) {
        userData = JSON.parse(userData);
        if (userData.loggedIn) {
          setInitialRouteName("ONBOARD");
        } else {
          setInitialRouteName("LOGIN");
        }
      } else {
        setInitialRouteName("SIGNUP");
      }
    } catch (error) {
      setInitialRouteName("SIGNUP");
    }
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ONBOARD" component={OnBoardScreen} />
        <Stack.Screen name="LOGIN" component={LoginScreen} />
        <Stack.Screen name="SIGNUP" component={SignUpScreen} />
        <Stack.Screen name="PROFILE" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
