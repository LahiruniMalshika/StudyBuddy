import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

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
        <Text style={styles.title}>Sign In</Text>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.link}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8F9FD',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  backgroundImage: {
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: -50, // Adjust to overlap form slightly over image
    width: '90%',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#333',
    marginBottom: 25,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#FDFDFD',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  button: {
    width: '100%',
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  link: {
    marginTop: 15,
    color: '#6200EE',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default SignIn;
