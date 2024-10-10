import { KeyboardTypeOptions } from "react-native";

export type Field = {
  label: string;
  type?: KeyboardTypeOptions;
  name: string;
  value?: string;
  required?: boolean;
};
