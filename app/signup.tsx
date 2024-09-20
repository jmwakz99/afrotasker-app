import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import FormItem from "@/components/FormItem";
import { FIELDS } from "@/constants/fields";
import Button from "@/components/Button";

const Signup = () => {
  return (
    <SafeAreaView className=" flex-1  items-center mt-16">
      <View className="  w-[70%]">
        <Text className="text-2xl text-center text-secondary font-bold">
          Sign Up
        </Text>
        <Text className="text-2xl text-center text-secondary font-bold">
          to get started with and more.
        </Text>
      </View>
      <View className="  items-center gap-4  w-[95%] mt-2 ">
        {FIELDS.map((field, index) => (
          <View key={field.label}>
            <FormItem key={index} label={field.label} type={field.type} />
          </View>
        ))}
      </View>
      <View className="w-[90%] mt-16">
        <Button label="Sign up" />
      </View>
    </SafeAreaView>
  );
};

export default Signup;
