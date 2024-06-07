import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState, useRef } from "react";
import Bottomsheet from "./../../libs/Bottomsheet";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function Games() {
  const refRBSheet = useRef();

  return (
    <View className="w-full h-full  bg-[#cde0ff] relative overflow-hidden border-[10px] border-white rounded-[40px]">
      <View className=" w-44 h-44 rounded-full bg-[#bdd4fb] absolute top-[10%] -left-[25%] -z-10 " />
      <View className=" w-80 h-80 rounded-full bg-[#bdd4fb] absolute bottom-[20%] -right-[40%] -z-10" />
      <View className="w-full h-[20%]  flex  px-4 justify-between flex-row items-center">
        <TouchableOpacity className="w-12 h-12 relative">
          <View className="bg-white rounded-full w-full h-full flex items-center justify-center">
            <AntDesign name="arrowleft" size={24} color="gray" />
          </View>
          <View className="bg-[#e8e8e7] rounded-full w-full h-full absolute top-1 left-0 -z-10" />
        </TouchableOpacity>

        <TouchableOpacity className="w-auto h-12 relative">
          <View className="bg-white rounded-full w-full px-8 h-full flex items-center justify-center">
            <Text className="text-xl ">Level 2</Text>
          </View>
          <View className="bg-[#e8e8e7] rounded-full w-full h-full absolute top-1 left-0 -z-10" />
        </TouchableOpacity>

        <TouchableOpacity className="w-12 h-12 relative">
          <View className="bg-white rounded-full w-full h-full flex items-center justify-center">
            <Entypo name="dots-three-vertical" size={24} color="gray" />
          </View>
          <View className="bg-[#e8e8e7] rounded-full w-full h-full absolute top-1 left-0 -z-10" />
        </TouchableOpacity>
      </View>
      <View className="w-full h-[40%]">
        <Image
          source={require("./../../assets/images/Game_image01.png")}
          className="w-4/5 h-4/6 mx-auto"
          style={{ objectFit: "fill" }}
        />
      </View>
      <View className="w-full h-[40%] ">
        <TouchableOpacity className="w-4/5 h-12 mx-auto"onPress={() => refRBSheet.current.open()}>
          <View className="bg-orange-300 rounded-full w-full px-8 h-full flex items-center justify-center">
            <Text className="text-2xl text-white font-bold ">Show options</Text>
          </View>
          <View className="bg-orange-400 rounded-full w-full h-full absolute top-1 left-0 -z-10" />
        </TouchableOpacity>
      </View>
      <View className="w-4/5 mx-auto ">
        <Bottomsheet refRBSheet={refRBSheet} />
      </View>
    </View>
  );
}
