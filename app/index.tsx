import { ImageBackground, Text, View } from "react-native";

import Button from "@/components/Button";

const index = () => {
  return (
    <View className="flex-1 gap-8">
      <View className="h-[52%] bg-brand">
        <ImageBackground
          source={require("../assets/images/home.png")}
          className="  bg-brand p-0 m-0 h-full"
          resizeMode="cover"
        />
      </View>
      <View className="items-center ">
        <Text className="text-[30px] text-center font-[RalewaySemiBold]">
          Get Your Task Done with Just a Few Taps
        </Text>
        <Text className="text-lg text-center font-[RalewayRegular] pt-4">
          Find the right person for the job, fast and hassle-free
        </Text>
      </View>
      <View className="gap-3 items-center p-4">
        <Button label="Get Started" />
        <Button
          label="I already have an account"
          variant="outline"
          additionalStyles="mt-4"
        />
      </View>
    </View>
  );
};

export default index;
