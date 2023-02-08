import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { COLORS } from "../../../utils";

const SignUpButton = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={{
        height: 55,
        width: "50%",
        backgroundColor: COLORS.white,
        marginVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
      }}
    >
      <Text style={{ color: COLORS.sprout, fontWeight: "bold", fontSize: 18 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SignUpButton;
