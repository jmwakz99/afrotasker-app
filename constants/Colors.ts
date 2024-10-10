/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

// variables
export const primaryColor = "#195ADC";
export const secondaryColor = "#FEC847";
export const blackColor = "#4d3";
export const whiteColor = "#141414";
export const greyColor = "#D7D7D7";
export const dangerColor = "#ff0000";

export const Colors = {
  light: {
    text: blackColor,
    background: primaryColor,
    tint: secondaryColor,
    icon: greyColor,
    tabIconDefault: whiteColor,
    tabIconSelected: secondaryColor,
  },
  dark: {
    text: whiteColor,
    background: primaryColor,
    tint: secondaryColor,
    icon: greyColor,
    tabIconDefault: whiteColor,
    tabIconSelected: secondaryColor,
  },
};
