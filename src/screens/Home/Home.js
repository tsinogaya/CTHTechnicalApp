import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import logo from "../../../assets/123 1.png";
import CircleAvatar from "../../components/CircleAvatar/CircleAvatar";
import { dashboardData, footerData } from "../../utils/data";
import MIcon from "react-native-vector-icons/MaterialIcons";

const Home = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <View style={styles.curveBackground} />

      <View style={styles.container}>
        <View style={styles.navigationBar}>
          <CircleAvatar
            isIcon
            icon="arrow-back-ios"
            iconStyle={{ marginLeft: 5 }}
          />

          <Image source={logo} style={styles.logoStyle} />

          <View style={styles.navigationBarSubContainer}>
            <CircleAvatar isIcon style={{ marginRight: 10 }} icon="dark-mode" />

            <CircleAvatar source={logo} />
          </View>
        </View>

        <View style={styles.subContainer}>
          <FlatList
            contentContainerStyle={styles.subContentContainer}
            data={dashboardData}
            renderItem={({ item, index }) => {
              const isLastItem = index === 4;
              return (
                <View
                  style={[
                    styles.subContentItemContainer,
                    isLastItem && {
                      flexDirection: "row",
                      width: 282,
                      height: 96,
                    },
                  ]}
                >
                  <Image
                    source={item.source}
                    style={[
                      styles.imageStyle,
                      !isLastItem && { marginBottom: 10 },
                    ]}
                    resizeMode="cover"
                  />
                  <Text
                    style={[styles.itemTitle, isLastItem && { marginLeft: 10 }]}
                  >
                    {item.title}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <FlatList
          contentContainerStyle={styles.footerContentContainer}
          scrollEnabled={false}
          data={footerData}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.footerItemContainer}>
                <MIcon
                  size={24}
                  color="#fff"
                  name={item.icon}
                  style={styles.footerIcon}
                />
                <Text style={styles.footerTitle}>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  curveBackground: {
    backgroundColor: "#8E8E8E",
    width: "100%",
    height: 205,
    position: "absolute",
    top: 0,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  container: {
    height: "92%",
    alignItems: "center",
    paddingVertical: 80,
    paddingHorizontal: 40,
  },

  navigationBar: {
    width: "100%",
    height: 48,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  subContainer: {
    backgroundColor: "#fff",
    marginTop: 40,
    width: "100%",
    borderRadius: 30,
    padding: 15,
  },

  subContentContainer: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  subContentItemContainer: {
    borderWidth: 1,
    borderColor: "#EAEAEA",
    padding: 20,
    display: "flex",
    alignItems: "center",
    height: 128,
    width: 134,
    justifyContent: "center",
    marginBottom: 20,
    marginLeft: 10,
  },

  logoStyle: {
    width: 102,
    height: 27,
  },

  navigationBarSubContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  imageStyle: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#000",
  },

  itemTitle: {
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 24,
    textTransform: "uppercase",
    textAlign: "center",
  },

  footer: {
    backgroundColor: "#8E8E8E",
    width: "100%",
    height: 68,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  footerContentContainer: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    height: "100%",
    paddingHorizontal: 25,
  },

  footerItemContainer: { alignItems: "center", justifyContent: "center" },

  footerIcon: { marginBottom: 5 },

  footerTitle: {
    fontSize: 12,
    lineHeight: 22,
    fontWeight: "400",
    color: "#fff",
  },
});
