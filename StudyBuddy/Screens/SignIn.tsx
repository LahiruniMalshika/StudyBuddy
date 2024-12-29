import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import styles from '../Styles/Styles';
import LoginForm from '../Components/LoginForm';

type SignInScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignIn'>;

type Props = {
  navigation: SignInScreenNavigationProp;
};

const SignIn: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/backgroundImage.png')} // Updated with the uploaded image
          style={styles.backgroundImage}
        />
      </View>

      <View style={styles.formContainer}>
      <LoginForm navigation={navigation} />
      </View>
    </View>
  );
};

export default SignIn;
