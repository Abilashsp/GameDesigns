import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const SwipeUpIndicator = () => {
  const translateY = useSharedValue(0);

  // Create an up-down animation loop
  translateY.value = withRepeat(
    withTiming(10, { duration: 500 }), // Move 10 units down in 500ms
    -1, // Repeat indefinitely
    true // Reverse on repeat
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.iconContainer, animatedStyle]}>
        <AntDesign name="up" size={15} color="black" />
      </Animated.View>
      <Text style={styles.text}>Swipe up to see your score</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    marginBottom: 4,
  },
  text: {
    fontSize: 20,
  },
});

export default SwipeUpIndicator;
