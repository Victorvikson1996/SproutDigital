import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  Keyboard,
  Alert,
} from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS } from "../../../utils";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DefaultTextInput } from "../../Components/TextInput";
import { SignUpButton, LoginButton } from "../../Components/Buttons";
import Loader from "../../Components/Loader/Loader";

const LoginScreen = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({
    email: "",
    name: "",
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError("Please input email", "email");
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Please input a valid email", "email");
      isValid = false;
    }

    if (!inputs.name) {
      handleError("Please input name", "name");
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };
  const register = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        AsyncStorage.setItem("userData", JSON.stringify(inputs));
        navigation.navigate("PROFILE");
      } catch (error) {
        Alert.alert("Error", "Something went wrong");
      }
    }, 3000);
  };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Loader visible={loading} />
      <View style={styles.logocontaier}>
        <Image
          style={styles.logo}
          source={require("../../assets/Images/icon.png")}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Set Up Profile</Text>
      </View>
      <View style={{ marginVertical: 20, marginHorizontal: 40 }}>
        <DefaultTextInput
          onChangeText={(text) => handleOnchange(text, "name")}
          onFocus={() => handleError(null, "name")}
          placeholder="Name"
          error={errors.name}
        />
        <DefaultTextInput
          onChangeText={(text) => handleOnchange(text, "email")}
          onFocus={() => handleError(null, "email")}
          placeholder="Enter your email address"
          error={errors.email}
        />
        <View style={{ alignItems: "center", marginVertical: 20 }}>
          <LoginButton onPress={validate} title="Login" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  logo: {
    height: 150,
    width: 150,
  },
  logocontaier: {
    alignItems: "center",
    marginVertical: 50,
  },
  textContainer: {
    // marginHorizontal: 100,
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.sprout,
  },
});

export default LoginScreen;
