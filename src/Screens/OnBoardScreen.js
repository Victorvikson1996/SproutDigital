import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import { COLORS } from "../../utils";
import { StatusBar } from "expo-status-bar";
import { SignUpButton, LoginButton } from "../Components/Buttons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const background = require("../assets/Images/background.png");

const OnBoardScreen = ({ navigation }) => {
  const Login = () => {
    navigation.navigate("LOGIN");
  };

  const SignUp = () => {
    navigation.navigate("SIGNUP");
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground style={styles.image} source={background}>
        <View style={styles.logocontaier}>
          <Image
            style={styles.logo}
            source={require("../assets/Images/icon.png")}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Welcome</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <SignUpButton onPress={SignUp} title="SignUp" />
          <LoginButton onPress={Login} title="Login" />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  logo: {
    height: 150,
    width: 150,
  },
  logocontaier: {
    alignItems: "center",
    marginVertical: 100,
  },
  textContainer: {
    // marginHorizontal: 100,
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    color: COLORS.sprout,
  },
});

export default OnBoardScreen;
