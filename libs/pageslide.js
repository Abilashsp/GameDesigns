import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import PagerView from "react-native-pager-view";

const DynamicPagerView = () => {
  const [pages, setPages] = useState(8); // Initial number of pages
  const [selectedIndex, setSelectedIndex] = useState(0);

  const renderPages = () => {
    const pageArray = [];
    for (let i = 0; i < Math.ceil(pages / 2); i++) {
      const firstPageIndex = i * 2;
      const secondPageIndex = Math.min(firstPageIndex + 1, pages - 1);
      pageArray.push(
        <View key={i} style={styles.pageContainer}>
          <View style={styles.page} className="bg-[#c7f5d3]">
            <View className="w-full h-[60%]  rounded-lg ">
              <Image
                source={require("../assets/images/Pageslide_image01.png")}
                className="w-full h-full"
                style={{ objectFit: "contain" }}
              />
            </View>
            <View className="w-full h-[40%] flex items-center justify-center">
              <Text className="text-xl">Guess Words</Text>
              <Text className="text-sm text-gray-600">12 levels</Text>
            </View>
          </View>
          {secondPageIndex < pages && (
            <View style={styles.page} className="bg-[#cde0ff]">
              <View className="w-full h-[60%]  rounded-lg">
                <Image
                  source={require("../assets/images/Pageslide_image02.png")}
                  className="w-full h-full"
                  style={{ objectFit: "contain" }}
                />
              </View>
              <View className="w-full h-[40%] flex items-center justify-center">
              <Text className="text-xl">Draw puzzles</Text>
              <Text className="text-sm text-gray-600">8 levels</Text>
            </View>
            </View>
          )}
        </View>
      );
    }
    return pageArray;
  };

  const renderIndicators = () => {
    const indicators = [];
    for (let i = 0; i < Math.ceil(pages / 2); i++) {
      indicators.push(
        <TouchableOpacity
          key={i}
          style={[
            styles.indicator,
            i * 2 === selectedIndex && styles.selectedIndicator,
          ]}
          onPress={() => setSelectedIndex(i * 2)}
        />
      );
    }
    return indicators;
  };

  return (
    <View style={{ flex: 1 }}>
      <PagerView
        style={styles.pagerView}
        initialPage={0}
        onPageSelected={(event) =>
          setSelectedIndex(event.nativeEvent.position * 2)
        }
      >
        {renderPages()}
      </PagerView>
      <View style={styles.indicatorBar}>{renderIndicators()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  pageContainer: {
    flexDirection: "row",
    padding:6
  },
  page: {
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  indicatorBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  indicator: {
    width: 40,
    height: 6,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: "#e1e1e1",
  },
  selectedIndicator: {
    backgroundColor: "#ff9331",
  },
});

export default DynamicPagerView;
