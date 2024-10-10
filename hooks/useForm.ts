import { useState } from "react";

const useForm = (initialValues?: any) => {
  const [values, setValues] = useState<{
    [key: string]: {
      value: string;
      error: string | null;
    };
  }>({ ...initialValues });

  const changeHandler = (field: string, value: string) => {
    let error = null;

    if (field === "firstName" && !value.trim()) {
      error = "First Name is required";
    }

    if (field === "lastName" && !value.trim()) {
      error = "Last Name is required";
    }

    if (field === "email") {
      if (!value.trim()) {
        error = "Email is required";
      } else if (!/^\S+@\S+\.\S+$/i.test(value)) {
        error = "Invalid email address";
      }
    }

    if (field === "password") {
      if (!value.trim()) {
        error = "Password is required";
      } else if (value.length < 8) {
        error = "Password must be at least 8 characters long";
      } else if (!/[a-z]/.test(value)) {
        error = "Password must contain at least one lowercase letter";
      } else if (!/[A-Z]/.test(value)) {
        error = "Password must contain at least one uppercase letter";
      } else if (!/[0-9]/.test(value)) {
        error = "Password must contain at least one number";
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        error = "Password must contain at least one special character";
      }
    }

    if (field === "confirmPassword") {
      if (!value.trim()) {
        error = "Confirm Password is required";
      } else if (value !== values.password.value) {
        error = "Passwords do not match";
      }
    }

    setValues({
      ...values,
      [field]: {
        value,
        error,
      },
    });
  };

  return {
    values,
    changeHandler,
  };
};

export default useForm;
