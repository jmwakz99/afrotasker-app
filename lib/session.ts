import * as SecureStore from "expo-secure-store";

export const createSession = async (
  idToken: string,
  expiresIn: string,
  refreshToken: string
) => {
  try {
    await SecureStore.setItemAsync("session", idToken);
    await SecureStore.setItemAsync("expiresIn", expiresIn);
    await SecureStore.setItemAsync("refreshToken", refreshToken);

    return {
      success: true,
      code: 200,
      message: "Session created successfully",
    };
  } catch (error) {
    console.error("Error storing the token:", error);
    return {
      success: false,
      code: 500,
      message: "Error storing the token",
    };
  }
};

export const verifySession = async () => {
  try {
    const token = await SecureStore.getItemAsync("session");
    if (token) {
      return token; // JWT token
    } else {
      console.log("No token found");
      return null;
    }
  } catch (error) {
    return null;
  }
};

export const destroySession = async () => {
  try {
    await SecureStore.deleteItemAsync("session");
    await SecureStore.deleteItemAsync("expiresIn");
    await SecureStore.deleteItemAsync("refreshToken");
    return {
      success: true,
      code: 200,
      message: "Session destroyed successfully",
    };
  } catch (error) {
    return {
      success: false,
      code: 500,
      message: "Error deleting the token",
    };
  }
};
