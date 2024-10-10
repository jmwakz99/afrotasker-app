import { Endpoints } from "@/constants/endpoints";
import requestHandler from "@/lib/request";

const signupWIthEmailAndPassword = (payload: any) => {
  return requestHandler.post(
    `${process.env.EXPO_PUBLIC_AUTH_BASE_URL}:${Endpoints.SIGNUP_NEW_USER}?key=${process.env.EXPO_PUBLIC_FIREBASE_API_KEY}`,
    payload
  );
};
const signinWIthEmailAndPassword = (payload: any) => {
  return requestHandler.post(
    `${process.env.EXPO_PUBLIC_AUTH_BASE_URL}:${Endpoints.SIGN_IN_WITH_PASSWORD}?key=${process.env.EXPO_PUBLIC_FIREBASE_API_KEY}`,
    payload
  );
};

const getUserProfile = (payload: { idToken: string }) => {
  return requestHandler.post(
    `${process.env.EXPO_PUBLIC_AUTH_BASE_URL}:${Endpoints.LOOKUP}?key=${process.env.EXPO_PUBLIC_FIREBASE_API_KEY}`,
    payload
  );
};

const setPasswordEmail = (payload: any) => {
  return requestHandler.post(
    `${process.env.EXPO_PUBLIC_AUTH_BASE_URL}:${Endpoints.SEND_OOB_CODE}?key=${process.env.EXPO_PUBLIC_FIREBASE_API_KEY}`,
    { ...payload, requestType: "PASSWORD_RESET" }
  );
};

const updateUserProfile = (payload: any) => {
  return requestHandler.post(
    `${process.env.EXPO_PUBLIC_AUTH_BASE_URL}:${Endpoints.UPDATE_USER_PROFILE}?key=${process.env.EXPO_PUBLIC_FIREBASE_API_KEY}`,
    payload
  );
};

export const authService = {
  signupWIthEmailAndPassword,
  signinWIthEmailAndPassword,
  getUserProfile,
  setPasswordEmail,
  updateUserProfile,
};
