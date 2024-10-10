import React, { FC } from "react";
import { KeyboardTypeOptions, Text, TextInput, View } from "react-native";

type Props = {
  label: string;
  type?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  name?: string;
  required?: boolean;
  error?: string;
};

const FormItem: FC<Props> = ({
  label,
  type = "default",
  value,
  onChangeText,
  required = false,
  error,
}) => {
  return (
    <View className="w-fit gap-1 ">
      <View className="flex flex-row">
        <Text className="text-md text-white">{label}</Text>
        {required && <Text className="text-[#ff0000] pl-[1px]">*</Text>}
      </View>
      <TextInput
        className="w-full border-2 border-gray-300 text-md text-grey rounded-lg  p-2 min-w-[90%] focus:border-white bg-white ring-0 outline-none"
        selectionColor="black"
        autoComplete="off"
        keyboardType={type as KeyboardTypeOptions}
        value={value}
        onChangeText={onChangeText}
      />
      {error && <Text className="text-[#ff0000] text-xs">{error}</Text>}
    </View>
  );
};

export default FormItem;
