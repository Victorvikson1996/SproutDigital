import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "react-native-vector-icons";
import { COLORS } from "../../../utils";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.9}
        style={styles.iconCon}
      >
        <Ionicons name="chevron-back" size={26} color={COLORS.white} />
      </TouchableOpacity>
      <View style={styles.textCon}>
        <Text style={styles.text}>Your Profile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    // marginLeft: 10,
    flexDirection: "row",
  },
  text: {
    color: COLORS.sprout,
    fontSize: 25,
    textAlign: "center",
    marginLeft: 10,
    fontWeight: "bold",
  },
  textCon: {
    top: 10,
  },
  iconCon: {
    backgroundColor: COLORS.sprout,
    height: 30,
    width: 30,
    borderRadius: 15,
    marginLeft: 20,
    marginVertical: 10,
  },
});

export default Header;
