import { Field } from "@/types/field";

export const FIELDS: Field[] = [
  {
    label: "First Name",
    type: "default",
    name: "firstName",
    required: true,
  },
  {
    label: "Last Name",
    type: "default",
    name: "lastName",
    required: true,
  },
  {
    label: "Email",
    type: "email-address",
    name: "email",
    required: true,
  },
  // {
  //   label: "Phone Number",
  //   type: "phone-pad",
  // },
  {
    label: "Password",
    type: "default",
    name: "password",
    required: true,
  },
  {
    label: "Confirm Password",
    type: "default",
    name: "confirmPassword",
    required: true,
  },
];

export const INITIAL_VALUES = {
  firstName: { value: "", error: "" },
  lastName: { value: "", error: "" },
  email: { value: "", error: "" },
  password: { value: "", error: "" },
  confirmPassword: { value: "", error: "" },
};
