import React from "react";
import { ActivityIndicator, View } from "react-native";

const Spinner = () => {
  return (
    <View className="flex flex-1 justify-center items-center">
      <ActivityIndicator size="large" color="#ff0000" />
    </View>
  );
};

export default Spinner;
