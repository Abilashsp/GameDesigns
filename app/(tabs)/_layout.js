import { Tabs } from "expo-router";
import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


export default function TabLayout() {
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

  function CustomTabBar({ state, descriptors, navigation }) {
    return (
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 70,
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: keyboardShow ? -100 : 0,
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <View key={route.key} style={styles.tabItem}>
              {isFocused && <View style={styles.activeBar} />}
              <TabBarIcon
                name={isFocused ? options.iconFocused : options.icon}
                color={isFocused ? "orange" : "gray"}
                onPress={onPress}
                onLongPress={onLongPress}
              />
            </View>
          );
        })}
      </View>
    );
  }

  return (
    <KeyboardAwareScrollView
    style={{ backgroundColor: '#4c69a5' }}
    resetScrollToCoords={{ x: 0, y: 0 }}
    contentContainerStyle={{flex:1,height:800}}
    scrollEnabled={false}
  >
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            icon: "home-outline",
            iconFocused: "home",
          }}
        />
        <Tabs.Screen
          name="Games"
          options={{
            title: "Games",
            icon: "albums-outline",
            iconFocused: "albums",
          }}
        />
        <Tabs.Screen
          name="Medal"
          options={{
            title: "Medal",
            icon: "medal-outline",
            iconFocused: "medal",
          }}
        />
        <Tabs.Screen
          name="Gift"
          options={{
            title: "Gift",
            icon: "gift-outline",
            iconFocused: "gift",
          }}
        />
        <Tabs.Screen
          name="Setting"
          options={{
            title: "Setting",
            icon: "settings-outline",
            iconFocused: "settings",
          }}
        />
      </Tabs>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  tabItem: {
    alignItems: "center",
  },
  activeBar: {
    width: "100%",
    height: 4,
    backgroundColor: "orange",
    position: "absolute",
    top: -14,
  },
});
