import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
  Alert,
} from "react-native";

import { FIELDS, INITIAL_VALUES } from "@/constants/fields";
import { authService } from "@/services/authService";
import { createSession } from "@/lib/session";
import FormItem from "@/components/FormItem";
import Button from "@/components/Button";
import useForm from "@/hooks/useForm";
import { AuthErrors } from "@/constants/errorsDefinitions";
import Spinner from "@/components/Spinner";

const Signup = () => {
  const { values, changeHandler } = useForm(INITIAL_VALUES);

  const [loading, setLoading] = useState(false);

  const isFormValid =
    values.firstName.value &&
    values.lastName.value &&
    values.email.value &&
    values.password &&
    !values.firstName.error &&
    !values.lastName.error &&
    !values.email.error &&
    !values.password.error &&
    !values.confirmPassword.error;

  const submitHandler = async () => {
    // Submit form logic goes here
    setLoading(true);
    if (!isFormValid) {
      Alert.alert("Please fill out all fields.", "", [
        {
          text: "Ok",
          style: "destructive",
        },
      ]);
      setLoading(false);
      return;
    }

    try {
      const res = await authService.signupWIthEmailAndPassword({
        email: values.email.value,
        password: values.password.value,
        displayName: `${values.firstName.value} ${values.lastName.value}`,
      });

      const sessionRes = await createSession(
        res?.data?.idToken,
        res?.data?.expiresIn,
        res?.data?.refreshToken
      );
      console.log(sessionRes);

      if (sessionRes.success) {
        // redirect
      }

      // console.log(sessionRes);
      setLoading(false);
    } catch (error: any) {
      const errorCode = error?.message?.response?.data?.error?.message;

      if (errorCode === AuthErrors.EMAIL_EXISTS) {
        Alert.alert(
          "Email already exists.",
          "Please use a different email address."
        );
        setLoading(false);
        return;
      }

      const errorNotFound = error?.message?.response?.status;
      if (errorNotFound === AuthErrors.NOT_FOUND) {
        Alert.alert(
          "Unexpected error occured.",
          "The page you're trying to reach isn't here."
        );
        setLoading(false);
        return;
      }

      Alert.alert(
        "Unexpected error occurred.",
        "Something went wrong. Our team is working on fixing it."
      );

      setLoading(false);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      className="flex  flex-1  items-center mt-16 justify-center"
      keyboardVerticalOffset={Platform.OS === "ios" ? 140 : 150}
    >
      <View className=" w-[70%]">
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
      <View className="w-[90%] mt-8">
        {!isFormValid && (
          <Text className="text-[#ff0000] text-xs text-center mb-2">
            All fields are required. Please fill them out.
          </Text>
        )}
        <Button label="Sign up" onPress={submitHandler} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signup;
