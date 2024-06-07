import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Pageslide from "./../../libs/pageslide";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function index() {
  const [keyboardShow, setKeyboardShow] = React.useState();
  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardShow(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardShow(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <SafeAreaView
      className={` bg-[#ded5f1] border-[10px] border-white rounded-[40px] ${
        keyboardShow ? " border-none" : ""
      } `}
    >
      <View className={` p-10 `}>
        <View className="w-full  h-[15%] flex items-center justify-center">
          <Text className="text-2xl">Hello,Antonie!</Text>
          <Text className="text-3xl py-2 tracking-wider">
            Let's be smart together
          </Text>
        </View>
        <View className="w-full h-[35%] ">
          <Image
            source={require("../../assets/images/Homepic.png")}
            className="w-full h-full"
            style={{ objectFit: "contain" }}
          />
        </View>
        <View className="w-full h-[15%]  pt-4  ">
          <View
            className={`w-full h-full relative mx-auto mt-3 ${
              keyboardShow ? " h-16 mb-10" : ""
            }`}
          >
            <View className="absolute z-20 top-[15%] left-3">
              <Ionicons name="search-outline" size={30} color="#565858" />
            </View>
            <TextInput
              className="w-full bg-white  h-14 rounded-3xl pl-16 text-xl font-medium "
              placeholder="I want to play.."
              placeholderTextColor="#808282"
            />
            <View className="w-[99%] bg-[#f7f8f6] absolute right-0 left-0.5 bottom-[33%] -z-10  h-3/5 rounded-3xl "></View>
          </View>
        </View>
        <View className={`w-full h-[30%] ${keyboardShow ? " h-60 mt-10" : ""}`}>
          <View className="w-full h-full relative mx-auto ">
            <View className="w-full bg-white  h-[96%] rounded-3xl py-2  text-lg bg">
              <Pageslide />
            </View>
            <View className="w-[99%] bg-[#f7f8f6] absolute right-0 left-0.5 bottom-0 -z-10  h-3/5 rounded-3xl "></View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
