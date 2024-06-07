import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const place = ["music", "game", "football", "doll", "rope skipping"];
const colors = ["#6fc685", "#6fc685", "#e97aa4", "#b391f8", "#6199f8"];

export default function Example({ refRBSheet }) {
  const [selectedplace, setselectedplace] = useState("music");

  const handleselectedplace = (value) => {
    setselectedplace(value);
  };

  return (
    <View className="mt-20 relative  ">
      <RBSheet
        ref={refRBSheet}
        closeDuration={300}
        openDuration={300}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
          container: {
            borderTopLeftRadius: 60,
            borderTopRightRadius: 60,
            borderWidth: 0.6,
            borderColor: "white",
            overflow: "visible",
            width: "95%",
            marginHorizontal: "auto",
          },
        }}
        customModalProps={{
          animationType: "fade",
          statusBarTranslucent: true,
        }}
        height={400}
      >
        <View className="w-full h-12  absolute z-20 -top-5  flex items-center justify-center  ">
          <TouchableOpacity className="w-3/5 bg-gray-50 h-full rounded-3xl flex  flex-row items-center px-2 shadow-md shadow-slate-800 ">
            <View className="w-[20%]  ">
              <View className=" w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <Octicons name="unmute" size={18} color="white" />
              </View>
            </View>
            <View className="w-[80%]  ">
              <Text className="text-lg px-3 text-gray-600">
                Listen the sentance
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <KeyboardAwareScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
          enableOnAndroid={true}
          extraHeight={150}
          keyboardShouldPersistTaps="handled"
        >
          <View style={{ flex: 1, position: "" }}>
            <View
              style={{
                padding: 20,
                borderRadius: 40,
                width: "100%",
                height: "100%",
              }}
              className="mx-auto bg-gray-50"
            >
              <View className="w-full  py-8  flex flex-row h-[30%]  ">
                <View className="flex flex-row flex-wrap  px-4 mx-auto">
                  <View>
                    <Text className="text-2xl text-gray-600 font-semibold tracking-widest whitespace-nowrap">
                      Sarah and her friend play
                    </Text>
                  </View>

                  <View className="h-7 w-7 mx-3  border-2 border-gray-400 rounded-lg  flex items-center">
                    <Text className="text-lg text-gray-600">...</Text>
                  </View>
                  <View>
                    <Text className="text-2xl text-gray-600 font-semibold tracking-widest">
                      at home
                    </Text>
                  </View>
                </View>
              </View>
              <View className="w-full h-[50%] ">
                <View className="flex flex-row flex-wrap px-3">
                  {place.map((r, index) => (
                    <TouchableOpacity
                      key={r}
                      className={`rounded-md px-2 my-2 h-10 border border-gray-400 mx-2 flex items-center justify-center ${
                        selectedplace == r ? "bg-blue-600" : ""
                      }`}
                      onPress={() => handleselectedplace(r)}
                    >
                      <Text
                        className={`text-lg `}
                        style={{
                          color: selectedplace == r ? "white" : colors[index],
                        }}
                      >
                        {r}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              <TouchableOpacity
                className="w-4/5 h-12 mx-auto"
                onPress={() => refRBSheet.current.open()}
              >
                <View className="bg-orange-300 rounded-full w-full px-8 h-full flex items-center justify-center">
                  <Text className="text-2xl text-white font-bold ">Answer</Text>
                </View>
                <View className="bg-orange-400 rounded-full w-full h-full absolute top-1 left-0 -z-10" />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </RBSheet>
    </View>
  );
}
