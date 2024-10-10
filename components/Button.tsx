import { FC } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { cn } from "@/lib/utils";

type Props = {
  label: string;
  additionalStyles?: string;
  variant?: "solid" | "outline";
  onPress?: () => void;
};

const Button: FC<Props> = ({
  label,
  additionalStyles,
  variant = "solid",
  onPress,
}) => {
  return (
    <View
      className={cn(
        "bg-[transparent] px-8 py-4 rounded-full w-full",
        {
          "bg-secondary overflow-hidden": variant === "solid",
          "bg-transparent border border border-brand ": variant === "outline",
        },
        additionalStyles
      )}
    >
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        android_ripple={{ color: "grey", borderless: true }}
      >
        <Text
          className={cn("text-center text-lg font-[RalewaySemiBold] ", {
            "text-black": variant === "solid",
            "text-brand": variant === "outline",
          })}
          onPress={onPress}
        >
          {label}
        </Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.2,
  },
});
