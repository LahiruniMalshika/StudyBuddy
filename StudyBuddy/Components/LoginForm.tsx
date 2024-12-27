import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../Styles/Styles";

interface Props {
    navigation: NavigationProp<any>;
}

export default function LoginForm({ navigation }: Props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Handle Login functionality
    // const handleLogin = async () => {
    //     if (!email || !password) {
    //         Alert.alert("Error", "Please fill in all fields");
    //         return;
    //     }

    //     try {
    //         // Retrieve stored credentials from AsyncStorage
    //         const storedCredentials = await AsyncStorage.getItem("userCredentials");
    //         console.log("Stored credentials:", storedCredentials); // Debugging line

    //         if (storedCredentials) {
    //             const { email: storedEmail, password: storedPassword, userName: storedUserName } = JSON.parse(storedCredentials);

    //             console.log("Stored Email:", storedEmail); // Debugging line
    //             console.log("Stored Password:", storedPassword); // Debugging line
    //             console.log("Entered Email:", email); // Debugging line
    //             console.log("Entered Password:", password); // Debugging line

    //             // Validate input credentials with stored credentials
    //             if (email === storedEmail && password === storedPassword) {
    //                 Alert.alert("Success", "User logged in successfully");
    //                 navigation.navigate("Home", { username: storedUserName });
    //             } else {
    //                 Alert.alert("Error", "Invalid email or password");
    //             }
    //         } else {
    //             Alert.alert("Error", "No user found. Please register first.");
    //         }
    //     } catch (error) {
    //         console.error("Error retrieving user credentials:", error);
    //         Alert.alert("Error", "Failed to retrieve user credentials");
    //     }
    // };
    const handleLogin = async () => {
        if (!email || !password) {
          Alert.alert("Error", "Please fill in all fields");
          return;
        }
      
        // try {
        //   // Retrieve stored credentials from AsyncStorage
        //   const storedCredentials = await AsyncStorage.getItem("userCredentials");
        //   console.log("Stored credentials:", storedCredentials); // Debugging line
      
        //   if (storedCredentials) {
        //     const { email: storedEmail, password: storedPassword, userName: storedUserName } = JSON.parse(storedCredentials);
      
        //     console.log("Stored Email:", storedEmail); // Debugging line
        //     console.log("Stored Password:", storedPassword); // Debugging line
        //     console.log("Entered Email:", email); // Debugging line
        //     console.log("Entered Password:", password); // Debugging line
      
        //     // Validate input credentials with stored credentials
        //     if (email === storedEmail && password === storedPassword) {
        //       Alert.alert("Success", "User logged in successfully");
        //       navigation.navigate("Home", { username: storedUserName });
        //     } else {
        //       Alert.alert("Error", "Invalid email or password");
        //     }
        //   } else {
        //     Alert.alert("Error", "No user found. Please register first.");
        //   }
        // } catch (error) {
        //   console.error("Error retrieving user credentials:", error);
        //   Alert.alert("Error", "Failed to retrieve user credentials");
        // }
        
        try {
            const storedCredentials = await AsyncStorage.getItem("userCredentials");
            if (storedCredentials) {
              const {
                email: storedEmail,
                password: storedPassword,
                userName: storedUserName,
              } = JSON.parse(storedCredentials);
              if (email === storedEmail && password === storedPassword) {
                Alert.alert("Success", "User logged in successfully");
                navigation.navigate("Home", { username: storedUserName });
              } else {
                Alert.alert("Error", "Invalid email or password");
              }
            } else {
              Alert.alert("Error", "No user found. Please register first.");
            }
          } catch (error) {
            Alert.alert("Error", "Failed to retrieve user credentials");
          }
        };
      

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to StudyBuddy</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <Text style={styles.link} onPress={() => navigation.navigate("SignUp")}>
                Create Account
            </Text>
        </View>
    );
}
