import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

import MIcon from "react-native-vector-icons/MaterialIcons";

const CircleAvatar = (props) => {
  const { style, isIcon, source, icon, iconStyle } = props;

  return (
    <View style={[styles.container, style]}>
      {isIcon ? (
        <TouchableOpacity style={styles.iconContainer}>
          <MIcon
            size={20}
            color="#fff"
            name={icon ? icon : "home"}
            style={iconStyle}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity>
          <Image source={source} style={styles.imageStyle} resizeMode="cover" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CircleAvatar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7B7B7B",
    width: 40,
    height: 40,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  imageStyle: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#000",
  },
});
