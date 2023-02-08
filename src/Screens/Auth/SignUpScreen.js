import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  Keyboard,
} from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS } from "../../../utils";
import { StatusBar } from "expo-status-bar";

const SignUpScreen = ({ navigation }) => {
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
      handleError("Please input fullname", "fullname");
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };
  const register = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.logocontaier}>
        <Image
          style={styles.logo}
          source={require("../../assets/Images/icon.png")}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Set Up Profile</Text>
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

export default SignUpScreen;
