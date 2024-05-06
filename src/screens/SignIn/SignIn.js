import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";

import logo from "../../../assets/123 1.png";
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  const navigation = useNavigation();
  const [isFocus, setIsFocus] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
    Keyboard.dismiss();
  };

  const handleOnChangeText = (key) => (text) => {
    console.log("key text", key, text);
    setUser((prev) => {
      return {
        ...prev,
        [key]: text,
      };
    });
  };

  const handleSignIn = () => {
    const { email, password } = user;
    console.log("user signin", user);

    if (email === "johndoe@example.com" && password === "Password123!") {
      navigation.replace("Home");
    } else {
      Alert.alert("User not found");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.loginContainer}
    >
      {!isFocus && (
        <View style={styles.imageContainer}>
          <Image source={logo} style={[styles.logoStyle]} />
          <View style={styles.separator} />
          <Image source={logo} style={[styles.logoStyle]} />
        </View>
      )}

      <View
        style={[styles.inputContainer, { height: isFocus ? "83%" : "55%" }]}
      >
        <Text style={styles.headerTitle}>sign in to your account</Text>

        <TextInput
          style={styles.inputStyle}
          placeholderTextColor="#fff"
          placeholder="Email"
          autoCapitalize="none"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleOnChangeText("email")}
        />

        <TextInput
          style={styles.inputStyle}
          placeholderTextColor="#fff"
          placeholder="Password"
          secureTextEntry
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleOnChangeText("password")}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
          <Text>Sign in</Text>
        </TouchableOpacity>

        <Text style={styles.subText}>Forgot password?</Text>

        <TouchableOpacity style={styles.socialLoginButton}>
          <Text style={styles.tabTitle}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  loginContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "white",
  },

  imageContainer: {
    height: "45%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  separator: {
    backgroundColor: "#D7D7D7",
    width: 278,
    height: 1,
    marginVertical: 10,
  },

  logoStyle: {
    width: 143,
    height: 72,
  },

  adjustedLogoStyle: {
    height: 50,
    width: 120,
  },

  inputContainer: {
    backgroundColor: "#8E8E8E",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: {
    textTransform: "uppercase",
    fontWeight: "700",
    color: "#fff",
    lineHeight: 24,
  },

  inputStyle: {
    borderWidth: 1,
    borderRadius: 71,
    borderColor: "#fff",
    width: 279,
    height: 45,
    padding: 13,
  },

  loginButton: {
    backgroundColor: "#fff",
    width: 279,
    height: 44,
    borderRadius: 71,
    alignItems: "center",
    justifyContent: "center",
  },

  subText: {
    color: "#fff",
    fontSize: "12px",
    lineHeight: 22,
  },

  tabTitle: {
    fontSize: "12px",
    lineHeight: 22,
    color: "#595959",
  },

  socialLoginButton: {
    backgroundColor: "#fff",
    width: 279,
    height: 38,
    borderRadius: 71,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
