import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import Filter from "../assets/Images/Generation.png";

export default function FilterButton({ onPress }) {
  return (
    <View style={{ alignItems: "flex-end", marginBottom: 10 }}>
      <TouchableOpacity onPress={onPress}>
        <Image source={Filter} />
      </TouchableOpacity>
    </View>
  );
}
