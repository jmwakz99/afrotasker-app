import React, { FC } from "react";
import { KeyboardTypeOptions, Text, TextInput, View } from "react-native";

type Props = {
  label: string;
  type?: string;
  value?: string;
  onChangeText?: (text: string) => void;
};

const FormItem: FC<Props> = ({
  label,
  type = "default",
  value,
  onChangeText,
}) => {
  return (
    <View className="w-fit gap-1 ">
      <Text className="text-md text-white">{label}</Text>
      <TextInput
        className="w-full border-2 border-gray-300 text-md text-grey rounded-lg  p-2 min-w-[90%] focus:border-white bg-white ring-0 outline-none"
        selectionColor="black"
        autoComplete="off"
        keyboardType={type as KeyboardTypeOptions}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default FormItem;
