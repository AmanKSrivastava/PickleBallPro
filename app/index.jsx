import { StatusBar } from "expo-status-bar";
import { ImageBackground, Text, View, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <ImageBackground
      source={images.bgImage}
      className="object-cover w-full h-full"
    >
      <SafeAreaView className="h-full">
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          {/* Main container */}
          <View className="flex-1 justify-between px-4">
            {/* Logo with space from top */}
            <View className="justify-start items-center mt-10">
              {" "}
              {/* Logo with margin-top */}
              <Image
                source={images.logo}
                className="w-[520px] h-[180px]"
                resizeMode="contain"
              />
            </View>

            {/* Login and Signup buttons with small gap */}
            <View className="justify-center items-center mt-4">
              {" "}
              {/* Reduced margin-top */}
              <View className="flex-row justify-center gap-4 w-full">
                <CustomButton
                  title="LOGIN"
                  handlePress={() => {}}
                  containerStyles="w-4/12"
                  textStyles="font-bold"
                />
                <CustomButton
                  title="SIGNUP"
                  handlePress={() => {}}
                  containerStyles="w-4/12"
                  textStyles="font-bold"
                />
              </View>
            </View>

            {/* Text at the bottom */}
            <View className="justify-center items-center mt-20 mb-10">
              {" "}
              {/* Spacing text to the bottom */}
              <Text className="text-3xl text-secondaryTextColor font-bold text-center">
                Game On, Pickleball Pro!
              </Text>
              <Text className="text-xl text-primaryTextColor font-bold italic text-center">
                Level Up Your Pickleball Experience
              </Text>
              <Text className="text-xl text-primaryTextColor font-bold italic text-center">
                Bringing Courts and Players Together.
              </Text>
            </View>
          </View>
        </ScrollView>
        <StatusBar backgroundColor="#161622" style="light" />
      </SafeAreaView>
    </ImageBackground>
  );
}
