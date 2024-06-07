import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Swipeanime from "./../../libs/Swipeanime";

export default function Gift() {
  return (
    <View className="w-full h-full bg-[#b2eac0] border-[10px] border-white rounded-[40px]">
      <View className="w-full h-[20%] flex items-center justify-center">
        <TouchableOpacity className="w-52 h-12 relative">
          <View className="bg-white rounded-full w-full px-4 h-full flex items-center justify-center flex-row">
            <View className="w-[20%] flex items-center justify-center ">
              <AntDesign name="checkcircle" size={30} color="#6cc783" />
            </View>
            <View className="w-[80%] flex items-center  ">
              <Text className="text-xl tracking-wider ">Level 2 passed</Text>
            </View>
          </View>
          <View className="bg-[#e8e8e7] rounded-full w-full h-full absolute top-1 left-0 -z-10" />
        </TouchableOpacity>
      </View>
      <View className="w-full h-[70%]   flex items-center py-2">
        <View className="w-4/5 h-[90%] relative">
          <View className="bg-white  w-full px-4 h-full flex rounded-3xl  py-2">
            <View className="w-full h-[35%]">
              <Image
                source={require("./../../assets/images/Game_image02.png")}
                className="w-full h-full"
                style={{ objectFit: "contain" }}
              />
            </View>
            <View className="w-full h-[35%] ">
              <View className="px-4 py-3 flex items-center justify-center">
                <Text className="text-4xl">Congratulations !</Text>
              </View>
              <View className="px-4 py-3 flex items-center justify-center">
                <Text className="text-lg">you choosed the right answer!</Text>
                <Text className="text-lg">lets play another one!</Text>
              </View>
            </View>
            <View className="w-full h-[30%]  ">
              <TouchableOpacity className="w-full h-12 mx-auto">
                <View className="bg-orange-300 rounded-full w-full px-8 h-full flex items-center justify-center">
                  <Text className="text-2xl text-white font-bold ">next</Text>
                </View>
                <View className="bg-orange-400 rounded-full w-full h-full absolute top-1 left-0 -z-10" />
              </TouchableOpacity>
              <TouchableOpacity className="w-full h-12 mx-auto mt-4 ">
                <View className=" rounded-full w-full  h-full flex items-center justify-center">
                  <Text className="text-2xl text-gray-700 font-medium ">
                    no, I want to take a rest
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View className="bg-[#f0f0f0]  w-full h-full absolute top-2 left-0 -z-10 rounded-3xl" />
        </View>
        <View className="flex items-center justify-center py-4 ">
          <Swipeanime />
        </View>
      </View>
    </View>
  );
}
