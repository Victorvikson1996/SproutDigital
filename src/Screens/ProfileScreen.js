import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../utils";
import { StatusBar } from "expo-status-bar";
import { Header } from "../Components/Header";

const ProfileScreen = () => {
  const [userDetails, setUserDetails] = React.useState();
  React.useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const userData = await AsyncStorage.getItem("userData");
    if (userData) {
      setUserDetails(JSON.parse(userData));
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <View style={styles.profile}>
        <View style={styles.profileLogo}>
          <Text style={styles.s}>S</Text>
        </View>
        <View>
          <Text style={styles.name}>Sprout Digital</Text>
          <Text style={styles.mail}>info@sproutdigital.xyz</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  profile: {
    flexDirection: "row",
    marginHorizontal: 30,
  },
  profileLogo: {
    backgroundColor: COLORS.sprout,
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: "center",
    alignContent: "center",
  },
  s: {
    fontSize: 30,
    // backgroundColor: COLORS.sprout,
    // height: 40,
    // width: 70,
    textAlign: "center",

    color: COLORS.white,
  },
  name: {
    marginLeft: 10,
    fontSize: 17,
    fontWeight: "bold",
  },
  mail: {
    color: COLORS.grey,
    marginLeft: 10,
    marginVertical: 5,
  },
});

export default ProfileScreen;
