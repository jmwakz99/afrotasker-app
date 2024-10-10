import React from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Href, router } from "expo-router";

import { FIELDS, INITIAL_VALUES } from "@/constants/fields";
import FormItem from "@/components/FormItem";
import Button from "@/components/Button";
import useForm from "@/hooks/useForm";

const Signin = () => {
  const { values, changeHandler } = useForm(INITIAL_VALUES);

  const isFormValid =
    values.email.value &&
    values.password &&
    !values.email.error &&
    !values.password.error;

  const submitHandler = () => {
    // Submit form logic goes here
    if (!isFormValid) {
      Alert.alert("Please fill out all fields.", "", [
        {
          text: "Ok",
          style: "destructive", // This button will be styled as a destructive button
          onPress: () => console.log("Item deleted!"), // Action on pressing the destructive button
        },
      ]);
      return;
    }
    console.log("Form submitted successfully", values);
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      className=" flex-1  items-center mt-16 justify-center"
    >
      <View className="flex  w-[70%]">
        <Text className="text-2xl text-center text-secondary font-bold">
          Sign in
        </Text>
        <Text className="text-2xl text-center text-secondary font-bold">
          Welcome back!
        </Text>
      </View>
      <View className="  items-center justify-center gap-4  w-[95%] mt-2 ">
        {FIELDS.slice(2, 4).map((field, index) => (
          <View key={field.label}>
            <FormItem
              key={index}
              label={field.label}
              type={field.type}
              required={field.required}
              value={values[field.name].value}
              onChangeText={(text: string) => changeHandler(field.name, text)}
              error={values[field.name].error || ""}
            />
          </View>
        ))}
      </View>

      <View className="w-[90%] mt-16">
        {!isFormValid && (
          <Text className="text-[#ff0000] text-xs text-center mb-2">
            All fields are required. Please fill them out.
          </Text>
        )}
        <Button
          label="Sign up"
          disabled={!isFormValid}
          onPress={submitHandler}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signin;
