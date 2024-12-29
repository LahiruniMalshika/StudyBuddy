import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";
import styles from "../Styles/Styles";
import RegistrationForm from "../Components/RegistrationForm";

type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SignUp"
>;

type Props = {
  navigation: SignUpScreenNavigationProp;
};

const SignUp: React.FC<Props> = ({ navigation }) => {
  // Managing state for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Handle Sign Up action (you can add more functionality here)
  const handleSignUp = () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    // Perform form validation and authentication here
    console.log("Signing up with:", { name, email, password });

    // Example of navigation after signup (this can be changed as per your requirements)
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.container}>
      {/* Image Container */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/backgroundImage.png")} // Ensure this path is correct
          style={styles.backgroundImage}
        />
      </View>

      {/* Form Container */}
      <View style={styles.formContainer}>
        <RegistrationForm navigation={navigation} />
      </View>
    </View>
  );
};

export default SignUp;
