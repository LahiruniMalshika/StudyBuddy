import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../Styles/Styles";

interface Props {
  navigation: NavigationProp<any>;
}

export default function RegistrationForm({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Email validation regex
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Password validation regex
  const validatePassword = (password: string) => {
    const re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };

  // Handle registration logic
  const handleRegistration = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }
    if (!validatePassword(password)) {
      Alert.alert(
        "Error",
        "Password must be at least 8 characters long and include uppercase, lowercase, numbers, and symbols"
      );
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      const userCredentials = { email, password, userName };
      await AsyncStorage.setItem("userCredentials", JSON.stringify(userCredentials));

      // Debugging AsyncStorage to see if the credentials were stored
      const storedData = await AsyncStorage.getItem("userCredentials");
      console.log("Stored user credentials:", storedData);

      Alert.alert("Success", "User registered successfully");
      navigation.navigate("SignIn");  // Ensure SignIn screen name is correct
    } catch (error) {
      console.error("Error saving user credentials:", error);
      Alert.alert("Error", "Failed to save user credentials");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      
      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      
      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="UserName"
        value={userName}
        onChangeText={setUserName}
      />
      
      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      {/* Confirm Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      
      {/* Register Button */}
      <TouchableOpacity style={styles.button} onPress={handleRegistration}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      
      {/* Navigation Link to SignIn */}
      <Text
        style={styles.link}
        onPress={() => navigation.navigate("SignIn")}
      >
        Already have an account? Sign In
      </Text>
    </View>
  );
}
